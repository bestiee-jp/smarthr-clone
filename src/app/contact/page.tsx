'use client';

import { useState, useRef, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
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

  // Check if any field has input
  const hasAnyInput = () => {
    return formData.lastName !== '' ||
           formData.firstName !== '' ||
           formData.companyName !== '' ||
           formData.department !== '' ||
           formData.position !== '' ||
           formData.phone !== '' ||
           formData.email !== '' ||
           formData.recruitmentAreas.length > 0 ||
           formData.message !== '';
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
    if (!formData.lastName) newErrors.lastName = t('contactForm.validation.lastNameRequired');
    if (!formData.firstName) newErrors.firstName = t('contactForm.validation.firstNameRequired');
    if (!formData.companyName) newErrors.companyName = t('contactForm.validation.companyNameRequired');
    if (!formData.phone) newErrors.phone = t('contactForm.validation.phoneRequired');
    if (!formData.email) newErrors.email = t('contactForm.validation.emailRequired');
    if (formData.recruitmentAreas.length === 0) newErrors.recruitmentAreas = t('contactForm.validation.areasRequired');
    if (!formData.message) newErrors.message = t('contactForm.validation.messageRequired');
    if (!formData.privacyAgreed) newErrors.privacyAgreed = t('contactForm.validation.privacyRequired');
    if (!recaptchaToken) newErrors.recaptcha = t('contactForm.validation.recaptchaRequired');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit form data to server-side API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
          recaptchaToken: recaptchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      sessionStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      setErrors({ submit: t('contactForm.validation.submitFailed') });
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }

    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <PageHero
        title={t('pages.contact.title')}
        subtitle={t('pages.contact.subtitle')}
        breadcrumb={[
          { label: t('breadcrumb.top'), href: '/' },
          { label: t('pages.contact.title') },
        ]}
      />

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
              border: '1px solid var(--bestiee-blue)',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)',
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
                {t('contactForm.form.successTitle')}
              </h2>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
                {t('contactForm.form.successMessage1')}<br />
                {t('contactForm.form.successMessage2')}
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
                {t('contactForm.form.backToTop')}
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
                    {t('contactForm.intro1')}<br />
                    {t('contactForm.intro2')}
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
                    {t('contactForm.pastSupport.title1')}<br />
                    <span style={{ color: '#4d7cff' }}>{t('contactForm.pastSupport.title2')}</span>{t('contactForm.pastSupport.title3')}
                  </h3>

                  {/* Two Column Layout */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '32px',
                  }}>
                    {/* Left Column - Enterprise */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>🏢</span>
                        <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{t('contactForm.pastSupport.enterprise')}</h4>
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
                            <span style={{ color: 'var(--bestiee-blue)', fontSize: '16px' }}>▶</span>
                            {company}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - Startups */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>🚀</span>
                        <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{t('contactForm.pastSupport.startup')}</h4>
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
                            <span style={{ color: 'var(--bestiee-blue)', fontSize: '16px' }}>▶</span>
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
                    <div style={{ width: '4px', height: '24px', background: 'linear-gradient(135deg, var(--bestiee-blue) 0%, var(--bestiee-blue-light) 100%)' }}></div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{t('contactForm.media.title')}</h3>
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
                    <img
                      src="/media/Forbes.png"
                      alt="Forbes JAPAN 2026年総予測"
                      style={{
                        width: '100%',
                        borderRadius: '8px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>

                  {/* Media List */}
                  <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}>
                    {[
                      t('contactForm.mediaItems.forbes'),
                      t('contactForm.mediaItems.toudaiou'),
                      t('contactForm.mediaItems.dmm'),
                      t('contactForm.mediaItems.press'),
                    ].map((item, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ color: 'var(--bestiee-cyan)', fontSize: '20px', lineHeight: 1 }}>•</span>
                        <span style={{ fontSize: '16px', color: '#333', lineHeight: '1.6' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div style={{ flex: '0 0 auto', width: '480px', minWidth: '380px', maxWidth: '480px', backgroundColor: '#f7fefe', padding: '28px', borderRadius: '8px', alignSelf: 'flex-start', position: 'sticky', top: '100px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#333',
                  }}>
                    {t('contactForm.form.title')}
                  </h2>
                  <button
                    type="button"
                    disabled={!hasAnyInput()}
                    onClick={() => {
                      setFormData({
                        lastName: '',
                        firstName: '',
                        companyName: '',
                        department: '',
                        position: '',
                        phone: '',
                        email: '',
                        recruitmentAreas: [],
                        message: '',
                        privacyAgreed: false,
                      });
                      setTouched({});
                      setErrors({});
                      sessionStorage.removeItem(STORAGE_KEY);
                      recaptchaRef.current?.reset();
                      setRecaptchaToken(null);
                    }}
                    style={{
                      padding: '5px 11px',
                      fontSize: '12px',
                      color: hasAnyInput() ? '#000' : '#aaa',
                      backgroundColor: hasAnyInput() ? '#e5e7eb' : '#f5f5f5',
                      border: hasAnyInput() ? '1px solid #333' : '1px solid transparent',
                      borderRadius: '4px',
                      cursor: hasAnyInput() ? 'pointer' : 'default',
                      opacity: hasAnyInput() ? 1 : 0.6,
                    }}
                  >
                    {t('contactForm.form.clear')}
                  </button>
                </div>

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
                      {t('contactForm.form.lastName')}
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>{t('contactForm.form.required')}</span>
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
                      {t('contactForm.form.firstName')}
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>{t('contactForm.form.required')}</span>
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
                      {t('contactForm.form.companyName')}
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>{t('contactForm.form.required')}</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder={t('contactForm.form.companyNamePlaceholder')}
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
                      {t('contactForm.form.department')}
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
                      {t('contactForm.form.position')}
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
                      {t('contactForm.form.phone')}
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>{t('contactForm.form.required')}</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contactForm.form.phonePlaceholder')}
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
                      {t('contactForm.form.email')}
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>{t('contactForm.form.required')}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contactForm.form.emailPlaceholder')}
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
                      {t('contactForm.form.interestAreas')}
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        marginLeft: '8px',
                      }}>{t('contactForm.form.required')}</span>
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
                        t('contactForm.interestOptions.fastpass'),
                        t('contactForm.interestOptions.aiFest'),
                        t('contactForm.interestOptions.meetup'),
                        t('contactForm.interestOptions.bestTeach'),
                        t('contactForm.interestOptions.media'),
                        t('contactForm.interestOptions.other'),
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
                      {t('contactForm.form.message')}
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>{t('contactForm.form.required')}</span>
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
                      {t('contactForm.form.privacyPolicy')}
                    </p>
                    <a
                      href="/privacy"
                      style={{
                        fontSize: '14px',
                        color: '#1a73e8',
                        textDecoration: 'none',
                      }}
                    >
                      {t('contactForm.form.viewPrivacyPolicy')}
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
                      {t('contactForm.form.agreeToPolicy')}
                      <span style={{
                        backgroundColor: '#dc2626',
                        color: 'white',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}>{t('contactForm.form.required')}</span>
                    </label>
                  </div>

                  {/* reCAPTCHA */}
                  <div style={{ marginBottom: '24px' }}>
                    <ReCAPTCHA
                      key={lang}
                      ref={recaptchaRef}
                      sitekey="6LcTuFQsAAAAAGynPT8ZzeWTsWgPRn77o7SFrtXx"
                      onChange={handleRecaptchaChange}
                      onExpired={handleRecaptchaExpired}
                      hl={lang === 'zh' ? 'zh-CN' : lang}
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
                      backgroundColor: isSubmitting ? '#9ca3af' : (isFormComplete() ? 'var(--bestiee-blue-light)' : '#9ca3af'),
                      border: 'none',
                      borderRadius: '4px',
                      cursor: (isSubmitting || !isFormComplete()) ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting && isFormComplete()) e.currentTarget.style.backgroundColor = 'var(--bestiee-blue)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting && isFormComplete()) e.currentTarget.style.backgroundColor = 'var(--bestiee-blue-light)';
                    }}
                  >
                    {isSubmitting ? t('contactForm.form.submitting') : t('contactForm.form.submit')}
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
