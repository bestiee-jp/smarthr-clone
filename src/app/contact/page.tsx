'use client';

import { useState, useRef, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    companyName: '',
    department: '',
    position: '',
    phone: '',
    email: '',
    recruitmentAreas: [] as string[],
    message: '',
    privacyAgreed: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const STORAGE_KEY = 'bestiee_contact_form';

  // Load saved form data on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch {
        // Invalid data, ignore
      }
    }
    setIsLoaded(true);
  }, []);

  // Save form data on change (only after initial load)
  useEffect(() => {
    if (isLoaded && !isSubmitted) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, isSubmitted, isLoaded]);

  // Required fields in order
  const requiredFields = ['lastName', 'firstName', 'companyName', 'phone', 'email', 'recruitmentAreas', 'message', 'privacyAgreed'];

  // All fields in form order (including optional fields)
  const fieldOrder = ['lastName', 'firstName', 'companyName', 'department', 'position', 'phone', 'email', 'recruitmentAreas', 'message', 'privacyAgreed'];

  // Check if field should show error (touched and empty)
  const shouldShowError = (fieldName: string) => {
    if (!touched[fieldName]) return false;
    if (fieldName === 'recruitmentAreas') return formData.recruitmentAreas.length === 0;
    if (fieldName === 'privacyAgreed') return !formData.privacyAgreed;
    return !formData[fieldName as keyof typeof formData];
  };

  // Check if all required fields are filled
  const isFormComplete = () => {
    return formData.lastName !== '' &&
           formData.firstName !== '' &&
           formData.companyName !== '' &&
           formData.phone !== '' &&
           formData.email !== '' &&
           formData.recruitmentAreas.length > 0 &&
           formData.message !== '' &&
           formData.privacyAgreed &&
           recaptchaToken !== null;
  };

  // reCAPTCHA handlers
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
  };

  // Mark previous required fields as touched when focusing on a field
  const handleFieldFocus = (fieldName: string) => {
    const fieldIndex = fieldOrder.indexOf(fieldName);
    if (fieldIndex > 0) {
      const newTouched = { ...touched };
      // Mark all required fields before this field as touched
      for (let i = 0; i < fieldIndex; i++) {
        const field = fieldOrder[i];
        if (requiredFields.includes(field)) {
          newTouched[field] = true;
        }
      }
      setTouched(newTouched);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Mark field as touched
    setTouched(prev => ({ ...prev, [name]: true }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (value: string) => {
    handleFieldFocus('recruitmentAreas');
    setFormData(prev => {
      const areas = prev.recruitmentAreas.includes(value)
        ? prev.recruitmentAreas.filter(a => a !== value)
        : [...prev.recruitmentAreas, value];
      return { ...prev, recruitmentAreas: areas };
    });
    setTouched(prev => ({ ...prev, recruitmentAreas: true }));
    if (errors.recruitmentAreas) {
      setErrors(prev => ({ ...prev, recruitmentAreas: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.lastName) newErrors.lastName = '姓は必須です。';
    if (!formData.firstName) newErrors.firstName = '名は必須です。';
    if (!formData.companyName) newErrors.companyName = '会社名は必須です。';
    if (!formData.phone) newErrors.phone = '電話番号は必須です。';
    if (!formData.email) newErrors.email = '勤務先メールアドレスは必須です。';
    if (formData.recruitmentAreas.length === 0) newErrors.recruitmentAreas = '採用に関わられている領域は必須です。';
    if (!formData.message) newErrors.message = 'お問い合わせ内容は必須です。';
    if (!formData.privacyAgreed) newErrors.privacyAgreed = 'プライバシーポリシーへの同意は必須です。';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Discord webhook
      const discordWebhookUrl = 'https://discord.com/api/webhooks/1464471802486194438/Sv21dT-OaenKaYCt_mEp6uO7PGLJLj3Pun1Ce4qb55JsCvLtGZSk43DzaqPj1_aicLyo';

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
            { name: '採用領域', value: formData.recruitmentAreas.join(', '), inline: false },
            { name: 'お問い合わせ内容', value: formData.message, inline: false },
          ],
          timestamp: new Date().toISOString(),
        }],
      };

      // Send to Google Sheets
      const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzdBouyTrx8Tjl_53ATyS4izjP4muCjGoGlMkgsxpTWEIl_IiJJugD44o8guuYCFDbD/exec';

      // Send both requests in parallel
      await Promise.all([
        fetch(discordWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(embedMessage),
        }),
        fetch(googleScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
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
            recruitmentAreas: formData.recruitmentAreas,
            message: formData.message,
          }),
        }),
      ]);

      sessionStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      // Still show success to user even if notification fails
      sessionStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);
    }

    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8fafc', paddingTop: '80px', paddingBottom: '40px' }}>
        <div style={{ padding: '0 5%' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 'bold',
            color: 'black',
          }}>
            お問い合わせ
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            marginTop: '12px',
          }}>
            Contact
          </p>

          {/* Breadcrumb */}
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginTop: '24px',
          }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>トップ</Link>
            <span style={{ margin: '0 8px' }}>-</span>
            <span>お問い合わせ</span>
          </div>
        </div>
      </section>

      {/* Form Section - Two Column Layout */}
      <section style={{ backgroundColor: 'white', padding: '60px 5%', flex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {isSubmitted ? (
            /* Success Message */
            <div style={{
              textAlign: 'center',
              padding: '60px 40px',
              backgroundColor: '#f0fdfa',
              borderRadius: '16px',
              border: '1px solid #1E5AA8',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
                送信が完了しました
              </h2>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
                お問い合わせいただきありがとうございます。<br />
                内容を確認の上、担当者よりご連絡いたします。
              </p>
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  marginTop: '32px',
                  padding: '16px 32px',
                  backgroundColor: '#333',
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  transition: 'border-radius 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderRadius = '8px'}
                onMouseLeave={(e) => e.currentTarget.style.borderRadius = '50px'}
              >
                トップページへ戻る
              </Link>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              gap: '80px',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
              {/* Left Column - Info & Awards */}
              <div style={{ flex: '1', minWidth: '360px', maxWidth: '700px' }}>
                {/* Intro Text */}
                <div style={{
                  fontSize: '15px',
                  lineHeight: '1.9',
                  color: '#333',
                  marginBottom: '32px',
                }}>
                  <p>
                    弊社にご興味をお持ちいただき、誠にありがとうございます。<br />
                    AI採用マッチング・採用イベントなど、優秀学生の新卒採用に関して幅広くご提案いたします。
                  </p>
                </div>

                {/* Past Support Section */}
                <div style={{ marginTop: '40px' }}>
                  {/* Title */}
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#333',
                    textAlign: 'center',
                    marginBottom: '32px',
                    lineHeight: '1.6',
                  }}>
                    大手・メガベンチャーからスタートアップまで<br />
                    <span style={{ color: '#4d7cff' }}>30社以上</span>の支援実績
                  </h3>

                  {/* Two Column Layout */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '32px',
                  }}>
                    {/* Left Column - 大手・メガベンチャー */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>🏢</span>
                        <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>大手・メガベンチャー</h4>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          'ソフトバンク株式会社',
                          'GMOインターネットグループ株式会社',
                          '株式会社ディー・エヌ・エー',
                          '株式会社メルカリ',
                          'A.T.カーニー株式会社',
                        ].map((company) => (
                          <li key={company} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            color: '#333',
                            marginBottom: '12px',
                          }}>
                            <span style={{ color: '#1E5AA8', fontSize: '16px' }}>▶</span>
                            {company}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - スタートアップ */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>🚀</span>
                        <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>スタートアップ</h4>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          '株式会社Sales Marker',
                          '株式会社FUNDiT',
                          '株式会社オズビジョン',
                          '株式会社Sapeet',
                          'bravesoft株式会社',
                        ].map((company) => (
                          <li key={company} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            color: '#333',
                            marginBottom: '12px',
                          }}>
                            <span style={{ color: '#1E5AA8', fontSize: '16px' }}>▶</span>
                            {company}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{
                    borderBottom: '1px solid #e5e7eb',
                    marginTop: '32px',
                  }}></div>
                </div>

                {/* Media Section */}
                <div style={{ marginTop: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ width: '4px', height: '24px', background: 'linear-gradient(135deg, #1E5AA8 0%, #00A3E0 100%)' }}></div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>メディア掲載実績</h3>
                  </div>

                  {/* Media Images */}
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                  }}>
                    <img
                      src="/media/メディア掲載1.jpg"
                      alt="メディア掲載実績1"
                      style={{
                        width: 'calc(50% - 8px)',
                        borderRadius: '8px',
                        objectFit: 'cover',
                      }}
                    />
                    <img
                      src="/media/メディア掲載2.jpg"
                      alt="メディア掲載実績2"
                      style={{
                        width: 'calc(50% - 8px)',
                        borderRadius: '8px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div style={{ flex: '0 0 auto', width: '480px', minWidth: '380px', maxWidth: '480px', backgroundColor: '#f7fefe', padding: '28px', borderRadius: '8px', alignSelf: 'flex-start', position: 'sticky', top: '100px' }}>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '24px',
                }}>
                  下記フォームにご記入ください。(1分)
                </h2>

                {/* Error Message */}
                {Object.keys(errors).length > 0 && (
                  <div style={{
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    marginBottom: '20px',
                    color: '#dc2626',
                    fontSize: '14px',
                  }}>
                    {Object.values(errors).map((error, index) => (
                      <div key={index}>*{error}</div>
                    ))}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Last Name Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="lastName"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '8px',
                      }}
                    >
                      姓
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>必須</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: (errors.lastName || shouldShowError('lastName')) ? '2px solid #dc2626' : '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none',
                        backgroundColor: (errors.lastName || shouldShowError('lastName')) ? '#fef2f2' : 'white',
                      }}
                      onFocus={(e) => {
                        handleFieldFocus('lastName');
                        if (!errors.lastName && !shouldShowError('lastName')) e.currentTarget.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        setTouched(prev => ({ ...prev, lastName: true }));
                        if (!errors.lastName && !shouldShowError('lastName')) e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>

                  {/* First Name Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="firstName"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '8px',
                      }}
                    >
                      名
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>必須</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: (errors.firstName || shouldShowError('firstName')) ? '2px solid #dc2626' : '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none',
                        backgroundColor: (errors.firstName || shouldShowError('firstName')) ? '#fef2f2' : 'white',
                      }}
                      onFocus={(e) => {
                        handleFieldFocus('firstName');
                        if (!errors.firstName && !shouldShowError('firstName')) e.currentTarget.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        setTouched(prev => ({ ...prev, firstName: true }));
                        if (!errors.firstName && !shouldShowError('firstName')) e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>

                  {/* Company Name Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="companyName"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '8px',
                      }}
                    >
                      会社名
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>必須</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="例：株式会社●●●"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: (errors.companyName || shouldShowError('companyName')) ? '2px solid #dc2626' : '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none',
                        backgroundColor: (errors.companyName || shouldShowError('companyName')) ? '#fef2f2' : 'white',
                      }}
                      onFocus={(e) => {
                        handleFieldFocus('companyName');
                        if (!errors.companyName && !shouldShowError('companyName')) e.currentTarget.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        setTouched(prev => ({ ...prev, companyName: true }));
                        if (!errors.companyName && !shouldShowError('companyName')) e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>

                  {/* Department Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="department"
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '8px',
                      }}
                    >
                      部署
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none',
                        backgroundColor: 'white',
                      }}
                      onFocus={(e) => {
                        handleFieldFocus('department');
                        e.currentTarget.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>

                  {/* Position Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="position"
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '8px',
                      }}
                    >
                      役職名
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none',
                        backgroundColor: 'white',
                      }}
                      onFocus={(e) => {
                        handleFieldFocus('position');
                        e.currentTarget.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>

                  {/* Phone Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="phone"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '8px',
                      }}
                    >
                      電話番号
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>必須</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="半角数字+半角ハイフンで入力してください"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: (errors.phone || shouldShowError('phone')) ? '2px solid #dc2626' : '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none',
                        backgroundColor: (errors.phone || shouldShowError('phone')) ? '#fef2f2' : 'white',
                      }}
                      onFocus={(e) => {
                        handleFieldFocus('phone');
                        if (!errors.phone && !shouldShowError('phone')) e.currentTarget.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        setTouched(prev => ({ ...prev, phone: true }));
                        if (!errors.phone && !shouldShowError('phone')) e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>

                  {/* Email Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '8px',
                      }}
                    >
                      勤務先メールアドレス
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>必須</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="例：example@example.jp"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: (errors.email || shouldShowError('email')) ? '2px solid #dc2626' : '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none',
                        backgroundColor: (errors.email || shouldShowError('email')) ? '#fef2f2' : 'white',
                      }}
                      onFocus={(e) => {
                        handleFieldFocus('email');
                        if (!errors.email && !shouldShowError('email')) e.currentTarget.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        setTouched(prev => ({ ...prev, email: true }));
                        if (!errors.email && !shouldShowError('email')) e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>

                  {/* Interest Areas Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '12px',
                      }}
                    >
                      【ご興味のある内容を教えてください】（複数選択可）
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        marginLeft: '8px',
                      }}>必須</span>
                    </label>
                    <div style={{
                      padding: '12px',
                      border: (errors.recruitmentAreas || shouldShowError('recruitmentAreas')) ? '2px solid #dc2626' : '1px solid transparent',
                      borderRadius: '4px',
                      backgroundColor: (errors.recruitmentAreas || shouldShowError('recruitmentAreas')) ? '#fef2f2' : 'transparent',
                    }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}>
                      {[
                        'AI面接練習データ活用の採用マッチング「FastPass」',
                        '大規模採用イベント「AIチャレンジャーズフェス」',
                        '少人数制採用イベント「FastPass meetup」',
                        '家庭教師サービス「ベストティーチ」',
                        'メディア取材・掲載',
                        'その他',
                      ].map((option) => (
                        <label
                          key={option}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '13px',
                            color: '#333',
                            cursor: 'pointer',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={formData.recruitmentAreas.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            onFocus={() => handleFieldFocus('recruitmentAreas')}
                            style={{
                              width: '16px',
                              height: '16px',
                              cursor: 'pointer',
                            }}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: '#333',
                        marginBottom: '8px',
                      }}
                    >
                      お問い合わせ内容
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>必須</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '15px',
                        border: (errors.message || shouldShowError('message')) ? '2px solid #dc2626' : '1px solid #d1d5db',
                        borderRadius: '4px',
                        outline: 'none',
                        backgroundColor: (errors.message || shouldShowError('message')) ? '#fef2f2' : 'white',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                      onFocus={(e) => {
                        handleFieldFocus('message');
                        if (!errors.message && !shouldShowError('message')) e.currentTarget.style.borderColor = '#3b82f6';
                      }}
                      onBlur={(e) => {
                        setTouched(prev => ({ ...prev, message: true }));
                        if (!errors.message && !shouldShowError('message')) e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>

                  {/* Privacy Policy */}
                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontSize: '14px', color: '#333', marginBottom: '4px' }}>
                      プライバシーポリシー
                    </p>
                    <a
                      href="/privacy"
                      style={{
                        fontSize: '14px',
                        color: '#1a73e8',
                        textDecoration: 'none',
                      }}
                    >
                      (プライバシーポリシーを見る)
                    </a>
                  </div>

                  {/* Privacy Agreement Checkbox */}
                  <div style={{
                    marginBottom: '24px',
                    padding: '12px',
                    border: (errors.privacyAgreed || shouldShowError('privacyAgreed')) ? '2px solid #dc2626' : '1px solid transparent',
                    borderRadius: '4px',
                    backgroundColor: (errors.privacyAgreed || shouldShowError('privacyAgreed')) ? '#fef2f2' : 'transparent',
                  }}>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        color: '#333',
                        cursor: 'pointer',
                      }}
                      onFocus={() => handleFieldFocus('privacyAgreed')}
                    >
                      <input
                        type="checkbox"
                        checked={formData.privacyAgreed}
                        onChange={(e) => {
                          handleFieldFocus('privacyAgreed');
                          setFormData(prev => ({ ...prev, privacyAgreed: e.target.checked }));
                          setTouched(prev => ({ ...prev, privacyAgreed: true }));
                          if (errors.privacyAgreed) {
                            setErrors(prev => ({ ...prev, privacyAgreed: '' }));
                          }
                        }}
                        onFocus={() => handleFieldFocus('privacyAgreed')}
                        style={{
                          width: '18px',
                          height: '18px',
                          cursor: 'pointer',
                        }}
                      />
                      上記に同意する
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>必須</span>
                    </label>
                  </div>

                  {/* reCAPTCHA */}
                  <div style={{ marginBottom: '24px' }}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LcTuFQsAAAAAGynPT8ZzeWTsWgPRn77o7SFrtXx"
                      onChange={handleRecaptchaChange}
                      onExpired={handleRecaptchaExpired}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormComplete()}
                    style={{
                      width: '100%',
                      padding: '16px 32px',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: 'white',
                      backgroundColor: isSubmitting ? '#9ca3af' : (isFormComplete() ? '#00A3E0' : '#9ca3af'),
                      border: 'none',
                      borderRadius: '4px',
                      cursor: (isSubmitting || !isFormComplete()) ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting && isFormComplete()) e.currentTarget.style.backgroundColor = '#1E5AA8';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting && isFormComplete()) e.currentTarget.style.backgroundColor = '#00A3E0';
                    }}
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Spinner animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />

      <Footer />
    </main>
  );
}
