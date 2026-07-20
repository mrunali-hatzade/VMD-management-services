"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, Users, Briefcase, Building2, UserCheck, CheckCircle2, 
  MapPin, Factory, Hotel, HardHat, Warehouse, Star, Phone, MessageCircle, ChevronDown, Check
} from 'lucide-react';
import styles from './page.module.css';
import FadeIn from '../components/FadeIn/FadeIn';

const heroImages = [
  '/weblium_hero_bg.jpg',
  '/hero_housekeeping.jpg',
  '/hero_team.jpg',
  '/hero_surveillance.jpg'
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className={styles.home}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        {heroImages.map((src, index) => (
          <div 
            key={src} 
            className={`${styles.heroBg} ${index === currentImage ? styles.heroBgActive : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(10, 31, 63, 0.7), rgba(10, 31, 63, 0.7)), url(${src})` }}
          />
        ))}
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Professional Security & Facility Management Services in Pune</h1>
          <p className={styles.heroSubtitle}>
            Reliable Security Guards, Housekeeping & Facility Solutions for Residential, Commercial and Industrial Clients.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn-primary">Request a Free Quote</Link>
            <a href="tel:8459845730" className="btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
              Call Now
            </a>
          </div>
        </div>

        {/* HERO BOTTOM STATS BAR */}
        <div className={styles.heroStatsBar}>
          <div className="container">
            <div className={styles.heroStatsGrid}>
              <div className={styles.heroStatCol}>
                <div className={styles.heroStatNum}>10+</div>
                <div className={styles.heroStatLabel}>YEARS EXPERIENCE</div>
              </div>
              <div className={styles.heroStatCol}>
                <div className={styles.heroStatNum}>500+</div>
                <div className={styles.heroStatLabel}>SECURITY PERSONNEL</div>
              </div>
              <div className={styles.heroStatCol}>
                <div className={styles.heroStatNum}>300+</div>
                <div className={styles.heroStatLabel}>HAPPY CLIENTS</div>
              </div>
              <div className={styles.heroStatCol}>
                <div className={styles.heroStatNum}>24×7</div>
                <div className={styles.heroStatLabel}>SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className={`section bg-off-white`}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="section-title">Service • Trust • Safety</h2>
            <p className={styles.aboutText}>
              VMD Management Services is a premier security and facility management agency based in Pune. 
              We are dedicated to providing top-tier security personnel, meticulous housekeeping, and comprehensive 
              facility management solutions tailored to your specific needs.
            </p>
            <Link href="/about" className="btn-outline">Learn More About Us</Link>
          </FadeIn>
        </div>
      </section>



      {/* SERVICES GRID */}
      <section className="section bg-off-white">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Our Services</h2>
          </FadeIn>
          <div className={styles.grid}>
            {[
              { title: 'Security Guards', icon: <ShieldCheck size={40} /> },
              { title: 'Housekeeping Services', icon: <Users size={40} /> },
              { title: 'Office Boys', icon: <Briefcase size={40} /> },
              { title: 'Supervisors', icon: <UserCheck size={40} /> },
              { title: 'Facility Management', icon: <Building2 size={40} /> },
              { title: 'Industrial Security', icon: <Factory size={40} /> },
              { title: 'Residential Security', icon: <MapPin size={40} /> },
              { title: 'Corporate Security', icon: <Building2 size={40} /> },
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>{service.icon}</div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <Link href="/services" className={styles.cardLink}>Learn More &rarr;</Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-off-white">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Why Choose VMD</h2>
          </FadeIn>
          <div className={styles.whyGrid}>
            {[
              'Trained Staff', 'Police Verified Guards', 'Uniformed Personnel', 
              '24×7 Support', 'Quick Replacement', 'Regular Site Inspection', 'Professional Management'
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.05} direction="left">
                <div className={styles.whyItem}>
                  <CheckCircle2 className={styles.checkIcon} size={24} />
                  <span>{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section bg-off-white">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Industries We Serve</h2>
          </FadeIn>
          <div className={styles.industryGrid}>
            {[
              { name: 'Housing Societies', icon: <Building2 size={32} /> },
              { name: 'Corporate Offices', icon: <Briefcase size={32} /> },
              { name: 'IT Companies', icon: <Building2 size={32} /> },
              { name: 'Hospitals', icon: <MapPin size={32} /> },
              { name: 'Schools & Colleges', icon: <Users size={32} /> },
              { name: 'Banks', icon: <ShieldCheck size={32} /> },
              { name: 'Warehouses', icon: <Warehouse size={32} /> },
              { name: 'Factories', icon: <Factory size={32} /> },
              { name: 'Hotels', icon: <Hotel size={32} /> },
              { name: 'Construction Sites', icon: <HardHat size={32} /> },
            ].map((industry, index) => (
              <FadeIn key={index} delay={index * 0.05} direction="up">
                <div className={styles.industryCard}>
                  <div className={styles.industryIcon}>{industry.icon}</div>
                  <h4>{industry.name}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>



      {/* TESTIMONIALS */}
      <section className="section bg-off-white">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Client Testimonials</h2>
          </FadeIn>
          <div className={styles.testimonialGrid}>
            {[1, 2, 3].map((_, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className={styles.testimonialCard}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--gold)" color="var(--gold)" />)}
                  </div>
                  <p className={styles.testimonialText}>
                    "VMD Management Services has completely transformed our society's security setup. Their guards are highly professional and always alert."
                  </p>
                  <h4 className={styles.clientName}>- Happy Client {index + 1}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container text-center">
          <FadeIn direction="up">
            <h2 className={styles.ctaTitle}>Ready to secure your premises?</h2>
            <p className={styles.ctaText}>Get a free quotation tailored to your specific requirements today.</p>
            <div className={styles.heroButtons} style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary">Get Your Free Quote</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
