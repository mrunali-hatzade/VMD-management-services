import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerColumn}>
          <div style={{ marginBottom: '1.5rem', backgroundColor: 'white', display: 'inline-block', padding: '10px', borderRadius: '8px' }}>
            <Image src="/logo.png" alt="VMD Management Services Logo" width={260} height={110} style={{ objectFit: 'contain', display: 'block' }} />
          </div>
          <p className={styles.footerDescription}>
            Professional Security & Facility Management Services in Pune. Reliable solutions for Residential, Commercial and Industrial Clients.
          </p>
          <div className={styles.visionBadge}>
            Future Vision: AS Group of Companies
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Our Services</h4>
          <ul className={styles.linkList}>
            <li><Link href="/services">Security Guards</Link></li>
            <li><Link href="/services">Housekeeping</Link></li>
            <li><Link href="/services">Facility Management</Link></li>
            <li><Link href="/services">Industrial Security</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className={styles.contactIcon} />
              <span>123 VMD Hub, Business Lane, Pune, Maharashtra 411001</span>
            </li>
            <li>
              <Phone size={20} className={styles.contactIcon} />
              <span>8459845730<br/>+91 87998 59129 (WhatsApp)</span>
            </li>
            <li>
              <Mail size={20} className={styles.contactIcon} />
              <span>vmdmanagementservices@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} VMD Management Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
