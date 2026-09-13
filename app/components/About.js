'use client';

import { RevealSection } from '../hooks/useScrollReveal';
import { CountUpNumber } from '../hooks/useCountUp';

export default function About() {
  return (
    <section id="about" style={{ background: '#222222', padding: '80px 0', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <RevealSection>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, marginBottom: 48, lineHeight: 1.2 }}>
            Meet Ravi Sharma &mdash; Your Financial Confidence Partner
          </h2>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
          {/* Left — Profile Card */}
          <RevealSection delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ background: '#2D2D2D', borderRadius: 12, padding: 32, textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'rgba(82,92,235,0.15)', border: '4px solid #FDE047', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#525CEB" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4 }}>Ravi Sharma</h3>
                <p style={{ color: '#D1D5DB', fontSize: '0.9rem' }}>Founder &amp; Lead Consultant</p>
                <p style={{ color: '#D1D5DB', fontSize: '0.9rem' }}>Future Tax Consultancy</p>
                <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  {[['9+', 'Years Exp.'], ['500+', 'Clients'], ['100%', 'On-Time']].map(([n, l]) => (
                    <div key={l}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#525CEB' }}>
                        <CountUpNumber value={n} duration={1800} />
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#D1D5DB', marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#2D2D2D', borderRadius: 8, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#D1D5DB', margin: 0 }}>Phone &amp; WhatsApp</p>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>+91-98733-41541</p>
                  </div>
                </div>
                <a href="https://wa.me/919873341541" target="_blank" rel="noopener noreferrer"
                  style={{ padding: '8px 16px', background: '#16a34a', color: '#fff', borderRadius: 6, textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.target.style.background = '#15803d'; e.target.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.target.style.background = '#16a34a'; e.target.style.transform = 'translateY(0)'; }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </RevealSection>

          {/* Right — Bio */}
          <RevealSection delay={200}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>9+ Years of Trusted Expertise</h3>
            <p style={{ color: '#D1D5DB', fontSize: '1.05rem', marginBottom: 32, lineHeight: 1.7 }}>
              Ravi Sharma brings over nine years of hands-on experience in accounting, taxation, and financial services.
              He has helped hundreds of startups, SMEs, freelancers, and private companies navigate India&apos;s complex
              compliance landscape with confidence and clarity.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {['GST, ITR, TDS & ROC filing expert', 'Pvt Ltd, LLP & Proprietorship registration', 'Monthly bookkeeping & MIS reporting', 'ESIC & PF registration specialist'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(82,92,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#525CEB" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span style={{ color: '#D1D5DB', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {[
                { title: 'Our Mission', text: 'Make compliance simple, affordable, and stress-free for every business.' },
                { title: 'Our Vision',  text: "Be India's most trusted tax and accounting partner for growing businesses." },
              ].map(({ title, text }) => (
                <div key={title} style={{ background: '#2D2D2D', borderLeft: '4px solid #4F46E5', borderRadius: 8, padding: 24, transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 8, marginTop: 0 }}>{title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#D1D5DB', lineHeight: 1.6, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
