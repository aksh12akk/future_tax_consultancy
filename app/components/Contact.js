'use client';

import { useState } from 'react';

const contactMethods = [
  { id: 'phone',    icon: '📞', title: 'Phone & WhatsApp', detail: '+91-98733-41541',          sub: 'Available Mon–Sat, 9 AM to 7 PM' },
  { id: 'email',    icon: '✉️', title: 'Email',            detail: 'caravisharma96@gmail.com',  sub: 'We reply within 24 hours' },
  { id: 'location', icon: '📍', title: 'Location',         detail: 'India — Pan-India Service', sub: 'Remote & in-person support available' },
];

const fields = [
  { name: 'name',    label: 'Full Name',       type: 'text',  placeholder: 'Enter your full name' },
  { name: 'phone',  label: 'Phone / WhatsApp', type: 'tel',   placeholder: '+91 XXXXX XXXXX' },
  { name: 'email',  label: 'Email Address',    type: 'email', placeholder: 'you@example.com' },
  { name: 'service',label: 'Service Required', type: 'text',  placeholder: 'GST Filing / ITR / Registration / Other' },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim())   e.phone   = 'Phone number is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.service.trim()) e.service = 'Please specify the service needed';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputStyle = (name) => ({
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.05)',
    border: `1px solid ${errors[name] ? '#ef4444' : focused === name ? '#525CEB' : 'rgba(255,255,255,0.15)'}`,
    borderRadius: 8,
    color: '#fff',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
    boxShadow: focused === name ? '0 0 0 3px rgba(82,92,235,0.2)' : 'none',
  });

  return (
    <section id="consultation" style={{ background: '#1C1C1C', padding: '80px 0', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Section Header */}
        <div style={{ marginBottom: 56, maxWidth: 640 }}>
          <span style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(82,92,235,0.15)', color: '#525CEB', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, borderRadius: 4, marginBottom: 16, border: '1px solid rgba(82,92,235,0.3)' }}>
            Free Consultation
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
            Let&apos;s Start With a{' '}
            <span style={{ color: '#FDE047' }}>Free Consultation</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'start' }}>

          {/* ── LEFT — Contact Info ── */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 12, marginTop: 0 }}>Get In Touch</h3>
            <p style={{ color: '#9CA3AF', marginBottom: 36, lineHeight: 1.8, fontSize: '0.95rem' }}>
              Ready to simplify your taxes and compliance? Fill in your details and Ravi will
              personally get back to you within 24 hours. Or reach us directly via WhatsApp.
            </p>

            {/* Contact Method Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {contactMethods.map(m => (
                <div key={m.id}
                  style={{ display: 'flex', gap: 16, alignItems: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '16px 20px', transition: 'border-color 0.25s, background 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(82,92,235,0.4)'; e.currentTarget.style.background = 'rgba(82,92,235,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(82,92,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    {m.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', margin: '0 0 2px', color: '#fff' }}>{m.title}</p>
                    <p style={{ fontSize: '0.9rem', color: '#D1D5DB', margin: 0 }}>{m.detail}</p>
                    <p style={{ fontSize: '0.78rem', color: '#6B7280', margin: 0 }}>{m.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a id="whatsapp-btn" href="https://wa.me/919873341541" target="_blank" rel="noopener noreferrer"
                style={{ padding: '13px 24px', background: '#525CEB', color: '#fff', fontWeight: 600, borderRadius: 8, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.95rem', border: '1px solid #525CEB', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4338CA'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(79,70,229,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#525CEB'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                💬 Chat on WhatsApp
              </a>
              <a id="book-consultation-btn" href="#consultation"
                style={{ padding: '13px 24px', background: 'transparent', color: '#D1D5DB', fontWeight: 600, borderRadius: 8, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#525CEB'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#D1D5DB'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                📅 Book Free Consultation
              </a>
            </div>
          </div>

          {/* ── RIGHT — Dark Styled Form ── */}
          <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '40px', boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}>

            {/* Form Header with yellow accent */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 4, height: 32, background: '#FDE047', borderRadius: 4 }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, color: '#fff' }}>Request a Callback</h3>
            </div>

            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, textAlign: 'center', gap: 20 }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#16a34a,#22c55e)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(22,163,74,0.4)' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>Request Submitted!</h4>
                  <p style={{ color: '#9CA3AF', fontSize: '0.95rem', margin: 0 }}>Ravi will personally reach out within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* 2-column grid for first two fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {fields.slice(0, 2).map(field => (
                    <div key={field.name}>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.82rem', color: '#9CA3AF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {field.label} <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        id={`form-${field.name}`} name={field.name} type={field.type}
                        placeholder={field.placeholder} value={form[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused('')}
                        style={inputStyle(field.name)}
                      />
                      {errors[field.name] && (
                        <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: 4 }}>{errors[field.name]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Remaining single-column fields */}
                {fields.slice(2).map(field => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.82rem', color: '#9CA3AF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {field.label} <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id={`form-${field.name}`} name={field.name} type={field.type}
                      placeholder={field.placeholder} value={form[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused('')}
                      style={inputStyle(field.name)}
                    />
                    {errors[field.name] && (
                      <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: 4 }}>{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, fontSize: '0.82rem', color: '#9CA3AF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Message <span style={{ color: '#6B7280' }}>(Optional)</span>
                  </label>
                  <textarea
                    id="form-message" name="message" rows={3}
                    placeholder="Brief description of your requirement..."
                    value={form.message} onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    style={{ ...inputStyle('message'), resize: 'none' }}
                  />
                </div>

                {/* Submit */}
                <button id="form-submit-btn" type="submit"
                  style={{ width: '100%', padding: '14px', marginTop: 4, background: 'linear-gradient(135deg, #525CEB, #4F46E5)', color: '#fff', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: 8, cursor: 'pointer', transition: 'all 0.25s ease', letterSpacing: '0.02em' }}
                  onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 10px 28px rgba(79,70,229,0.45)'; e.target.style.background = 'linear-gradient(135deg,#4338CA,#4F46E5)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; e.target.style.background = 'linear-gradient(135deg,#525CEB,#4F46E5)'; }}
                >
                  Submit Request →
                </button>

                <p style={{ textAlign: 'center', color: '#4B5563', fontSize: '0.78rem', margin: 0 }}>
                  🔒 Your information is secure and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
