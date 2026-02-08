import { NextRequest, NextResponse } from 'next/server';

// Type definitions
interface ContactFormData {
  lastName: string;
  firstName: string;
  companyName: string;
  department: string;
  position: string;
  phone: string;
  email: string;
  recruitmentAreas: string[];
  message: string;
  recaptchaToken: string;
}

interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not configured');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data: RecaptchaResponse = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}

// Map interest keys to Japanese labels for Discord
const interestKeyToLabel: Record<string, string> = {
  fastpass: 'AI面接練習データ活用の採用マッチング「FastPass」',
  aiFest: '大規模採用イベント「AIチャレンジャーズフェス」',
  meetup: '少人数制採用イベント「FastPass meetup」',
  bestTeach: '東大王の家庭教師「ベストティーチ」',
  media: 'メディア取材・掲載',
  other: 'その他',
};

// Send notification to Discord
async function sendToDiscord(formData: ContactFormData): Promise<boolean> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not configured');
    return false;
  }

  // Convert keys to Japanese labels
  const areasLabels = formData.recruitmentAreas
    .map(key => interestKeyToLabel[key] || key)
    .join(', ');

  const embedMessage = {
    embeds: [{
      title: '新しいお問い合わせ',
      color: 0x4dd9d9,
      fields: [
        { name: '氏名', value: `${formData.lastName} ${formData.firstName}`, inline: true },
        { name: '会社名', value: formData.companyName, inline: true },
        { name: '部署', value: formData.department || '未入力', inline: true },
        { name: '役職', value: formData.position || '未入力', inline: true },
        { name: '電話番号', value: formData.phone, inline: true },
        { name: 'メールアドレス', value: formData.email, inline: true },
        { name: '採用領域', value: areasLabels, inline: false },
        { name: 'お問い合わせ内容', value: formData.message, inline: false },
      ],
      timestamp: new Date().toISOString(),
    }],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(embedMessage),
    });

    return response.ok;
  } catch (error) {
    console.error('Discord webhook failed:', error);
    return false;
  }
}

// Send data to Google Sheets
async function sendToGoogleSheets(formData: ContactFormData): Promise<boolean> {
  const scriptUrl = process.env.GOOGLE_SHEETS_URL;

  if (!scriptUrl) {
    console.error('GOOGLE_SHEETS_URL is not configured');
    return false;
  }

  // Convert keys to Japanese labels
  const areasLabels = formData.recruitmentAreas
    .map(key => interestKeyToLabel[key] || key);

  try {
    await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        lastName: formData.lastName,
        firstName: formData.firstName,
        companyName: formData.companyName,
        department: formData.department,
        position: formData.position,
        phone: formData.phone,
        email: formData.email,
        recruitmentAreas: areasLabels,
        message: formData.message,
      }),
    });

    // Google Apps Script with no-cors mode doesn't return a proper response
    // so we assume success if no error is thrown
    return true;
  } catch (error) {
    console.error('Google Sheets submission failed:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields: (keyof ContactFormData)[] = [
      'lastName',
      'firstName',
      'companyName',
      'phone',
      'email',
      'message',
      'recaptchaToken',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    if (!body.recruitmentAreas || body.recruitmentAreas.length === 0) {
      return NextResponse.json(
        { success: false, error: 'recruitmentAreas is required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(body.recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Send to both Discord and Google Sheets in parallel
    const [discordSuccess, sheetsSuccess] = await Promise.all([
      sendToDiscord(body),
      sendToGoogleSheets(body),
    ]);

    // Log results for monitoring
    if (!discordSuccess) {
      console.warn('Discord notification failed but continuing...');
    }
    if (!sheetsSuccess) {
      console.warn('Google Sheets submission failed but continuing...');
    }

    // Return success even if one service fails (to not block user)
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
