'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about',    label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#pricing',  label: 'Pricing' },
  ];

  return (
    <header
      style={{
        position: 'sticky', top: 0, left: 0, width: '100%', zIndex: 50,
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: 'rgba(255,255,255,0.98)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Future Tax Consultancy" style={{ height: '48px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }} />
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          <nav style={{ display: 'flex', gap: 28 }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                style={{ fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none', color: '#1c1c1c', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#C89E47'}
                onMouseLeave={e => e.target.style.color = '#1c1c1c'}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#consultation"
            style={{ padding: '10px 22px', background: '#C89E47', color: '#111827', fontWeight: 600, fontSize: '0.9rem', borderRadius: 8, textDecoration: 'none', border: '1px solid #C89E47', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.target.style.background = '#B38A36'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = '#C89E47'; e.target.style.transform = 'translateY(0)'; }}
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger */}
        <button id="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
          className="show-mobile"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: '#1c1c1c',
              transition: 'all 0.3s',
              transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)') : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div style={{
        background: 'rgba(255,255,255,0.98)',
        overflow: 'hidden',
        maxHeight: menuOpen ? 300 : 0,
        transition: 'max-height 0.3s ease',
        boxShadow: menuOpen ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
      }}>
        <div style={{ padding: '8px 24px 24px' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', color: '#1c1c1c', fontWeight: 500, padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.05)' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#consultation" onClick={() => setMenuOpen(false)}
            style={{ display: 'block', marginTop: 16, padding: '12px', background: '#C89E47', color: '#111827', textAlign: 'center', fontWeight: 600, borderRadius: 8, textDecoration: 'none' }}
          >
            Contact Us
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
