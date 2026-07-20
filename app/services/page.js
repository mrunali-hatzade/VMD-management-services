"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, Users, Briefcase, Building2, UserCheck, Factory, MapPin, Building,
  ArrowRight, CheckCircle2, Phone, FileText
} from 'lucide-react';

import styles from './services.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';

const servicesList = [
  { slug: 'security-guards', title: 'Security Guards', icon: <ShieldCheck size={40} />, desc: 'Police-verified, physically fit, and trained guards for 24/7 vigil.', img: '/vmd_hero_guard.jpg' },
  { slug: 'housekeeping-services', title: 'Housekeeping Services', icon: <Users size={40} />, desc: 'Meticulous corporate cleaning, sanitation, and hygiene upkeep.', img: '/hero_housekeeping.jpg' },
  { slug: 'office-boys', title: 'Office Boys', icon: <Briefcase size={40} />, desc: 'Polite pantry, filing, and errand staff for seamless office operations.', img: '/hero_team.jpg' },
  { slug: 'supervisors', title: 'Supervisors', icon: <UserCheck size={40} />, desc: 'Experienced field supervisors ensuring 100% guard vigilance & audit.', img: '/vmd_hero_formation.jpg' },
  { slug: 'facility-management', title: 'Facility Management', icon: <Building2 size={40} />, desc: 'End-to-end management of utilities, maintenance, and facility staff.', img: '/weblium_hero_bg.jpg' },
  { slug: 'industrial-security', title: 'Industrial Security', icon: <Factory size={40} />, desc: 'Gate pass control, material audit, and perimeter protection for factories.', img: '/hero_surveillance.jpg' },
  { slug: 'residential-security', title: 'Residential Security', icon: <MapPin size={40} />, desc: 'Visitor management, parking order, and perimeter safety for societies.', img: '/vmd_hero_guard.jpg' },
  { slug: 'corporate-security', title: 'Corporate Security', icon: <Building size={40} />, desc: 'Sophisticated reception security and IT park access management.', img: '/hero_team.jpg' },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <FadeIn>
            <div className={styles.bannerContent}>
              <span className={styles.badge}>TAILORED STAFFING SOLUTIONS</span>
              <h1>Our Security & Facility Services</h1>
              <p>Explore our comprehensive portfolio of physical guarding, housekeeping, and commercial facility management services in Pune.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {servicesList.map((srv, idx) => (
              <FadeIn key={srv.slug} delay={idx * 0.05}>
                <div className={styles.card}>
                  <div className={styles.cardBg} style={{ backgroundImage: `url(${srv.img})` }}></div>
                  <div className={styles.cardOverlay}></div>
                  <div className={styles.cardBody}>
                    <div className={styles.iconCircle}>{srv.icon}</div>
                    <h3>{srv.title}</h3>
                    <p>{srv.desc}</p>
                    <Link href={`/services/${srv.slug}`} className={styles.cardBtn}>
                      View Full Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison & Standards Section */}
      <section className="section bg-navy">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: 'var(--gold)' }}>Our Standards</span>
            <h2 className="section-title">Every Deployment Includes</h2>
          </div>

          <div className={styles.standardsGrid}>
            <div className={styles.standardItem}><CheckCircle2 color="var(--gold)" size={24} /> Police Station Verified Staff</div>
            <div className={styles.standardItem}><CheckCircle2 color="var(--gold)" size={24} /> Full Uniform & Gear Equipment</div>
            <div className={styles.standardItem}><CheckCircle2 color="var(--gold)" size={24} /> 24/7 Mobile Field Supervision</div>
            <div className={styles.standardItem}><CheckCircle2 color="var(--gold)" size={24} /> Zero Absence Reserve Backup</div>
            <div className={styles.standardItem}><CheckCircle2 color="var(--gold)" size={24} /> PF & ESIC Statutory Compliance</div>
            <div className={styles.standardItem}><CheckCircle2 color="var(--gold)" size={24} /> Customized Site Register Protocols</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-off-white" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'var(--navy)' }}>Need Custom Service Terms?</h2>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', marginBottom: '2rem' }}>We design bespoke proposals according to your site layout, shift hours, and budget.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              <FileText size={18} /> Request Free Quotation
            </Link>
            <a href="tel:8459845730" className="btn-outline">
              <Phone size={18} /> Call Operations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
