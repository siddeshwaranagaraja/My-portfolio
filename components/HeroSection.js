import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';
import { FaLinkedin, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function HeroSection() {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* 3D Background */}
      <Scene3D />

      {/* Grid overlay */}
      <div className="grid-bg" />

      {/* Gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ maxWidth: 700 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              borderRadius: 50,
              background: 'rgba(108,92,231,0.1)',
              border: '1px solid rgba(108,92,231,0.2)',
              marginBottom: 32,
              fontSize: '0.85rem',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#00cec9',
              animation: 'pulse 2s infinite',
            }} />
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: 16,
            }}
          >
            Hi, I&apos;m{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Siddeshwara
            </span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              marginBottom: 28,
              minHeight: '2.5rem',
            }}
          >
            <TypeAnimation
              sequence={[
                'Product Manager',
                2000,
                'Data-Driven Strategist',
                2000,
                'Agile Leader',
                2000,
                'UX Advocate',
                2000,
                'Engineering Manager',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
            <span style={{
              display: 'inline-block',
              width: 3,
              height: '1.5em',
              background: 'var(--accent-primary)',
              marginLeft: 4,
              verticalAlign: 'text-bottom',
              animation: 'pulse 1s infinite',
            }} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: 40,
              maxWidth: 550,
            }}
          >
            Turning complex problems into elegant product solutions.
            Masters in Engineering Management at Penn State,
            with a passion for building user-centric digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108,92,231,0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 36px',
                borderRadius: 50,
                background: 'var(--gradient-primary)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                border: 'none',
                textDecoration: 'none',
              }}
            >
              Get in Touch
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/siddeshwarakn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 36px',
                borderRadius: 50,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
              }}
            >
              <FaLinkedin />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: 40,
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '12%', label: 'Conversion Boost' },
              { value: '40%', label: 'Faster Onboarding' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.5px',
                  marginTop: 4,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          zIndex: 2,
        }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: 2, textTransform: 'uppercase' }}>
          Scroll
        </span>
        <FaChevronDown style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }} />
      </motion.div>
    </section>
  );
}
