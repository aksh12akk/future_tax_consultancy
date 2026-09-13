'use client';

import { RevealSection } from '../hooks/useScrollReveal';

const features = [
  {
    id: 'save-time',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
    title: 'Save Time & Avoid Penalties',
    desc: 'Never miss a deadline again. We track all due dates for GST, ITR, TDS, and ROC filings on your behalf.',
  },
  {
    id: 'expert',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    title: '9+ Years of Expert Handling',
    desc: "Ravi's deep expertise across GST, income tax, and corporate compliance means your business is always in safe hands.",
  },
  {
    id: 'transparent',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Transparent & Affordable',
    desc: 'No surprise charges. Our pricing is clear upfront — premium expertise at a cost every SME and startup can afford.',
  },
  {
    id: 'dedicated',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Dedicated to Your Growth',
    desc: "From first registration to scaling your business, we're a long-term compliance partner — not just a one-time filer.",
  },
];

export default function WhyUs() {
  return (
    <section style={{ background: '#1C1C1C', padding: '80px 0', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <RevealSection>
          <span style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(26,26,46,0.7)', color: '#fff', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1, borderRadius: 4, marginBottom: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
            Why Choose Us
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, marginBottom: 0, lineHeight: 1.2 }}>
            Focus on Business. We Handle Compliance.
          </h2>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, marginTop: 48 }}>
          {features.map((feat, i) => (
            <RevealSection key={feat.id} delay={i * 80}>
              <div id={`feature-${feat.id}`}
                style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: 24, borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)', transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(82,92,235,0.35)'; e.currentTarget.style.background = 'rgba(82,92,235,0.05)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ flexShrink: 0, width: 56, height: 56, background: 'rgba(79,70,229,0.12)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s' }}>
                  {feat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10, marginTop: 0 }}>{feat.title}</h3>
                  <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{feat.desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
