import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Column 1: Brand & Overview */}
        <div className={styles.footerColumn}>
          <div className={styles.logoCard}>
            <Image src="/logo without name.png" alt="VMD Management Services Logo" width={45} height={45} style={{ objectFit: 'contain' }} />
            <div className={styles.logoTextContainer}>
              <span className={styles.logoTextTitle}>VMD</span>
              <span className={styles.logoTextSub}>MANAGEMENT SERVICES</span>
            </div>
          </div>
          
          <p className={styles.footerDescription}>
            VMD Management Services is a premier security and facility management agency headquartered in Pune, providing elite security personnel, housekeeping, and commercial facility solutions.
          </p>

          <div className={styles.trustBadgeInline}>
            <ShieldCheck size={18} color="var(--gold)" />
            <span>ISO 9001:2015 Certified Agency</span>
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
          <h4 className={styles.columnTitle}>Headquarters</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className={styles.contactIcon} />
              <span>123 VMD Hub, Business Lane, Pune, Maharashtra 411001</span>
            </li>
            <li>
              <Phone size={20} className={styles.contactIcon} />
              <span>
                24x7 Helpline: 8459845730<br/>
                WhatsApp: +91 87998 59129
              </span>
            </li>
            <li>
              <Mail size={20} className={styles.contactIcon} />
              <span>vmdmanagementservices@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {new Date().getFullYear()} VMD Management Services. All Rights Reserved.</p>
          <p className={styles.creditText}>
            Designed with <Heart size={14} fill="var(--gold)" color="var(--gold)" /> by <strong>Simplified Works</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
