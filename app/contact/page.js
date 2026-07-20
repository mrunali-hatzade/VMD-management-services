"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import styles from './contact.module.css';

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
    alert('Thank you for contacting us. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: 'Security Guards', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We are here to help you</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Form Side */}
            <div className={styles.formSection}>
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="Security Guards">Security Guards</option>
                    <option value="Housekeeping">Housekeeping Services</option>
                    <option value="Facility Management">Facility Management</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className={styles.infoSection}>
              <h2>Contact Information</h2>
              <p className={styles.infoText}>
                Reach out to us for any queries, quotations, or customized security solutions. Our team is available 24/7.
              </p>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}><MapPin size={24} /></div>
                  <div>
                    <h4>Our Office</h4>
                    <p>123 VMD Hub, Business Lane, Pune, Maharashtra 411001</p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}><Phone size={24} /></div>
                  <div>
                    <h4>Phone & WhatsApp</h4>
                    <p>Mobile: 8459845730<br/>WhatsApp: +91 87998 59129</p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}><Mail size={24} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>vmdmanagementservices@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapContainer}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906763428!2d73.72288009384784!3d18.524870612260654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
