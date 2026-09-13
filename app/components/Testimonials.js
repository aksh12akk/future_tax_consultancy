'use client';

import { RevealSection } from '../hooks/useScrollReveal';
import { CountUpNumber } from '../hooks/useCountUp';

const testimonials = [
  { id: 'aditya', quote: '"Ravi helped us register our Pvt Ltd company and set up GST within days. Super professional and always reachable. Highly recommended for any startup!"', author: '— Aditya Mehta', title: 'Co-Founder, TechLaunch Pvt Ltd' },
  { id: 'priya',  quote: '"Filing our ITR and handling a GST notice seemed overwhelming — Future Tax Consultancy made it completely stress-free. Transparent pricing too!"',    author: '— Priya Nair',   title: 'Freelance Designer & Proprietor' },
  { id: 'suresh', quote: '"We outsourced our monthly bookkeeping to Ravi\'s team. The MIS reports are precise and always delivered on time. Our CA loves the clean books!"',   author: '— Suresh Patel', title: 'Director, Patel Trading LLP' },
];

const stats = [
  { number: '9+',   label: 'Years Experience', desc: 'Deep expertise across tax, compliance & accounting.' },
  { number: '500+', label: 'Clients Served',   desc: 'Startups, SMEs, freelancers & companies.' },
  { number: '100%', label: 'On-Time Filing',   desc: 'Zero penalties for timely compliance clients.' },
  { number: '₹1K',  label: 'Starting Price',   desc: 'Affordable plans for every business size.' },
];

export default function Testimonials() {
  return (
    <section style={{ background: '#FFFDF7', padding: '80px 0', color: '#111827' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <RevealSection>
          <span style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(200, 158, 71, 0.15)', color: '#C89E47', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1, borderRadius: 4, marginBottom: 16, border: '1px solid rgba(0,0,0,0.1)' }}>
            Client Stories
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, marginBottom: 48, lineHeight: 1.2 }}>
            Trusted by Startups &amp; SMEs Across India
          </h2>
        </RevealSection>

        {/* Testimonials */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 64 }}>
          {testimonials.map((t, i) => (
            <RevealSection key={t.id} delay={i * 100}>
              <div id={`testimonial-${t.id}`}
                style={{ padding: 32, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, position: 'relative', marginTop: 30, transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200, 158, 71,0.45)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ position: 'absolute', top: -30, left: 20, fontSize: 60, color: '#C89E47', lineHeight: 1, background: '#FFFDF7', padding: '0 10px' }}>&ldquo;</span>
                <p style={{ fontSize: '1.05rem', marginBottom: 24, color: '#111827', lineHeight: 1.7 }}>{t.quote}</p>
                <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{t.author}</p>
                <p style={{ color: '#4B5563', fontSize: '0.9rem', margin: 0 }}>{t.title}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
          {stats.map((s, i) => (
            <RevealSection key={s.label} delay={i * 80}>
              <div>
                <div style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1, marginBottom: 8, color: '#111827' }}>
                  <CountUpNumber value={s.number} duration={2000} />
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 8, marginTop: 0 }}>{s.label}</h4>
                <p style={{ color: '#4B5563', fontSize: '0.95rem', margin: 0 }}>{s.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
