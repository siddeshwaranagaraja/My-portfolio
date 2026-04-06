import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaRocket, FaAward } from 'react-icons/fa';

function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)',
      fontSize: '2.5rem',
      fontWeight: 800,
      background: 'var(--gradient-primary)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1,
    }}>
      {prefix}{value}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '2+', label: 'Years in Product', icon: <FaBriefcase /> },
    { value: '8+', label: 'Certifications', icon: <FaAward /> },
    { value: '20%', label: 'Sprint Velocity Boost', icon: <FaRocket /> },
    { value: '2', label: 'Degrees', icon: <FaGraduationCap /> },
  ];

  const highlights = [
    { title: 'Penn State University', subtitle: 'M.Eng. Management (Dec 2026)', color: '#6c5ce7' },
    { title: 'RV College of Engineering', subtitle: 'B.E. Mechanical Engineering', color: '#00cec9' },
    { title: 'Indigo Nation Pvt Ltd', subtitle: 'Associate Product Manager', color: '#fd79a8' },
    { title: 'Penn State Research', subtitle: 'Product Research Assistant', color: '#fdcb6e' },
  ];

  return (
    <section id="about" className="section" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="orb orb-3" style={{ opacity: 0.08 }} />
      <div className="grid-bg" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            Bridging <span className="glow-text">Technology</span> &{' '}
            <span className="glow-text">Strategy</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            I&apos;m a product-minded professional who thrives at the intersection of
            user empathy, data analytics, and cross-functional leadership. Currently
            pursuing my Masters at Penn State while bringing 2+ years of industry
            experience in driving product innovation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 24,
          marginBottom: 60,
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glow-border"
              style={{
                padding: 32,
                borderRadius: 'var(--border-radius)',
                background: 'var(--bg-card)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                textAlign: 'center',
                cursor: 'default',
                transition: 'all 0.4s ease',
              }}
            >
              <div style={{
                fontSize: '1.5rem',
                color: 'var(--accent-primary)',
                marginBottom: 16,
              }}>
                {stat.icon}
              </div>
              <AnimatedCounter value={stat.value} />
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                marginTop: 8,
                letterSpacing: '0.5px',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 20,
        }}>
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
              whileHover={{ x: 8 }}
              style={{
                padding: '24px 28px',
                borderRadius: 'var(--border-radius-sm)',
                background: 'var(--bg-card)',
                borderLeft: `3px solid ${item.color}`,
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 4 }}>
                {item.title}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {item.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
