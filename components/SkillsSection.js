import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaChartLine, FaProjectDiagram, FaCode, FaUsers,
  FaBrain, FaDatabase, FaCogs, FaClipboardCheck,
} from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Product Management',
    icon: <FaChartLine />,
    color: '#6c5ce7',
    skills: [
      { name: 'Product Roadmaps', level: 95 },
      { name: 'Product Lifecycle', level: 90 },
      { name: 'User Interface (UI)', level: 85 },
      { name: 'Competitive Analysis', level: 92 },
      { name: 'Persona Development', level: 88 },
      { name: 'GTM Strategy', level: 90 },
      { name: 'MVP Strategy', level: 93 },
      { name: 'A/B Testing', level: 87 },
    ],
  },
  {
    title: 'Project Management',
    icon: <FaProjectDiagram />,
    color: '#00cec9',
    skills: [
      { name: 'Agile & Scrum', level: 95 },
      { name: 'Six Sigma (Green Belt)', level: 85 },
      { name: 'Waterfall', level: 80 },
      { name: 'Sprint Planning', level: 92 },
      { name: 'OKR Setting', level: 88 },
      { name: 'Stakeholder Mgmt', level: 90 },
    ],
  },
  {
    title: 'Technical & Data',
    icon: <FaCode />,
    color: '#fd79a8',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 85 },
      { name: 'Jira', level: 95 },
      { name: 'AI/ML Concepts', level: 78 },
      { name: 'APIs', level: 82 },
    ],
  },
  {
    title: 'Leadership',
    icon: <FaUsers />,
    color: '#fdcb6e',
    skills: [
      { name: 'Cross-functional Leadership', level: 92 },
      { name: 'Stakeholder Communication', level: 95 },
      { name: 'Strategic Planning', level: 88 },
      { name: 'Problem Solving', level: 93 },
      { name: 'User Empathy', level: 90 },
    ],
  },
];

function SkillBar({ name, level, color, delay, inView }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6,
        fontSize: '0.8rem',
      }}>
        <span style={{ color: 'var(--text-secondary)' }}>{name}</span>
        <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: 4,
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            borderRadius: 2,
            boxShadow: `0 0 10px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="skills" className="section" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="orb orb-2" style={{ opacity: 0.08 }} />
      <div className="grid-bg" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Skills</div>
          <h2 className="section-title">
            My <span className="glow-text">Toolkit</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            A diverse set of skills spanning product strategy, technical execution, and team leadership.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="glow-border"
              style={{
                padding: 32,
                borderRadius: 'var(--border-radius)',
                background: hoveredCard === i
                  ? `linear-gradient(135deg, ${cat.color}08, transparent)`
                  : 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.4s ease',
                transform: hoveredCard === i ? 'translateY(-8px)' : 'translateY(0)',
                cursor: 'default',
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginBottom: 28,
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${cat.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: cat.color,
                  border: `1px solid ${cat.color}25`,
                }}>
                  {cat.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={0.4 + i * 0.15 + j * 0.05}
                  inView={isInView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
