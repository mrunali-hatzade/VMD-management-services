import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Column 1: Brand & Overview */}
        <div className={styles.footerColumn}>
          <div className={styles.logoCard}>
            <Image src="/vmd_logo_kh.jpg" alt="VMD Management Services Logo" width={150} height={45} style={{ objectFit: 'contain', width: 'auto', height: '45px' }} />
          </div>
          
          <p className={styles.footerDescription}>
            VMD Management Services is a premier security and facility management agency headquartered in Pune, providing elite security personnel, housekeeping, and commercial facility solutions.
          </p>

          <div className={styles.trustBadgeInline}>
            <ShieldCheck size={18} color="var(--gold)" />
            <span>ISO 9001:2015 Certified Agency</span>
          </div>

          <div className={styles.socialWrapper}>
            <h5 className={styles.socialHeading}>Connect With Us</h5>
            <div className={styles.socialLinks}>
              <div className={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>vmdmanagementservices</span>
              </div>
              <div className={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span>vmdmanagementservices</span>
              </div>
              <div className={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <span>vmdmanagementservices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/"><ArrowRight size={14} /> Home</Link></li>
            <li><Link href="/about"><ArrowRight size={14} /> About Us</Link></li>
            <li><Link href="/services"><ArrowRight size={14} /> Our Services</Link></li>
            <li><Link href="/industries"><ArrowRight size={14} /> Industries Served</Link></li>
            <li><Link href="/gallery"><ArrowRight size={14} /> Media Gallery</Link></li>
            <li><Link href="/careers"><ArrowRight size={14} /> Careers</Link></li>
            <li><Link href="/blog"><ArrowRight size={14} /> Latest Blogs</Link></li>
            <li><Link href="/contact"><ArrowRight size={14} /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Services & Industries */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Core Services</h4>
          <ul className={styles.linkList}>
            <li><Link href="/services/security-guards"><ArrowRight size={14} /> Security Guards</Link></li>
            <li><Link href="/services/housekeeping-services"><ArrowRight size={14} /> Housekeeping</Link></li>
            <li><Link href="/services/office-boys"><ArrowRight size={14} /> Office Boys</Link></li>
            <li><Link href="/services/supervisors"><ArrowRight size={14} /> Supervisors</Link></li>
            <li><Link href="/services/facility-management"><ArrowRight size={14} /> Facility Management</Link></li>
            <li><Link href="/services/industrial-security"><ArrowRight size={14} /> Industrial Security</Link></li>
            <li><Link href="/services/corporate-security"><ArrowRight size={14} /> Corporate Security</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Our Office Locations</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className={styles.contactIcon} style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.85rem' }}>Head Office:</strong>
                <a 
                  href="https://maps.google.com/?q=Alka+Talkies,+Lal+Bahadur+Shastri+Rd,+Joshi+Wada,+Sadashiv+Peth,+Pune,+Maharashtra+411030" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Alka Talkies, Lal Bahadur Shastri Rd, Joshi Wada, Sadashiv Peth, Pune, MH 411030
                </a>
              </div>
            </li>
            <li>
              <MapPin size={20} className={styles.contactIcon} style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.85rem' }}>Branch Office:</strong>
                <a 
                  href="https://maps.google.com/?q=Sr.No.6,+Kumbhar+Wada,+Keshav+Nagar,+Mundhwa,+Near+Gairan+Vasti,+Pune+411036" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Sr.No.6, Kumbhar Wada, Keshav Nagar, Mundhwa, Near Gairan Vasti, Pune - 411036
                </a>
              </div>
            </li>
            <li>
              <Phone size={20} className={styles.contactIcon} style={{ flexShrink: 0 }} />
              <span>
                24x7 Contact: <a href="tel:8459845730" style={{ color: 'inherit', textDecoration: 'none' }}>8459845730</a><br/>
                WhatsApp: <a href="https://wa.me/919767355347" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 97673 55347</a>
              </span>
            </li>
            <li>
              <Mail size={20} className={styles.contactIcon} style={{ flexShrink: 0 }} />
              <a href="mailto:vmdmanagementservices@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                vmdmanagementservices@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {new Date().getFullYear()} VMD Management Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
