'use client';

import Image from 'next/image';
import { RevealSection } from '../hooks/useScrollReveal';

const services = [
  { id: 'registration', image: '/assets/registration.png', title: 'Business Registration',
    items: ['Private Limited Company', 'LLP Registration', 'Partnership Firm', 'Proprietorship'] },
  { id: 'tax', image: '/assets/tax.png', title: 'Tax & Compliance',
    items: ['GST Registration & Return Filing', 'Income Tax Return Filing', 'TDS & TCS Filing', 'GST Notices (Sec 73/74)'] },
  { id: 'accounting', image: '/assets/accounting.png', title: 'Accounting & Bookkeeping',
    items: ['Monthly Bookkeeping', 'Financial Statement Prep', 'P&L & Balance Sheet', 'MIS Reporting'] },
  { id: 'other', image: '/assets/other.png', title: 'Other Services',
    items: ['ESIC & PF Registration', 'Tax Planning & Advisory', 'Audit Support', 'Lower Tax Deduction (Form 13)'] },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#1C1C1C', padding: '80px 0', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <RevealSection>
          <span style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(26,26,46,0.7)', color: '#fff', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1, borderRadius: 4, marginBottom: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
            Our Services
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
            Everything Your Business Needs &mdash; Under One Roof
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#D1D5DB', maxWidth: 800, marginBottom: 48, lineHeight: 1.7 }}>
            From registering your business to filing returns and maintaining books, Future Tax Consultancy covers the full compliance lifecycle.
          </p>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {services.map((svc, i) => (
            <RevealSection key={svc.id} delay={i * 80}>
              <div id={`service-${svc.id}`}
                style={{ background: '#2D2D2D', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'rgba(82,92,235,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
              >
                <div style={{ position: 'relative', width: '100%', height: 160 }}>
                  <Image src={svc.image} alt={svc.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16, marginTop: 0 }}>{svc.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {svc.items.map(item => (
                      <li key={item} style={{ position: 'relative', paddingLeft: 16, fontSize: '0.95rem', color: '#D1D5DB' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#fff', fontWeight: 'bold' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
