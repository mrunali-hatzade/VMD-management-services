"use client";

import { useState } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';
import styles from './careers.module.css';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    experience: '0-2 years',
    position: 'Security Guard'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    setFormData({ name: '', phone: '', experience: '0-2 years', position: 'Security Guard' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const documents = [
    'Aadhaar Card',
    'PAN Card',
    'Police Verification Certificate',
    '4 Passport Size Photos',
    'Bank Passbook Copy',
    'Previous Experience Letter (if any)'
  ];

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Careers</h1>
          <p>Join as a Security Guard or Facility Staff</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Form Section */}
            <div className={styles.formSection}>
              <h2>Apply Online</h2>
              <form onSubmit={handleSubmit} className={styles.applicationForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="position">Applying For</label>
                    <select id="position" name="position" value={formData.position} onChange={handleChange}>
                      <option value="Security Guard">Security Guard</option>
                      <option value="Supervisor">Supervisor</option>
                      <option value="Housekeeping">Housekeeping Staff</option>
                      <option value="Office Boy">Office Boy</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="experience">Experience</label>
                    <select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
                      <option value="Fresher">Fresher</option>
                      <option value="0-2 years">0-2 years</option>
                      <option value="2-5 years">2-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Upload Resume / Bio-data</label>
                  <div className={styles.fileUpload}>
                    <Upload size={24} className={styles.uploadIcon} />
                    <span>Click to browse or drag and drop your file</span>
                    <input type="file" className={styles.hiddenInput} />
                  </div>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Submit Application</button>
              </form>
            </div>

            {/* Info Section */}
            <div className={styles.infoSection}>
              <h2>Required Documents</h2>
              <p className={styles.infoText}>
                Please ensure you have the following original documents and their photocopies ready when called for an interview.
              </p>
              <ul className={styles.docList}>
                {documents.map((doc, i) => (
                  <li key={i}>
                    <CheckCircle2 className={styles.checkIcon} size={20} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.contactCard}>
                <h3>Need Help?</h3>
                <p>Call our HR department directly:</p>
                <a href="tel:8459845730" className={styles.phoneLink}>8459845730</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
