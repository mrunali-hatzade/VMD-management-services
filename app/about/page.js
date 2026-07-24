"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Award, Eye, Sparkles, UserCheck, HeartHandshake, CheckCircle2, 
  ArrowRight, Phone, MessageCircle, FileText, Building2, Users
} from 'lucide-react';

import styles from './about.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <FadeIn>
            <div className={styles.bannerContent}>
              <span className={styles.badge}>ISO 9001:2015 CERTIFIED</span>
              <h1>About VMD Management Services</h1>
              <p>Delivering high-vigilance security guarding and commercial facility management across Pune & Maharashtra for over 20 years.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Overview & Image */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className={styles.grid2Col}>
              <div className={styles.imageBox}>
                <Image 
                  src="/vmd_hero_formation.jpg" 
                  alt="VMD Management Staff" 
                  width={600} 
                  height={450} 
                  className={styles.img}
                />
                <div className={styles.expCard}>
                  <h3>20+</h3>
                  <p>Years of Service Excellence</p>
                </div>
              </div>

              <div className={styles.contentBox}>
                <span className="section-tag">Corporate Profile</span>
                <h2>Maharashtra’s Leading Security & Facility Partner</h2>
                <p>
                  VMD Management Services is a trusted provider of professional Security & Facility Management Services in Pune. We specialize in delivering trained security guards, housekeeping staff, office support, and facility management solutions for residential, commercial, corporate, and industrial clients.
                </p>
                <p>
                  Our commitment to safety, reliability, and service excellence helps businesses and communities operate with confidence. With experienced professionals, strict quality standards, and 24×7 support, we strive to build long-term relationships based on trust and performance.
                </p>

                <div className={styles.keyBadges}>
                  <div className={styles.badgeItem}><CheckCircle2 color="var(--gold)" /> 100% Police Verified Personnel</div>
                  <div className={styles.badgeItem}><CheckCircle2 color="var(--gold)" /> Statutory PF, ESIC & GST Compliant</div>
                  <div className={styles.badgeItem}><CheckCircle2 color="var(--gold)" /> 24/7 Mobile Patrol Supervision</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Foundation of Trust</span>
            <h2 className="section-title">Mission, Vision & Core Values</h2>
          </div>

          <div className={styles.mvGrid}>
            <FadeIn delay={0.1}>
              <div className={styles.mvBox}>
                <Eye size={36} color="var(--gold)" />
                <h3>Our Vision</h3>
                <p>To be the most trusted, reliable, and technology-empowered security and facility service provider across western India.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className={styles.mvBox}>
                <Sparkles size={36} color="var(--gold)" />
                <h3>Future Mission</h3>
                <p>Safeguarding lives, property, and corporate assets through proactive vigilance, trained staff, and quick emergency response.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className={styles.mvBox}>
                <Award size={36} color="var(--gold)" />
                <h3>Quality Policy</h3>
                <p>Continuous operational audits, strict guard grooming, and zero-tolerance toward absenteeism or negligence.</p>
              </div>
            </FadeIn>
          </div>

          {/* Core Values */}
          <div className={styles.valuesWrapper}>
            <h3>Our Core Operating Values</h3>
            <div className={styles.valuesGrid}>
              <div className={styles.valItem}><ShieldCheck size={24} /> <strong>Integrity</strong> - Uncompromising honesty in duty and gate reporting.</div>
              <div className={styles.valItem}><Award size={24} /> <strong>Discipline</strong> - Punctual shifts, clean uniforms, and sharp posture.</div>
              <div className={styles.valItem}><CheckCircle2 size={24} /> <strong>Reliability</strong> - Guaranteed backup replacements within 2 hours.</div>
              <div className={styles.valItem}><HeartHandshake size={24} /> <strong>Customer First</strong> - Dedicated account managers for instant query resolution.</div>
              <div className={styles.valItem}><UserCheck size={24} /> <strong>Professionalism</strong> - Respectful communication with residents and office staff.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VMD */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The VMD Advantage</span>
            <h2 className="section-title">Why Choose VMD Management Services</h2>
            <p className="section-desc">Our commitment to rigorous standards, accountability, and rapid deployment sets us apart from the competition.</p>
          </div>

          <div className={styles.whyGrid}>
            {[
              { icon: <ShieldCheck size={32} />, title: 'Police Verified Guards', desc: 'Every guard undergoes mandatory local police station character verification before deployment.' },
              { icon: <Users size={32} />, title: 'Trained & Uniformed Staff', desc: 'Standardized uniforms, ID badges, and regular physical drill and fire safety training.' },
              { icon: <CheckCircle2 size={32} />, title: 'Quick Replacement', desc: 'Guaranteed backup guard replacement within 2 hours in case of absenteeism.' },
              { icon: <Eye size={32} />, title: 'Surprise Night Audits', desc: 'Field supervisors conduct unannounced day & night patrols to audit guard alertness.' },
              { icon: <Award size={32} />, title: 'Statutory Compliance', desc: 'Full adherence to PF, ESIC, GST, and Maharashtra State Minimum Wages regulations.' },
              { icon: <Building2 size={32} />, title: 'Dedicated Account Manager', desc: 'Single point of contact for instant query resolution and seamless communication.' },
              { icon: <UserCheck size={32} />, title: 'Background Verification', desc: 'Thorough Aadhaar validation, address verification, and previous employment checks.' },
              { icon: <HeartHandshake size={32} />, title: '24×7 Emergency Support', desc: 'Quick Response Team (QRT) on standby round the clock for critical incident handling.' },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '1rem' }}>Partner With VMD Management Services</h2>
          <p style={{ color: '#CBD5E0', fontSize: '1.2rem', marginBottom: '2rem' }}>Experience seamless security guarding and commercial facility management today.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              <FileText size={18} /> Request Free Quotation
            </Link>
            <a href="tel:8459845730" className="btn-white">
              <Phone size={18} /> Speak to Operations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
