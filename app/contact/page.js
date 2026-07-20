"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle, AlertCircle } from 'lucide-react';
import styles from './contact.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Security Guards',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out to VMD Management Services. Our operations team will contact you within 30 minutes.');
    setFormData({ name: '', email: '', phone: '', service: 'Security Guards', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            {/* Left: Google Map Embed */}
            <FadeIn direction="right">
              <div className={styles.mapSection}>
                <h3>Our Head Office Location</h3>
                <p>Visit our Pune operations hub or reach out for on-site security audits.</p>
                
                <div className={styles.mapContainer}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906763428!2d73.72288009384784!3d18.524870612260654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VMD Office Location"
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
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@gmail.com" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="8459845730" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Required</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                      <option value="Security Guards">Security Guards</option>
                      <option value="Housekeeping Services">Housekeeping Services</option>
                      <option value="Office Boys">Office Boys</option>
                      <option value="Supervisors">Supervisors</option>
                      <option value="Facility Management">Facility Management</option>
                      <option value="Industrial Security">Industrial Security</option>
                      <option value="Corporate Security">Corporate Security</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Details about your society/office location and staffing requirements..." required></textarea>
                  </div>

                  <div className={styles.btnRow}>
                    <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                      <Send size={16} /> Submit Message
                    </button>
                    <a href="tel:8459845730" className="btn-white">
                      <Phone size={16} /> Call
                    </a>
                    <a href="https://wa.me/918799859129" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                      <MessageCircle size={16} /> WhatsApp
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
          <div className={styles.infoCardsGrid}>
            <div className={styles.infoBox}>
              <MapPin size={32} color="var(--gold)" />
              <h4>Headquarters Address</h4>
              <p>123 VMD Hub, Business Lane, Pune, Maharashtra 411001</p>
            </div>

            <div className={styles.infoBox}>
              <Clock size={32} color="var(--gold)" />
              <h4>Business Hours</h4>
              <p>Office Hours: Mon - Sat (9:00 AM - 7:00 PM)<br/>On-Site Guard Vigil: 24/7/365</p>
            </div>

            <div className={styles.infoBox}>
              <AlertCircle size={32} color="var(--gold)" />
              <h4>Emergency Contacts</h4>
              <p>24/7 Control Room: 8459845730<br/>Direct WhatsApp: +91 87998 59129</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
