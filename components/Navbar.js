import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: '90%',
          maxWidth: 900,
          padding: scrolled ? '12px 28px' : '16px 32px',
          background: scrolled ? 'rgba(5,5,5,0.85)' : 'rgba(5,5,5,0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)'}`,
          borderRadius: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.4s ease',
        }}
      >
        <Link href="#hero" onClick={(e) => handleClick(e, '#hero')} style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 700,
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px',
        }}>
          SK.
        </Link>

        <div style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
        }}
        className="nav-links-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: 30,
                color: activeSection === link.href.replace('#', '') ? '#fff' : 'var(--text-secondary)',
                background: activeSection === link.href.replace('#', '') ? 'rgba(108,92,231,0.2)' : 'transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                letterSpacing: '0.3px',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="nav-cta-desktop"
          style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            padding: '10px 24px',
            borderRadius: 30,
            background: 'var(--gradient-primary)',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Let&apos;s Talk
        </a>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
          }}
        >
          <span style={{
            width: 24, height: 2, background: '#fff', borderRadius: 2,
            transition: 'all 0.3s',
            transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            width: 24, height: 2, background: '#fff', borderRadius: 2,
            transition: 'all 0.3s',
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            width: 24, height: 2, background: '#fff', borderRadius: 2,
            transition: 'all 0.3s',
            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: 80,
              left: '5%',
              width: '90%',
              zIndex: 999,
              background: 'rgba(5,5,5,0.95)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  padding: '12px 16px',
                  borderRadius: 12,
                  fontSize: '1rem',
                  color: activeSection === link.href.replace('#', '') ? '#fff' : 'var(--text-secondary)',
                  background: activeSection === link.href.replace('#', '') ? 'rgba(108,92,231,0.15)' : 'transparent',
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
