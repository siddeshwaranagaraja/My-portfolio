import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      position: 'relative',
      padding: '60px 0 30px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'var(--bg-secondary)',
    }}>
      <div className="container" style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 40,
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              SK.
            </span>
            <p style={{ color: 'var(--text-muted)', marginTop: 8, fontSize: '0.9rem' }}>
              Crafting digital experiences with data-driven precision.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { icon: <FaLinkedin />, href: 'https://linkedin.com/in/siddeshwarakn', label: 'LinkedIn' },
              { icon: <FaEnvelope />, href: 'mailto:siddeshwarakn@gmail.com', label: 'Email' },
              { icon: <FaPhone />, href: 'tel:+14846452200', label: 'Phone' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.04)',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Siddeshwara Kallahalli. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '0.9rem',
            }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
