import Link from 'next/link';
import { Target, Eye, Shield, Award, Users } from 'lucide-react';
import styles from './about.module.css';

export const metadata = {
  title: 'About Us | VMD Management Services',
  description: 'Learn about VMD Management Services, our mission, vision, and the AS Group of Companies roadmap.',
}

export default function AboutPage() {
  return (
    <div>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>About Us</h1>
          <p>Service • Trust • Safety</p>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="section">
        <div className="container">
          <div className={styles.introLayout}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', left: 0, transform: 'none' }}>Who We Are</h2>
              <p className={styles.leadText}>
                VMD Management Services is a leading provider of security and facility management solutions in Pune. 
                With a commitment to excellence, we safeguard your assets and ensure your premises run smoothly.
              </p>
              <p className={styles.paragraph}>
                Founded with a vision to redefine the standards of security and facility management, 
                our team brings together industry experts, rigorously trained personnel, and modern management practices. 
                Whether you need dedicated security guards for a residential society or comprehensive facility management 
                for a corporate office, we have the expertise to deliver.
              </p>
            </div>
            <div className={styles.visionCard}>
              <h3>Future Vision</h3>
              <h2>AS Group of Companies</h2>
              <p>
                Our journey doesn't stop here. VMD Management Services is on a strategic growth path to become the 
                <strong> AS Group of Companies</strong>. This evolution will allow us to offer an even broader spectrum 
                of professional services, creating a unified ecosystem of trust, safety, and operational excellence 
                across Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section bg-off-white">
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <Target size={48} className={styles.iconGold} />
              <h3>Our Mission</h3>
              <p>
                To provide unparalleled security and facility management services that exceed client expectations 
                through rigorous training, technological integration, and unwavering dedication to safety and hygiene.
              </p>
            </div>
            <div className={styles.mvCard}>
              <Eye size={48} className={styles.iconGold} />
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and preferred partner for security and facility management in India, 
                ultimately growing into the multifaceted AS Group of Companies to serve a wider array of client needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <Shield size={32} className={styles.iconNavy} />
              <h4>Integrity</h4>
              <p>We act with honesty and transparency in all our dealings.</p>
            </div>
            <div className={styles.valueItem}>
              <Award size={32} className={styles.iconNavy} />
              <h4>Excellence</h4>
              <p>We strive for the highest quality in every service we provide.</p>
            </div>
            <div className={styles.valueItem}>
              <Users size={32} className={styles.iconNavy} />
              <h4>Client-Centric</h4>
              <p>Your safety and satisfaction are at the heart of our operations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
