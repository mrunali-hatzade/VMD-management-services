"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, FileText, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll spy for homepage sections
      if (pathname === '/') {
        const sections = ['about', 'services', 'industries', 'testimonials', 'gallery', 'contact'];
        const scrollPosition = window.scrollY + 200;

        let current = 'home';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              current = section;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isLinkActive = (item) => {
    // On the homepage, use scroll spy to highlight section-based items
    if (pathname === '/') {
      if (item.section) {
        return activeSection === item.section;
      }
      return false;
    }
    // On other pages, match by pathname
    if (item.path === '/') {
      return false; // Don't highlight Home on sub-pages
    }
    if (pathname === item.path || pathname.startsWith(item.path + '/')) {
      return true;
    }
    return false;
  };

  const handleHomeClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', href: '/', path: '/', section: 'home' },
    { label: 'About', href: '/about', path: '/about', section: 'about' },
    { label: 'Services', href: '/services', path: '/services', section: 'services' },
    { label: 'Industries', href: '/industries', path: '/industries', section: 'industries' },
    { label: 'Testimonials', href: '/#testimonials', path: '/#testimonials', section: 'testimonials' },
    { label: 'Gallery', href: '/gallery', path: '/gallery', section: 'gallery' },
    { label: 'Careers', href: '/careers', path: '/careers', section: 'careers' },
    { label: 'Blogs', href: '/blog', path: '/blog', section: 'blog' },
    { label: 'Contact', href: '/contact', path: '/contact', section: 'contact' },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      {/* Top Bar (Contact Info) */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topBarLeft}>
            <a href="tel:+918799859129" className={styles.topBarItem}>
              <Phone size={14} /> +91 87998 59129
            </a>
            <a href="mailto:vmdmanagementservices@gmail.com" className={styles.topBarItem}>
              <Mail size={14} /> vmdmanagementservices@gmail.com
            </a>
          </div>
          <div className={styles.topBarRight}>
            <a href="https://maps.google.com/?q=Alka+Talkies,+Lal+Bahadur+Shastri+Rd,+Joshi+Wada,+Sadashiv+Peth,+Pune,+Maharashtra+411030" target="_blank" rel="noopener noreferrer" className={styles.topBarItem}>
              <MapPin size={14} /> Sadashiv Peth
            </a>
            <span style={{ opacity: 0.4 }}>|</span>
            <a href="https://maps.google.com/?q=Sr.No.6,+Kumbhar+Wada,+Keshav+Nagar,+Mundhwa,+Near+Gairan+Vasti,+Pune+411036" target="_blank" rel="noopener noreferrer" className={styles.topBarItem}>
              <MapPin size={14} /> Mundhwa
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.navContainer}`}>
        {/* Logo Left */}
        <Link href="/" className={styles.logo} onClick={handleHomeClick}>
          <div className={styles.logoCard}>
            <Image src="/logo-transparent.png" alt="VMD Management Services" width={160} height={50} className={styles.logoImg} style={{ objectFit: 'contain', width: 'auto', height: '50px' }} priority />
          </div>
        </Link>

        {/* Navigation Center */}
        <nav className={styles.desktopMenu}>
          {navItems.map((item) => {
            const active = isLinkActive(item);
            return (
              <Link 
                key={item.label} 
                href={item.href} 
                className={`${styles.navLink} ${active ? styles.activeNavLink : ''}`}
                onClick={item.href === '/' ? handleHomeClick : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Buttons */}
        <div className={styles.navButtons}>
          <a href="tel:8799859129" className={styles.callBtn}>
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
            {navItems.map((item) => {
              const active = isLinkActive(item);
              return (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={`${styles.mobileNavLink} ${active ? styles.activeMobileNavLink : ''}`} 
                  onClick={(e) => {
                    if (item.href === '/') {
                      handleHomeClick(e);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            
            <div className={styles.mobileBtnGroup}>
              <a href="tel:8799859129" className={styles.mobileCallBtn}>
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
