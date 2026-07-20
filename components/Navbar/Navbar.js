"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo Left */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoCard}>
            <Image src="/logo without name.png" alt="VMD Management Services" width={48} height={48} style={{ objectFit: 'contain' }} priority />
            <div className={styles.logoTextContainer}>
              <span className={styles.logoTextTitle}>VMD</span>
              <span className={styles.logoTextSub}>MANAGEMENT SERVICES</span>
            </div>
          </div>
        </Link>

        {/* Navigation Center */}
        <nav className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/industries" className={styles.navLink}>Industries</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/careers" className={styles.navLink}>Careers</Link>
          <Link href="/blog" className={styles.navLink}>Blogs</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* Right Side Buttons */}
        <div className={styles.navButtons}>
          <a href="tel:8459845730" className={styles.callBtn}>
            <Phone size={16} />
            <span>Call Now</span>
          </a>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
            <FileText size={16} />
            <span>Request Quote</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuInner}>
            <Link href="/" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/industries" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Industries</Link>
            <Link href="/gallery" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/careers" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Careers</Link>
            <Link href="/blog" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Contact</Link>
            
            <div className={styles.mobileBtnGroup}>
              <a href="tel:8459845730" className={styles.mobileCallBtn}>
                <Phone size={18} /> Call Now
              </a>
              <Link href="/contact" className="btn-primary" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
