'use client';

import { RevealSection } from '../hooks/useScrollReveal';

const mainPackages = [
  { id: 'proprietorship', title: 'Proprietorship',  price: '₹3,000',  desc: 'Quick & simple business registration with full compliance setup.' },
  { id: 'partnership',   title: 'Partnership Firm', price: '₹6,000',  desc: 'Partnership deed drafting and registration handled end-to-end.' },
  { id: 'llp',           title: 'LLP Registration', price: '₹14,000', desc: 'LLP incorporation with MCA filings and documentation support.' },
  { id: 'pvtltd',        title: 'Pvt Ltd Company',  price: '₹15,000', desc: 'Full Pvt Ltd registration including DSC, DIN & MoA/AoA drafting.' },
];

const addOnPackages = [
  { id: 'gst-itr',    title: 'GST / ITR Filing',    price: '₹1,000', suffix: 'onwards',        desc: 'Timely filing to keep your business penalty-free and compliant.' },
  { id: 'bookkeeping',title: 'Monthly Bookkeeping',  price: '₹3,000', suffix: '/month onwards',  desc: 'Accurate books maintained monthly — always audit-ready.' },
  { id: 'free',       title: 'Free Consultation',    price: '₹0',     suffix: '', isFree: true,  desc: 'Not sure where to start? Book a free 30-minute advisory session with Ravi.' },
];

const badge = { display: 'inline-block', padding: '6px 12px', background: 'rgba(200, 158, 71, 0.15)', color: '#C89E47', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1, borderRadius: 4, marginBottom: 16, border: '1px solid rgba(0,0,0,0.1)' };

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#FFFDF7', padding: '80px 0', color: '#111827' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <RevealSection>
          <span style={badge}>Transparent Pricing</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
            Simple, Affordable Packages &mdash; No Hidden Charges
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4B5563', maxWidth: 800, marginBottom: 48, lineHeight: 1.7 }}>
            Straightforward pricing designed for startups, proprietors, and growing businesses across India.
          </p>
        </RevealSection>

        {/* Main 4 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 24 }}>
          {mainPackages.map((pkg, i) => (
            <RevealSection key={pkg.id} delay={i * 70}>
              <div id={`price-${pkg.id}`}
                style={{ background: '#E4E5FC', color: '#111827', borderRadius: 12, padding: 32, transition: 'transform 0.3s ease, box-shadow 0.3s ease', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 35px rgba(0,0,0,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 24, marginTop: 0 }}>{pkg.title}</h3>

                <p style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.6 }}>{pkg.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Add-on 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {addOnPackages.map((pkg, i) => (
            <RevealSection key={pkg.id} delay={i * 70}>
              <div id={`price-${pkg.id}`}
                style={{ background: 'transparent', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 12, padding: 32, transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 35px rgba(0,0,0,0.25)'; e.currentTarget.style.borderColor = 'rgba(200, 158, 71,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'; }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12, marginTop: 0 }}>{pkg.title}</h3>

                <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.6 }}>{pkg.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
