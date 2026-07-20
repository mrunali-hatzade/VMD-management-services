import Link from 'next/link';
import { Building2, Briefcase, MapPin, Users, ShieldCheck, Warehouse, Factory, Hotel, HardHat, GraduationCap } from 'lucide-react';
import styles from './industries.module.css';

export const metadata = {
  title: 'Industries We Serve | VMD Management Services',
  description: 'Security and Facility Management for Housing Societies, Corporate, IT, Hospitals, and more in Pune.',
}

export default function IndustriesPage() {
  const industries = [
    { name: 'Housing Societies', icon: <Building2 size={40} />, desc: 'Comprehensive residential security ensuring safe environments for families.' },
    { name: 'Corporate Offices', icon: <Briefcase size={40} />, desc: 'Professional access control and facility management for corporate hubs.' },
    { name: 'IT Companies', icon: <Building2 size={40} />, desc: '24/7 surveillance and specialized security protocols for IT parks.' },
    { name: 'Hospitals', icon: <MapPin size={40} />, desc: 'Sensitive crowd management and round-the-clock facility support for healthcare.' },
    { name: 'Schools & Colleges', icon: <GraduationCap size={40} />, desc: 'Safe campus environments for students and staff with trained personnel.' },
    { name: 'Banks', icon: <ShieldCheck size={40} />, desc: 'High-alert armed and unarmed security for financial institutions.' },
    { name: 'Warehouses', icon: <Warehouse size={40} />, desc: 'Asset protection and material movement tracking for storage facilities.' },
    { name: 'Factories', icon: <Factory size={40} />, desc: 'Robust industrial security and housekeeping for manufacturing units.' },
    { name: 'Hotels', icon: <Hotel size={40} />, desc: 'Hospitality-trained security and facility staff to enhance guest experience.' },
    { name: 'Construction Sites', icon: <HardHat size={40} />, desc: 'Material protection and perimeter security for active construction zones.' },
  ];

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Industries We Serve</h1>
          <p>Tailored Solutions for Every Sector</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {industries.map((ind, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{ind.icon}</div>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
