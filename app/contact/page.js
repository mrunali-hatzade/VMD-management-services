"use client";

import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, AlertCircle, Building2, ExternalLink } from 'lucide-react';

import styles from './contact.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';

export default function ContactPage() {
  const [activeMapTab, setActiveMapTab] = useState('head');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Security Guards',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      /*
      // WEB3FORMS (COMMENTED OUT)
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5226c118-edc3-434d-b887-11684c32771a',
          subject: `New VMD Contact Inquiry: ${formData.name}`,
          from_name: 'VMD Management Services',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          replyto: formData.email
        })
      });
      */

      // PABBLY CONNECT TRIGGER (Server API Route)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(`Thank you, ${formData.name}! Your message has been submitted successfully.`);
      } else {
        alert('There was a problem submitting your inquiry. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Submission error. Please try again.');
    }
    
    setFormData({ name: '', email: '', phone: '', service: 'Security Guards', message: '' });
  };

  const offices = {
    head: {
      title: 'Head Office (Mundhwa)',
      address: 'Sr.No.6, Kumbhar Wada, Keshav Nagar, Mundhwa, Near Gairan Vasti, Pune - 411036',
      mapUrl: 'https://maps.google.com/maps?q=Sr.No.6,+Kumbhar+Wada,+Keshav+Nagar,+Mundhwa,+Near+Gairan+Vasti,+Pune+411036&t=&z=15&ie=UTF8&iwloc=&output=embed',
      directLink: 'https://maps.google.com/?q=Sr.No.6,+Kumbhar+Wada,+Keshav+Nagar,+Mundhwa,+Near+Gairan+Vasti,+Pune+411036'
    },
    branch: {
      title: 'Branch Office (Sadashiv Peth)',
      address: 'Alka Talkies, Lal Bahadur Shastri Rd, Joshi Wada, Sadashiv Peth, Pune, Maharashtra 411030',
      mapUrl: 'https://maps.google.com/maps?q=Alka+Talkies,+Lal+Bahadur+Shastri+Rd,+Joshi+Wada,+Sadashiv+Peth,+Pune,+Maharashtra+411030&t=&z=15&ie=UTF8&iwloc=&output=embed',
      directLink: 'https://maps.google.com/?q=Alka+Talkies,+Lal+Bahadur+Shastri+Rd,+Joshi+Wada,+Sadashiv+Peth,+Pune,+Maharashtra+411030'
    }
  };

  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <FadeIn>
            <div className={styles.bannerContent}>
              <span className={styles.badge}>24/7 HELPLINE & SUPPORT</span>
              <h1>Contact VMD Management Services</h1>
              <p>We are available 24 hours a day, 7 days a week to handle security queries, emergency staffing, and site quotations.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="section">
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Left: Google Map Embed & Office Selector */}
            <FadeIn direction="right">
              <div className={styles.mapSection}>
                <h3>Our Office Locations</h3>
                <p>Select an office location below to view on Google Maps or get instant directions.</p>
                
                {/* Office Map Switcher Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <button 
                    type="button" 
                    onClick={() => setActiveMapTab('head')}
                    style={{
                      flex: 1,
                      padding: '0.6rem 0.85rem',
                      borderRadius: 'var(--border-radius)',
                      border: activeMapTab === 'head' ? '1px solid var(--gold)' : '1px solid rgba(255,255,255,0.2)',
                      background: activeMapTab === 'head' ? 'var(--gold)' : 'rgba(255,255,255,0.1)',
                      color: activeMapTab === 'head' ? 'var(--navy)' : 'var(--white)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    📍 Head Office
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveMapTab('branch')}
                    style={{
                      flex: 1,
                      padding: '0.6rem 0.85rem',
                      borderRadius: 'var(--border-radius)',
                      border: activeMapTab === 'branch' ? '1px solid var(--gold)' : '1px solid rgba(255,255,255,0.2)',
                      background: activeMapTab === 'branch' ? 'var(--gold)' : 'rgba(255,255,255,0.1)',
                      color: activeMapTab === 'branch' ? 'var(--navy)' : 'var(--white)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    📍 Branch Office
                  </button>
                </div>

                {/* Selected Address Brief */}
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.85rem 1rem', borderRadius: 'var(--border-radius)', marginBottom: '1rem', borderLeft: '3px solid var(--gold)' }}>
                  <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '0.9rem' }}>{offices[activeMapTab].title}</strong>
                  <p style={{ margin: '0.25rem 0 0.5rem', fontSize: '0.85rem', color: '#E2E8F0', lineHeight: 1.4 }}>{offices[activeMapTab].address}</p>
                  <a 
                    href={offices[activeMapTab].directLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}
                  >
                    Open in Google Maps <ExternalLink size={12} />
                  </a>
                </div>

                {/* Map iFrame */}
                <div className={styles.mapContainer}>
                  <iframe 
                    key={activeMapTab}
                    src={offices[activeMapTab].mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={offices[activeMapTab].title}
                  ></iframe>
                </div>
              </div>
            </FadeIn>

            {/* Right: Contact Form */}
            <FadeIn direction="left">
              <div className={styles.formSection}>
                <h3>Send Us a Message</h3>
                <p>Fill out the form below to receive a free site inspection & customized rate proposal.</p>

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Required *</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                      <option value="Security Guards">Security Guards</option>
                      <option value="Housekeeping Services">Housekeeping Services</option>
                      <option value="Office Boys">Office Boys</option>
                      <option value="Supervisors">Supervisors & Patrol</option>
                      <option value="Facility Management">Facility Management</option>
                      <option value="Industrial Security">Industrial Security</option>
                      <option value="Residential Security">Residential Security</option>
                      <option value="Corporate Security">Corporate Security</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Requirement Details *</label>
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                  </div>

                  <div className={styles.btnRow}>
                    <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                      <Send size={16} /> Submit Message
                    </button>
                    <a href="tel:8799859129" className="btn-white">
                      <Phone size={16} /> Call
                    </a>
                    <a href="https://wa.me/919503996692?text=Hi%20VMD%20Management%20Services,%20I%20am%20interested%20in%20your%20security%20and%20facility%20services." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                      <WhatsAppIcon size={16} color="#FFFFFF" /> WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Info Bar Below */}
      <section className="section bg-off-white">
        <div className="container">
          <div className={styles.infoCardsGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className={styles.infoBox}>
              <Building2 size={32} color="var(--gold)" />
              <h4>Head Office</h4>
              <p>Sr.No.6, Kumbhar Wada, Keshav Nagar, Mundhwa, Near Gairan Vasti, Pune - 411036</p>
              <a 
                href="https://maps.google.com/?q=Sr.No.6,+Kumbhar+Wada,+Keshav+Nagar,+Mundhwa,+Near+Gairan+Vasti,+Pune+411036" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', textDecoration: 'none' }}
              >
                View Map <ExternalLink size={14} />
              </a>
            </div>

            <div className={styles.infoBox}>
              <MapPin size={32} color="var(--gold)" />
              <h4>Branch Office</h4>
              <p>Alka Talkies, Lal Bahadur Shastri Rd, Joshi Wada, Sadashiv Peth, Pune, MH 411030</p>
              <a 
                href="https://maps.google.com/?q=Alka+Talkies,+Lal+Bahadur+Shastri+Rd,+Joshi+Wada,+Sadashiv+Peth,+Pune,+Maharashtra+411030" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', textDecoration: 'none' }}
              >
                View Map <ExternalLink size={14} />
              </a>
            </div>

            <div className={styles.infoBox}>
              <AlertCircle size={32} color="var(--gold)" />
              <h4>Emergency Contact</h4>
              <p>Contact: +91 87998 59129<br/>WhatsApp: +91 95039 96692</p>
              <a 
                href="tel:8799859129" 
                style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', textDecoration: 'none' }}
              >
                Call Operations <Phone size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
