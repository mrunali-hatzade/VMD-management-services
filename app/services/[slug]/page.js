"use client";

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, Users, Briefcase, Building2, UserCheck, Factory, MapPin, Building,
  CheckCircle2, ArrowRight, ArrowLeft, Phone, MessageCircle, HelpCircle
} from 'lucide-react';

import styles from './service.module.css';
import FadeIn from '../../../components/FadeIn/FadeIn';
import FAQAccordion from '../../../components/FAQAccordion/FAQAccordion';

const servicesData = {
  'security-guards': {
    title: 'Professional Security Guards',
    subtitle: 'Police-verified, physically fit, and rigorously trained security guards for 24/7 vigil.',
    heroImg: '/vmd_hero_guard.jpg',
    icon: <ShieldCheck size={48} color="var(--gold)" />,
    overview: 'VMD Management Services provides elite, police-verified security guards trained in access control, visitor logs, emergency response, and perimeter defense. Whether protecting gated residential communities, IT parks, or industrial plants, our personnel maintain unmatched vigilance.',
    features: [
      '100% Police Station Background Verification',
      'Mandatory Physical & Mental Fitness Assessment',
      'Access Control & Visitor Register Management',
      'Material Gate Pass Audit & Vehicle Inspection',
      'Daily Supervision & Surprise Night Patrols',
      'Basic Firefighting & First-Aid Preparedness'
    ],
    benefits: [
      '24/7 Uninterrupted Asset & Life Protection',
      'Zero Absence Guarantee with Backup Guards',
      'Enhanced Peace of Mind for Residents & Tenants',
      'Customized Site Standing Operating Procedures (SOPs)'
    ],
    industries: ['Housing Societies', 'Corporate Offices', 'Factories', 'Hospitals', 'Construction Sites'],
    faqs: [
      { question: 'What is the deployment procedure for security guards?', answer: 'We conduct a free site audit, formulate custom SOPs, and deploy uniformed, post-briefed guards within 24 to 48 hours.' },
      { question: 'Are guards equipped with proper uniforms and gear?', answer: 'Yes, every guard is equipped with a clean uniform, photo ID badge, whistle, baton, torch, and duty register.' }
    ]
  },

  'housekeeping-services': {
    title: 'Corporate Housekeeping Services',
    subtitle: 'Meticulous corporate cleaning, sanitation, and hygiene upkeep for modern facilities.',
    heroImg: '/hero_housekeeping.jpg',
    icon: <Users size={48} color="var(--gold)" />,
    overview: 'Our housekeeping solutions combine trained cleaning staff with industrial-grade machinery and eco-friendly sanitation chemicals. We maintain spotless marble floors, sanitized washrooms, sparkling glass facades, and tidy office desks.',
    features: [
      'Daily Desk & Workstation Deep Cleaning',
      'Washroom Disinfection & Refill Management',
      'Floor Scrubbing & High-Gloss Polishing',
      'Waste Segregation & Garbage Disposal',
      'Glass Facade & Window Panes Cleaning',
      'Eco-Friendly Chemical Usage (Taski Range)'
    ],
    benefits: [
      'Hygienic & Healthy Workplace Environment',
      'Extended Life of Flooring & Furnishings',
      'Professional First Impression for Office Visitors',
      'Dedicated Housekeeping Supervisor On-Site'
    ],
    industries: ['IT Parks', 'Commercial Complexes', 'Hospitals', 'Schools', 'Hotels'],
    faqs: [
      { question: 'Do you supply housekeeping chemicals and machines?', answer: 'Yes, we provide single-disc scrubbing machines, vacuum cleaners, and Taski cleaning chemicals as required.' }
    ]
  },

  'office-boys': {
    title: 'Office Boys & Support Staff',
    subtitle: 'Polite pantry, filing, and errand support personnel for smooth office routine.',
    heroImg: '/hero_team.jpg',
    icon: <Briefcase size={48} color="var(--gold)" />,
    overview: 'Our office boys handle pantry operations, beverage serving, document movement, photocopying, and receptionist assistance with utmost courtesy and speed.',
    features: [
      'Pantry & Beverage Management (Tea/Coffee)',
      'Inter-Departmental Document Dispatch',
      'Conference Room Setup & Refreshment Serving',
      'Photocopying, Scanning & File Archiving',
      'Ergonomic Workstation Maintenance'
    ],
    benefits: [
      'Frees Up Core Staff to Focus on Business',
      'Well-Mannered Groomed Staff in Uniform',
      'Punctual & Disciplined Daily Assistance'
    ],
    industries: ['Corporate Headquarters', 'IT Companies', 'Banks', 'Law Firms'],
    faqs: [
      { question: 'Are office boys trained in pantry hygiene?', answer: 'Yes, they undergo strict hygiene, food handling, and corporate etiquette training.' }
    ]
  },

  'supervisors': {
    title: 'Security & Facility Supervisors',
    subtitle: 'Experienced field commanders ensuring 100% guard vigilance and operational compliance.',
    heroImg: '/vmd_hero_formation.jpg',
    icon: <UserCheck size={48} color="var(--gold)" />,
    overview: 'Supervisors act as the bridge between client management and ground staff. They manage shift rosters, conduct roll-call briefings, audit registers, and handle emergency escalations.',
    features: [
      'Daily Guard Shift Briefings & Uniform Audits',
      'Surprise Night Patrol Inspections',
      'Incident Investigation & Immediate Reporting',
      'On-Site Client Coordination & Weekly Meetings',
      'Attendance & Attendance Log Verification'
    ],
    benefits: [
      'Zero Management Overhead for Client',
      'Single Point of Contact for All Concerns',
      'Disciplined Guard Execution & Vigilance'
    ],
    industries: ['Large Housing Societies', 'Industrial Zones', 'Malls', 'Warehouses'],
    faqs: [
      { question: 'How frequently do supervisors visit our site?', answer: 'A dedicated supervisor visits daily, plus unannounced night checks at least 3-4 times a week.' }
    ]
  },

  'facility-management': {
    title: 'Integrated Facility Management',
    subtitle: 'End-to-end management of utilities, soft services, and maintenance staff.',
    heroImg: '/weblium_hero_bg.jpg',
    icon: <Building2 size={48} color="var(--gold)" />,
    overview: 'Comprehensive facility solutions integrating security, housekeeping, MEP maintenance, electrical checks, plumbing, and garden maintenance under one single contract.',
    features: [
      'Combined Security & Soft Services Oversight',
      'Vendor & Utility Management',
      'Preventive Maintenance Rosters',
      'Safety Audits & Fire Extinguisher Inspections',
      'Statutory & Environmental Compliance'
    ],
    benefits: [
      'Single SLA Contract for Entire Premises',
      'Cost Reduction through Consolidated Operations',
      'Seamless Property Value Enhancement'
    ],
    industries: ['Commercial Malls', 'Tech Parks', 'Residential Townships', 'Factories'],
    faqs: [
      { question: 'Can we combine security and housekeeping into one proposal?', answer: 'Yes, our integrated facility contract offers bundled discounts and streamlined billing.' }
    ]
  },

  'industrial-security': {
    title: 'Industrial & Factory Security',
    subtitle: 'Gate pass control, raw material audit, and perimeter protection for factories.',
    heroImg: '/hero_surveillance.jpg',
    icon: <Factory size={48} color="var(--gold)" />,
    overview: 'Specialized industrial guards trained in labor crowd control, truck weighbridge verification, inward/outward gate passes, and factory floor loss prevention.',
    features: [
      'Truck & Vehicle Gate Pass Inspection',
      'Raw Material & Finished Goods Audit',
      'Union & Labor Unrest Crowd Control',
      'Perimeter CCTV & Fence Vigilance',
      'Worker Frisking & Metal Detector Scans'
    ],
    benefits: [
      'Zero Theft & Inventory Leakage',
      'Smooth Logistics & Dispatch Tracking',
      'Robust Industrial Safety & Fire Watch'
    ],
    industries: ['Manufacturing Plants', 'Auto Components Units', 'Chemical Plants', 'Logistics Warehouses'],
    faqs: [
      { question: 'Do guards handle material gate entry registers?', answer: 'Yes, our guards meticulously log invoice numbers, vehicle numbers, and driver details.' }
    ]
  },

  'residential-security': {
    title: 'Residential Society Security',
    subtitle: 'Visitor management, parking order, and perimeter safety for housing societies.',
    heroImg: '/vmd_hero_guard.jpg',
    icon: <MapPin size={48} color="var(--gold)" />,
    overview: 'Courteous yet firm security personnel ensuring safe living for families in apartments, villas, and cooperative housing societies.',
    features: [
      'App-based & Physical Visitor Verification',
      'Delivery Partner & Maid Entry Logging',
      'Internal Vehicle Parking Regulation',
      'Clubhouse & Amenities Monitoring',
      '24/7 Gate & CCTV Watch'
    ],
    benefits: [
      'Safe Environment for Children & Senior Citizens',
      'Prevent Unauthorized Solicitations & Trespassing',
      'Orderly Parking & Peaceful Community Living'
    ],
    industries: ['Housing Societies', 'Gated Townships', 'Luxury Villas', 'Apartment Complexes'],
    faqs: [
      { question: 'Can guards operate digital visitor apps like MyGate or NoBrokerHood?', answer: 'Yes, our guards are smartphone literate and trained in operating all digital society gate apps.' }
    ]
  },

  'corporate-security': {
    title: 'Corporate & IT Park Security',
    subtitle: 'Sophisticated reception security and IT park access management.',
    heroImg: '/hero_team.jpg',
    icon: <Building size={48} color="var(--gold)" />,
    overview: 'Polished security personnel trained in executive front-desk reception, turnstile access, key card issuance, and confidential IP protection.',
    features: [
      'Turnstile & Access Card Badge Issuance',
      'VIP Visitor Protocol & Reception Escort',
      'Baggage Scanner & Metal Detector Monitoring',
      'Confidential Document & Data Center Security',
      'Evacuation & Fire Drill Command'
    ],
    benefits: [
      'Professional Corporate Image at Entrance',
      'Strict Intellectual Property & Asset Protection',
      'Smooth High-Volume Employee Access'
    ],
    industries: ['IT Parks', 'Financial Institutions', 'Multinational Tech Hubs', 'Embassy Offices'],
    faqs: [
      { question: 'Do corporate guards have good communication skills?', answer: 'Yes, corporate guards undergo grooming, basic English/Hindi fluency, and executive etiquette training.' }
    ]
  }
};

export default function ServiceDetailPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = servicesData[slug] || servicesData['security-guards'];

  return (
    <div className={styles.page}>
      {/* Service Banner */}
      <section className={styles.banner} style={{ backgroundImage: `linear-gradient(rgba(14, 35, 69, 0.85), rgba(14, 35, 69, 0.85)), url(${service.heroImg})` }}>
        <div className="container">
          <FadeIn>
            <div className={styles.bannerContent}>
              <Link href="/services" className={styles.backBreadcrumb}>
                <ArrowLeft size={16} /> All Services / {service.title}
              </Link>
              <div className={styles.bannerIcon}>{service.icon}</div>
              <h1>{service.title}</h1>
              <p>{service.subtitle}</p>
              <div className={styles.btnGroup}>
                <Link href="/services" className="btn-white">
                  <ArrowLeft size={18} /> Back to Services
                </Link>
                <Link href="/contact" className="btn-primary">
                  Request Service Quote &rarr;
                </Link>
                <a href="tel:8459845730" className="btn-white">
                  <Phone size={18} /> Call Specialist
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview & Features Section */}
      <section className="section">
        <div className="container">
          <div className={styles.serviceDetailGrid}>
            {/* Main Left Details */}
            <div className={styles.mainDetails}>
              <FadeIn>
                <h2 className={styles.sectionHeading}>Service Overview</h2>
                <p className={styles.overviewText}>{service.overview}</p>

                <h3 className={styles.subHeading}>Key Features & Deliverables</h3>
                <div className={styles.featuresList}>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <CheckCircle2 size={20} color="var(--gold)" className={styles.featIcon} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <h3 className={styles.subHeading} style={{ marginTop: '2.5rem' }}>Client Benefits</h3>
                <div className={styles.benefitsGrid}>
                  {service.benefits.map((ben, idx) => (
                    <div key={idx} className={styles.benefitCard}>
                      <ShieldCheck size={28} color="var(--gold)" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Sidebar */}
            <div className={styles.sidebar}>
              <FadeIn direction="left">
                <div className={styles.sidebarCard}>
                  <h3>Industries Served</h3>
                  <ul className={styles.indList}>
                    {service.industries.map((ind, idx) => (
                      <li key={idx}><Building2 size={16} color="var(--gold)" /> {ind}</li>
                    ))}
                  </ul>

                  <div className={styles.sidebarCta}>
                    <h4>Need Staffing For Your Site?</h4>
                    <p>Contact our Pune operations team for a free site audit and transparent rates.</p>
                    <a href="tel:8459845730" className="btn-primary" style={{ width: '100%' }}>
                      <Phone size={16} /> 8459845730
                    </a>
                    <a href={`https://wa.me/918459845730?text=Hi%20VMD%20Management%20Services,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ width: '100%', marginTop: '0.75rem' }}>
                      <MessageCircle size={16} /> WhatsApp Us
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><HelpCircle size={16} /> Queries Answered</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Deploy {service.title}?</h2>
          <p style={{ color: '#CBD5E0', fontSize: '1.2rem', marginBottom: '2rem' }}>Get in touch today for reliable staffing and customized operational proposals.</p>
          <Link href="/contact" className="btn-primary">
            Get Started Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
