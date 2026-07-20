"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Users, Briefcase, Building2, UserCheck, CheckCircle2, 
  MapPin, Factory, Hotel, HardHat, Warehouse, Star, Phone, MessageCircle, 
  Clock, Award, FileCheck, ShieldAlert, BadgeCheck, FileText, Check, ArrowRight,
  Eye, HeartHandshake, Zap, Sparkles, Building, ChevronRight, Send, Mail
} from 'lucide-react';

import styles from './page.module.css';
import FadeIn from '../components/FadeIn/FadeIn';
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';
import FAQAccordion from '../components/FAQAccordion/FAQAccordion';
import LightboxModal from '../components/LightboxModal/LightboxModal';

const heroImages = [
  '/weblium_hero_bg.jpg',
  '/hero_housekeeping.jpg',
  '/hero_team.jpg',
  '/hero_surveillance.jpg'
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Security Guards',
    message: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting VMD Management Services. Our operations supervisor will get back to you shortly.');
    setContactForm({ name: '', email: '', phone: '', service: 'Security Guards', message: '' });
  };

  // Gallery items for preview
  const galleryItems = [
    { id: 1, title: 'Guards in uniform', category: 'Security Guards', src: '/guards_in_uniform.jpg' },
    { id: 2, title: 'Housekeeping staff', category: 'Housekeeping', src: '/housekeeping_staff.jpg' },
    { id: 3, title: 'Office team', category: 'Corporate', src: '/office_team.jpg' },
    { id: 4, title: 'Training sessions', category: 'Training', src: '/training_sessions.jpg' },
    { id: 5, title: 'Client sites', category: 'Industrial', src: '/client_sites.jpg' },
  ];

  const filteredGallery = activeGalleryTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeGalleryTab);

  // FAQ Items (15+ Items)
  const faqList = [
    { question: 'Are your security guards police verified and trained?', answer: 'Yes, 100% of our security personnel undergo rigorous police background verification, physical fitness assessments, and mandatory training in emergency response, access control, and visitor management.' },
    { question: 'What security & facility services does VMD offer in Pune?', answer: 'We specialize in Security Guards, Corporate & Industrial Security, Meticulous Housekeeping, Office Boys, Supervisors, Facility Management, Residential Society Guarding, and Warehouse Protection.' },
    { question: 'How fast can VMD deploy security personnel to my site?', answer: 'We offer rapid emergency deployment within 24 to 48 hours for standard sites in Pune, PCMC, and surrounding industrial zones.' },
    { question: 'Do you provide replacements if a guard is absent?', answer: 'Absolutely. We maintain a dedicated reserve bench of supervisors and guards to guarantee immediate, 100% attendance coverage without extra cost.' },
    { question: 'Are your guards equipped with proper uniforms and safety gear?', answer: 'Yes, all guards are deployed in full, clean corporate uniforms complete with ID badges, lanyards, batons, whistles, torches, and safety boots.' },
    { question: 'Do you conduct night inspections and supervisor visits?', answer: 'Yes, our mobile patrol supervisors conduct unannounced daytime and nighttime inspection visits to ensure guards remain vigilant at all times.' },
    { question: 'Is VMD compliant with PF, ESIC, GST, and Labour Licenses?', answer: 'Yes, VMD Management Services is fully compliant with all statutory government regulations including EPF, ESIC, Labour Welfare Fund, GST, and Minimum Wages Act.' },
    { question: 'What industries do you serve across Maharashtra?', answer: 'We serve Housing Societies, Corporate IT Parks, Hospitals, Educational Institutes, Commercial Malls, Warehouses, Manufacturing Factories, Construction Sites, and Hotels.' },
    { question: 'How is billing and invoicing calculated for facility services?', answer: 'We offer transparent monthly billing based on agreed guard hours, shift schedules, and service scopes with no hidden fees.' },
    { question: 'Can we request customized security protocols for our site?', answer: 'Yes, our risk assessment team visits your site to design custom Standing Operating Procedures (SOPs), material gate pass protocols, and vehicle entry logs.' },
    { question: 'What is the minimum contract duration for facility management?', answer: 'We offer flexible short-term event contracts as well as standard annual corporate agreements with 30-day notice terms.' },
    { question: 'Do you provide specialized housekeeping equipment and chemicals?', answer: 'Yes, we supply eco-friendly, industrial-grade cleaning chemicals, scrubbing machines, vacuum cleaners, and complete sanitation toolkits.' },
    { question: 'How do you handle fire safety and emergency situations?', answer: 'Our guards receive basic firefighting, evacuation drill, and First-Aid training to handle emergencies prior to official emergency services arrival.' },
    { question: 'Do you provide supervisors to manage housekeeping and guards?', answer: 'Yes, every deployed team is managed by an experienced field supervisor who serves as your single point of contact for daily reporting.' },
    { question: 'How can I get a custom quotation for my society or office?', answer: 'You can fill out our website request form, call our 24x7 helpline at 8459845730, or send us a WhatsApp message for a free site audit and proposal.' },
  ];

  return (
    <div className={styles.home}>
      {/* 1. FULL SCREEN HERO SECTION */}
      <section className={styles.hero}>
        {heroImages.map((src, index) => (
          <div 
            key={src} 
            className={`${styles.heroBg} ${index === currentImage ? styles.heroBgActive : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(14, 35, 69, 0.75), rgba(14, 35, 69, 0.82)), url(${src})` }}
          />
        ))}
        
        <div className={`container ${styles.heroContent}`}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTagline}
          >
            <span>Service</span>
            <span className={styles.taglineDot}>•</span>
            <span>Trust</span>
            <span className={styles.taglineDot}>•</span>
            <span>Safety</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.heroBadge}
          >
            <ShieldCheck size={18} color="var(--gold)" />
            <span>ISO 9001:2015 Certified Security & Facility Agency</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroTitle}
          >
            Professional Security & Facility Management Services in Pune
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.heroSubtitle}
          >
            Reliable Security Guards, Housekeeping & Facility Solutions for Residential, Commercial and Industrial Clients.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.heroButtons}
          >
            <Link href="/contact" className="btn-primary">
              <FileText size={18} /> Request Free Quote
            </Link>
            <a href="tel:8459845730" className="btn-white">
              <Phone size={18} /> Call Now
            </a>
            <a href="https://wa.me/918459845730?text=Hi%20VMD%20Management%20Services,%20I%20am%20interested%20in%20your%20security%20and%20facility%20services." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </motion.div>

          {/* Hero Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={styles.heroTrustGrid}
          >
            <div className={styles.trustBadgeItem}><Check size={16} color="var(--gold)" /> Police Verified Guards</div>
            <div className={styles.trustBadgeItem}><Check size={16} color="var(--gold)" /> 24×7 Support</div>
            <div className={styles.trustBadgeItem}><Check size={16} color="var(--gold)" /> Fast Deployment</div>
            <div className={styles.trustBadgeItem}><Check size={16} color="var(--gold)" /> Trusted Professionals</div>
          </motion.div>
        </div>

        {/* Hero Bottom Animated Counter Bar */}
        <div className={styles.heroCounterBar}>
          <div className="container">
            <div className={styles.counterGrid}>
              <div className={styles.counterCol}>
                <div className={styles.counterNum}><AnimatedCounter value="10+" /></div>
                <div className={styles.counterLabel}>Years Experience</div>
              </div>
              <div className={styles.counterCol}>
                <div className={styles.counterNum}><AnimatedCounter value="500+" /></div>
                <div className={styles.counterLabel}>Professional Guards</div>
              </div>
              <div className={styles.counterCol}>
                <div className={styles.counterNum}><AnimatedCounter value="350+" /></div>
                <div className={styles.counterLabel}>Happy Clients</div>
              </div>
              <div className={styles.counterCol}>
                <div className={styles.counterNum}><AnimatedCounter value="24×7" suffix="" /></div>
                <div className={styles.counterLabel}>Emergency Support</div>
              </div>
              <div className={styles.counterCol}>
                <div className={styles.counterNum}><AnimatedCounter value="98%" /></div>
                <div className={styles.counterLabel}>Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <FadeIn direction="left">
              <div className={styles.aboutImageCol}>
                <div className={styles.aboutImageCard}>
                  <Image 
                    src="/hero_team.jpg" 
                    alt="VMD Management Services Team" 
                    width={600} 
                    height={480} 
                    className={styles.aboutImage}
                  />
                  <div className={styles.floatingExpCard}>
                    <h3>10+</h3>
                    <p>Years of Service Excellence</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className={styles.aboutTextCol}>
                <span className="section-tag">About VMD Management Services</span>
                <h2 className={styles.aboutHeading}>Enterprise Security & Operational Facility Excellence</h2>
                
                <p className={styles.aboutDesc}>
                  VMD Management Services is a premier corporate security and facility management agency based in Pune. 
                  We specialize in deploying rigorously trained, police-verified security personnel, proactive facility managers, 
                  and meticulous housekeeping staff tailored to high-value industrial, commercial, and residential assets.
                </p>

                <div className={styles.missionVisionGrid}>
                  <div className={styles.mvCard}>
                    <Eye size={22} className={styles.mvIcon} />
                    <div>
                      <h4>Our Vision</h4>
                      <p>To be Maharashtra's most trusted benchmark in safety and facility management.</p>
                    </div>
                  </div>
                  <div className={styles.mvCard}>
                    <Sparkles size={22} className={styles.mvIcon} />
                    <div>
                      <h4>Our Mission</h4>
                      <p>Protecting client assets with 24/7 vigilance, discipline, and technology-driven operations.</p>
                    </div>
                  </div>
                </div>

                {/* Core Values 5 Icon Cards */}
                <div className={styles.coreValuesTitle}>Core Organizational Values</div>
                <div className={styles.coreValuesGrid}>
                  <div className={styles.valueCard}><ShieldCheck size={20} /> Integrity</div>
                  <div className={styles.valueCard}><Award size={20} /> Discipline</div>
                  <div className={styles.valueCard}><CheckCircle2 size={20} /> Reliability</div>
                  <div className={styles.valueCard}><HeartHandshake size={20} /> Customer First</div>
                  <div className={styles.valueCard}><UserCheck size={20} /> Professionalism</div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <Link href="/about" className="btn-outline">
                    Learn More About Us <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Deliver</span>
            <h2 className="section-title">Comprehensive Security & Facility Solutions</h2>
            <p className="section-desc">Tailored staffing and protection solutions designed for modern commercial, industrial, and residential premises.</p>
          </div>

          <div className={styles.servicesGrid}>
            {[
              { slug: 'security-guards', title: 'Security Guards', icon: <ShieldCheck size={36} />, desc: 'Police-verified, physically fit, and trained guards for 24/7 vigil.', img: '/srv_security_guards.jpg' },
              { slug: 'housekeeping-services', title: 'Housekeeping Services', icon: <Users size={36} />, desc: 'Meticulous corporate cleaning, sanitation, and hygiene upkeep.', img: '/srv_housekeeping.jpg' },
              { slug: 'office-boys', title: 'Office Boys', icon: <Briefcase size={36} />, desc: 'Polite pantry, filing, and errand staff for seamless office operations.', img: '/srv_office_boys.jpg' },
              { slug: 'supervisors', title: 'Supervisors', icon: <UserCheck size={36} />, desc: 'Experienced field supervisors ensuring 100% guard vigilance & audit.', img: '/srv_supervisors.jpg' },
              { slug: 'facility-management', title: 'Facility Management', icon: <Building2 size={36} />, desc: 'End-to-end management of utilities, maintenance, and facility staff.', img: '/srv_facility_mgmt.jpg' },
              { slug: 'industrial-security', title: 'Industrial Security', icon: <Factory size={36} />, desc: 'Gate pass control, material audit, and perimeter protection for factories.', img: '/srv_industrial_security.jpg' },
              { slug: 'residential-security', title: 'Residential Security', icon: <MapPin size={36} />, desc: 'Visitor management, parking order, and perimeter safety for societies.', img: '/srv_residential_security.jpg' },
              { slug: 'corporate-security', title: 'Corporate Security', icon: <Building size={36} />, desc: 'Sophisticated reception security and IT park access management.', img: '/srv_corporate_security.jpg' },
            ].map((srv, idx) => (
              <FadeIn key={srv.slug} delay={idx * 0.05}>
                <Link href={`/services/${srv.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceBgImage} style={{ backgroundImage: `url(${srv.img})` }}></div>
                    <div className={styles.serviceCardContent}>
                      <div className={styles.serviceIcon}>{srv.icon}</div>
                      <h3>{srv.title}</h3>
                      <p>{srv.desc}</p>
                      <span className={styles.serviceLink}>
                        Learn More <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE VMD (12 Icon Cards) */}
      <section className="section bg-navy">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: 'var(--gold)' }}>The VMD Advantage</span>
            <h2 className="section-title">Why Choose VMD Management Services</h2>
            <p className="section-desc">Our commitment to rigorous standards, accountability, and rapid deployment sets us apart.</p>
          </div>

          <div className={styles.whyGrid}>
            {[
              'Trained Staff', 'Police Verified Guards', 'Uniformed Personnel', 
              '24×7 Support', 'Quick Replacement', 'Regular Site Inspection', 
              'Professional Management', 'Emergency Response', 'Dedicated Supervisor',
              'Background Verification', 'Fast Deployment', 'Quality Monitoring'
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.03} direction="up">
                <div className={styles.whyCard}>
                  <CheckCircle2 size={24} color="var(--gold)" className={styles.whyIcon} />
                  <span>{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE (10 Premium Image Cards) */}
      <section id="industries" className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Diverse Expertise</span>
            <h2 className="section-title">Industries We Protect & Manage</h2>
            <p className="section-desc">Tailored security protocols for high-traffic, sensitive, and large-scale industrial properties.</p>
          </div>

          <div className={styles.industryGrid}>
            {[
              { title: 'Housing Societies', icon: <Building2 size={32} />, desc: 'Gated community protection & visitor management.', img: '/ind_housing_societies.jpg' },
              { title: 'Corporate Offices', icon: <Briefcase size={32} />, desc: 'Access control & receptionist security.', img: '/ind_corporate_offices.jpg' },
              { title: 'IT Companies', icon: <Building size={32} />, desc: '24/7 turnstile control & asset protection.', img: '/srv_corporate_security.jpg' },
              { title: 'Hospitals', icon: <MapPin size={32} />, desc: 'Crowd control & patient safety management.', img: '/srv_housekeeping.jpg' },
              { title: 'Schools & Colleges', icon: <Users size={32} />, desc: 'Student safety & strict campus entry protocols.', img: '/srv_residential_security.jpg' },
              { title: 'Banks', icon: <ShieldCheck size={32} />, desc: 'High-vigilance ATM & branch security.', img: '/srv_security_guards.jpg' },
              { title: 'Warehouses', icon: <Warehouse size={32} />, desc: 'Stock verification & perimeter guarding.', img: '/srv_industrial_security.jpg' },
              { title: 'Factories', icon: <Factory size={32} />, desc: 'Material gate pass & worker attendance control.', img: '/srv_facility_mgmt.jpg' },
              { title: 'Hotels', icon: <Hotel size={32} />, desc: 'Guest security & valet management.', img: '/srv_office_boys.jpg' },
              { title: 'Construction Sites', icon: <HardHat size={32} />, desc: 'Raw material safeguarding & site entry tracking.', img: '/srv_supervisors.jpg' },
            ].map((ind, idx) => (
              <FadeIn key={ind.title} delay={idx * 0.05}>
                <div className={styles.industryCard}>
                  <div className={styles.industryBg} style={{ backgroundImage: `url(${ind.img})` }}></div>
                  <div className={styles.industryOverlay}></div>
                  <div className={styles.industryContent}>
                    <div className={styles.industryIcon}>{ind.icon}</div>
                    <h4>{ind.title}</h4>
                    <p>{ind.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DARK NAVY STATISTICS SECTION */}
      <section className="section bg-navy">
        <div className="container">
          <div className={styles.statsBarGrid}>
            <div className={styles.statBox}>
              <div className={styles.statVal}><AnimatedCounter value="10+" /></div>
              <div className={styles.statLbl}>Years Experience</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}><AnimatedCounter value="500+" /></div>
              <div className={styles.statLbl}>Guards Deployed</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}><AnimatedCounter value="350+" /></div>
              <div className={styles.statLbl}>Satisfied Clients</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}><AnimatedCounter value="150+" /></div>
              <div className={styles.statLbl}>Sites Managed</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statVal}><AnimatedCounter value="98%" /></div>
              <div className={styles.statLbl}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CERTIFICATIONS SECTION */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Government & Regulatory Authorizations</span>
            <h2 className="section-title">Certifications & Licenses</h2>
            <p className="section-desc">Fully registered, licensed, and compliant under Indian labor and security frameworks.</p>
          </div>

          <div className={styles.certGrid}>
            {[
              { name: 'ISO 9001:2015', label: 'Quality Management Certified' },
              { name: 'Company Registration', label: 'Ministry of Corporate Affairs' },
              { name: 'GST Registered', label: 'Government of India' },
              { name: 'Labour License', label: 'State Labour Department' },
              { name: 'EPF Compliant', label: 'Employees Provident Fund' },
              { name: 'ESIC Compliant', label: 'State Insurance Scheme' },
              { name: 'Police Verified', label: 'State Police Department' },
            ].map((cert, idx) => (
              <FadeIn key={cert.name} delay={idx * 0.05}>
                <div className={styles.certCard}>
                  <ShieldCheck size={36} color="var(--gold)" />
                  <h4>{cert.name}</h4>
                  <p>{cert.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLIENT LOGOS */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Trusted By Industry Leaders</span>
            <h2 className="section-title">Our Valued Corporate Clients</h2>
          </div>

          <div className={styles.clientLogosGrid}>
            {['Societies', 'IT Parks', 'Industrial Hubs', 'Hospitals', 'Logistics', 'Retail Outlets'].map((logo, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={styles.clientLogoCard}>
                  <Building2 size={28} color="var(--navy)" />
                  <span>{logo} Partner</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CLIENT TESTIMONIALS SLIDER */}
      <section id="testimonials" className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-desc">Feedback from society chairmen, factory owners, and facility managers across Pune.</p>
          </div>

          <div className={styles.testimonialGrid}>
            {[
              { name: 'Rajesh Sharma', role: 'Chairman, Blue Ridge Housing Society', quote: 'VMD Management Services has provided exemplary security guards for our society of 400+ flats. Their supervisors conduct regular night checks.' },
              { name: 'Priya Kulkarni', role: 'HR Manager, TechVista IT Solutions', quote: 'Extremely professional housekeeping and office boy staff. Their response time during urgent manpower replacements is top-notch.' },
              { name: 'Anil Deshmukh', role: 'Plant Head, Sahyadri Engineering Pvt Ltd', quote: 'Perimeter security and gate entry pass tracking for raw materials has improved drastically since we contracted VMD 3 years ago.' },
            ].map((t, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={styles.testimonialCard}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--gold)" color="var(--gold)" />)}
                  </div>
                  <p className={styles.testimonialQuote}>"{t.quote}"</p>
                  <div className={styles.clientMeta}>
                    <div className={styles.clientAvatar}>{t.name.charAt(0)}</div>
                    <div>
                      <h4 className={styles.clientName}>{t.name}</h4>
                      <p className={styles.clientRole}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 12. GALLERY PREVIEW */}
      <section id="gallery" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">On-Ground Action</span>
            <h2 className="section-title">Media & Training Gallery</h2>
            <p className="section-desc">Take a look at our trained guards, supervision drills, and facility teams on-site.</p>
          </div>

          {/* Category Tabs */}
          <div className={styles.galleryTabs}>
            {['All', 'Security Guards', 'Housekeeping', 'Training', 'Corporate', 'Industrial', 'Events'].map((tab) => (
              <button 
                key={tab} 
                className={`${styles.tabBtn} ${activeGalleryTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveGalleryTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.galleryGrid}>
            {filteredGallery.map((item) => (
              <FadeIn key={item.id}>
                <div className={styles.galleryCard} onClick={() => setLightboxImg(item)}>
                  <Image src={item.src} alt={item.title} width={400} height={280} className={styles.galleryImg} />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.galleryCat}>{item.category}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ textCenter: 'center', textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/gallery" className="btn-outline">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. COMPREHENSIVE FAQ SECTION */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">Answers to common queries regarding guard deployment, compliance, and billing.</p>
          </div>

          <FadeIn direction="up">
            <FAQAccordion items={faqList} />
          </FadeIn>
        </div>
      </section>

      {/* 14. CONTACT US FORM SECTION */}
      <section id="contact" className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <FadeIn direction="left">
              <div className={styles.contactInfoBox}>
                <span className="section-tag" style={{ color: 'var(--gold)' }}>Get In Touch</span>
                <h3>Request a Free Quotation Today</h3>
                <p>Have questions about our security guard rates or housekeeping services? Submit your query or call our 24/7 helpline.</p>

                <div className={styles.contactDetails}>
                  <div className={styles.detailItem}>
                    <div className={styles.detailIconCircle}><Phone size={20} /></div>
                    <div>
                      <strong>24/7 Helpline & Mobile</strong>
                      <p>8459845730 / +91 87998 59129</p>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <div className={styles.detailIconCircle}><Mail size={20} /></div>
                    <div>
                      <strong>Official Email</strong>
                      <p>vmdmanagementservices@gmail.com</p>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <div className={styles.detailIconCircle}><MapPin size={20} /></div>
                    <div>
                      <strong>Pune Office Address</strong>
                      <p>123 VMD Hub, Business Lane, Pune, MH 411001</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className={styles.contactFormCard}>
                <form onSubmit={handleContactSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="hp_name">Full Name *</label>
                      <input 
                        type="text" 
                        id="hp_name" 
                        value={contactForm.name} 
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} 
                        placeholder="John Doe"
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="hp_phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="hp_phone" 
                        value={contactForm.phone} 
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} 
                        placeholder="8459845730"
                        required 
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="hp_email">Email Address *</label>
                      <input 
                        type="email" 
                        id="hp_email" 
                        value={contactForm.email} 
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} 
                        placeholder="yourname@gmail.com"
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="hp_service">Service Required</label>
                      <select 
                        id="hp_service" 
                        value={contactForm.service} 
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      >
                        <option value="Security Guards">Security Guards</option>
                        <option value="Housekeeping Services">Housekeeping Services</option>
                        <option value="Office Boys">Office Boys</option>
                        <option value="Supervisors">Supervisors</option>
                        <option value="Facility Management">Facility Management</option>
                        <option value="Industrial Security">Industrial Security</option>
                        <option value="Corporate Security">Corporate Security</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="hp_message">Message *</label>
                    <textarea 
                      id="hp_message" 
                      rows="4" 
                      value={contactForm.message} 
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                      placeholder="Specify your property location, required number of guards, or shift requirements..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Send size={18} /> Submit Quotation Request
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal 
        isOpen={!!lightboxImg} 
        image={lightboxImg} 
        onClose={() => setLightboxImg(null)} 
      />
    </div>
  );
}
