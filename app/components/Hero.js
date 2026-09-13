'use client';

import { CountUpNumber } from '../hooks/useCountUp';

const trustStats = [
  { value: '9+',   label: 'Years\nExperience' },
  { value: '500+', label: 'Happy\nClients' },
  { value: '100%', label: 'On-Time\nFiling' },
];

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: -2,
        backgroundImage: "url('/assets/hero_bg.png')",
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
      }} />
      {/* White gradient overlay — exactly like original */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: -1,
        background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div style={{ maxWidth: 700 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#111827', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 24 }}>
            Hassle-Free Accounting &amp; Tax Solutions
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#374151', marginBottom: 32, lineHeight: 1.7 }}>
            Your trusted partner for GST, Income Tax, Bookkeeping &amp; Business Registration &mdash; so you can focus on growing your business while we handle the compliance.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
            <a id="hero-cta-consultation" href="#consultation"
              style={{ padding: '14px 28px', background: '#C89E47', color: '#111827', fontWeight: 600, borderRadius: 8, textDecoration: 'none', border: '1px solid #C89E47', transition: 'all 0.25s ease', display: 'inline-block' }}
              onMouseEnter={e => { e.target.style.background = '#B38A36'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 10px 24px rgba(179, 138, 54,0.35)'; }}
              onMouseLeave={e => { e.target.style.background = '#C89E47'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
            >
              Get Free Consultation
            </a>
            <a id="hero-cta-services" href="#services"
              style={{ padding: '14px 28px', background: '#fff', color: '#C89E47', fontWeight: 600, borderRadius: 8, textDecoration: 'none', border: '1px solid #E2E8F0', transition: 'all 0.25s ease', display: 'inline-block' }}
              onMouseEnter={e => { e.target.style.borderColor = '#C89E47'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
            >
              Explore Services
            </a>
          </div>

          {/* Trust Stats with CountUp */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0 }}>
            {trustStats.map((stat, i) => (
              <div key={stat.value} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                {/* Stat item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 24px 0 (i === 0 ? 0 : 24)' }}>
                  <CountUpNumber
                    value={stat.value}
                    duration={1800}
                    style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C89E47', lineHeight: 1 }}
                  />
                  <span style={{
                    fontSize: '0.8rem', fontWeight: 500, color: '#6B7280', lineHeight: 1.3,
                    whiteSpace: 'pre-line', paddingLeft: 4,
                  }}>
                    {stat.label}
                  </span>
                </div>
                {/* Divider between items (not after last) */}
                {i < trustStats.length - 1 && (
                  <div style={{ width: 1, height: 36, background: '#CBD5E1' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
