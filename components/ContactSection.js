import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'siddeshwarakn@gmail.com',
      href: 'mailto:siddeshwarakn@gmail.com',
      color: '#6c5ce7',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 (484) 645-2200',
      href: 'tel:+14846452200',
      color: '#00cec9',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/siddeshwarakn',
      href: 'https://linkedin.com/in/siddeshwarakn',
      color: '#fd79a8',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Malvern, PA',
      href: null,
      color: '#fdcb6e',
    },
  ];

  return (
    <section id="contact" className="section" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="orb orb-1" style={{ opacity: 0.06 }} />
      <div className="orb orb-2" style={{ opacity: 0.04 }} />
      <div className="grid-bg" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 className="section-title" style={{ margin: '0 auto 24px' }}>
            Let&apos;s Build Something <span className="glow-text">Amazing</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            I&apos;m always open to discussing product management roles, consulting opportunities,
            or just having a great conversation about technology and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    padding: '20px 24px',
                    borderRadius: 'var(--border-radius)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--glass-border)',
                    cursor: info.href ? 'pointer' : 'default',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    background: `${info.color}12`,
                    border: `1px solid ${info.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: info.color,
                    flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}>
                      {info.label}
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                    }}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: 24,
                padding: 28,
                borderRadius: 'var(--border-radius)',
                background: 'linear-gradient(135deg, rgba(108,92,231,0.08), rgba(0,206,201,0.05))',
                border: '1px solid rgba(108,92,231,0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#00cec9',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Available for Opportunities</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Currently pursuing M.Eng. at Penn State. Open to product management,
                consulting, and research roles.
              </p>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}
