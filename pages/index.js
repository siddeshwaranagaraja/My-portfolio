import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
