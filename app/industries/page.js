"use client";

import Link from 'next/link';
import { 
  Building2, Briefcase, Building, MapPin, Users, ShieldCheck, 
  Warehouse, Factory, Hotel, HardHat, Phone, ArrowRight
} from 'lucide-react';

import styles from './industries.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';

const industriesList = [
  { title: 'Housing Societies', icon: <Building2 size={32} />, desc: 'Gated community protection & visitor management.', img: '/ind_housing_societies.jpg' },
  { title: 'Corporate Offices', icon: <Briefcase size={32} />, desc: 'Access control & receptionist security.', img: '/ind_corporate_offices.jpg' },
  { title: 'IT Companies', icon: <Building size={32} />, desc: '24/7 turnstile control & asset protection.', img: '/ind_it_companies.jpg' },
  { title: 'Hospitals', icon: <MapPin size={32} />, desc: 'Crowd control & patient safety management.', img: '/ind_hospitals.jpg' },
  { title: 'Schools & Colleges', icon: <Users size={32} />, desc: 'Student safety & strict campus entry protocols.', img: '/ind_schools_colleges.jpg' },
  { title: 'Banks', icon: <ShieldCheck size={32} />, desc: 'High-vigilance ATM & branch security.', img: '/ind_banks.jpg' },
  { title: 'Warehouses', icon: <Warehouse size={32} />, desc: 'Stock verification & perimeter guarding.', img: '/ind_warehouses.jpg' },
  { title: 'Factories', icon: <Factory size={32} />, desc: 'Material gate pass & worker attendance control.', img: '/ind_factories.jpg' },
  { title: 'Hotels', icon: <Hotel size={32} />, desc: 'Guest security & valet management.', img: '/ind_hotels.jpg' },
  { title: 'Construction Sites', icon: <HardHat size={32} />, desc: 'Raw material safeguarding & site entry tracking.', img: '/ind_construction_sites.jpg' },
];

export default function IndustriesPage() {
  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <FadeIn>
            <div className={styles.bannerContent}>
              <span className={styles.badge}>SECTOR EXPERTISE</span>
              <h1>Industries We Protect & Manage</h1>
              <p>Specialized physical security guarding and facility management protocols for diverse sectors across Pune.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {industriesList.map((ind, idx) => (
              <FadeIn key={ind.title} delay={idx * 0.05}>
                <div className={styles.industryCard}>
                  <div className={styles.industryBg} style={{ backgroundImage: `url(${ind.img})` }}></div>
                  <div className={styles.industryOverlay}></div>
                  <div className={styles.industryContent}>
                    <div className={styles.industryIcon}>{ind.icon}</div>
                    <h3>{ind.title}</h3>
                    <p>{ind.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '1rem' }}>Need Tailored Security for Your Facility?</h2>
          <p style={{ color: '#CBD5E0', fontSize: '1.2rem', marginBottom: '2rem' }}>We evaluate your property risks and deploy trained, police-verified personnel.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Request Site Audit & Quote <ArrowRight size={18} />
            </Link>
            <a href="tel:8459845730" className="btn-white">
              <Phone size={18} /> Speak to Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
