"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
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
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="VMD Management Services" width={220} height={70} style={{ objectFit: 'contain', backgroundColor: 'white', padding: '4px', borderRadius: '4px' }} priority />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/industries" className={styles.navLink}>Industries</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuInner}>
            <Link href="/" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/industries" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Industries</Link>
            <Link href="/gallery" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Contact</Link>
            <a href="tel:8459845730" className={styles.mobileCallBtn}>
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
