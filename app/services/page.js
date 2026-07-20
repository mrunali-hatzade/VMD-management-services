import Link from 'next/link';
import { ShieldCheck, Users, Briefcase, Building2, UserCheck, MapPin, Factory } from 'lucide-react';
import styles from './services.module.css';

export const metadata = {
  title: 'Our Services | VMD Management Services',
  description: 'Comprehensive Security Guards, Housekeeping, and Facility Management services in Pune.',
}

export default function ServicesPage() {
  const services = [
    {
      id: 'security-guards',
      title: 'Security Guards',
      icon: <ShieldCheck size={48} />,
      desc: 'Highly trained, physically fit, and police-verified security personnel for 24/7 protection of your premises. We provide both armed and unarmed guards based on your security requirements.'
    },
    {
      id: 'housekeeping',
      title: 'Housekeeping Services',
      icon: <Users size={48} />,
      desc: 'Professional cleaning and maintenance staff ensuring a hygienic and pristine environment for offices, housing societies, and commercial complexes using modern equipment and eco-friendly products.'
    },
    {
      id: 'facility-management',
      title: 'Facility Management',
      icon: <Building2 size={48} />,
      desc: 'End-to-end facility management including electrical maintenance, plumbing, lift operations, and general upkeep, allowing you to focus on your core operations while we manage the infrastructure.'
    },
    {
      id: 'office-boys',
      title: 'Office Boys',
      icon: <Briefcase size={48} />,
      desc: 'Reliable support staff for corporate environments to handle day-to-day tasks, pantry management, document movement, and general administrative assistance.'
    },
    {
      id: 'supervisors',
      title: 'Supervisors',
      icon: <UserCheck size={48} />,
      desc: 'Experienced field officers and supervisors who conduct regular site inspections, manage the ground staff, and serve as a direct point of contact for clients to ensure flawless service delivery.'
    },
    {
      id: 'industrial-security',
      title: 'Industrial Security',
      icon: <Factory size={48} />,
      desc: 'Specialized security protocols for manufacturing units, factories, and warehouses involving material movement tracking, perimeter security, and worker access control.'
    },
    {
      id: 'residential-security',
      title: 'Residential Security',
      icon: <MapPin size={48} />,
      desc: 'Dedicated security solutions for housing societies and apartment complexes, including visitor management, parking control, and round-the-clock surveillance monitoring.'
    },
    {
      id: 'corporate-security',
      title: 'Corporate Security',
      icon: <Building2 size={48} />,
      desc: 'Professional and courteous security staff trained in corporate etiquette, front desk management, employee access control, and emergency evacuation procedures.'
    }
  ];

  return (
    <div>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Security & Facility Solutions</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((svc) => (
              <div key={svc.id} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>{svc.icon}</div>
                <h2>{svc.title}</h2>
                <p>{svc.desc}</p>
                <Link href="/contact" className={styles.quoteLink}>Request Quote &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="section bg-navy" style={{ textAlign: 'center', color: 'white' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.5rem' }}>Need a customized solution?</h2>
          <p style={{ color: '#E5E7EB', marginBottom: '2rem', fontSize: '1.25rem' }}>Our team can tailor a security and facility plan specific to your unique requirements.</p>
          <Link href="/contact" className="btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}
