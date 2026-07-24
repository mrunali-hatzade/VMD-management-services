"use client";

import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon';
import { useState } from 'react';
import { 
  Users, Award, ShieldCheck, CheckCircle2, FileCheck, Upload, 
  Send, Phone, Building2, Check
} from 'lucide-react';

import styles from './careers.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    experience: '1-3 Years',
    position: 'Security Guard',
    address: '',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Thank you for applying to VMD Management Services! Your application details have been submitted directly to VMD HR. No further action is required.');
      } else {
        alert('There was a problem submitting your application. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Submission error. Please try again.');
    }
    
    setFormData({ fullName: '', phone: '', email: '', experience: '1-3 Years', position: 'Security Guard', address: '', notes: '' });
  };

  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <FadeIn>
            <div className={styles.bannerContent}>
              <span className={styles.badge}>EXCELLENT GROWTH & SALARY</span>
              <h1>Join Our Security & Facility Team</h1>
              <p>Build a rewarding corporate career with Pune's premier security and facility management agency.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Join as Security Guard Feature Section */}
      <section className={`section ${styles.guardJoinSection}`}>
        <div className="container">
          <FadeIn>
            <div className={styles.guardJoinCard}>
              <div className={styles.guardJoinHeader}>
                <div className={styles.guardBadge}>
                  <ShieldCheck size={20} color="var(--gold)" /> Immediate Openings
                </div>
                <h2>Join as Security Guard in Pune</h2>
                <p>We are actively recruiting physically fit, disciplined, and police-verified Security Guards & Supervisors for immediate site deployment across Pune, Chinchwad, and Hadapsar.</p>
              </div>

              <div className={styles.guardHighlightGrid}>
                <div className={styles.guardHighlightItem}>
                  <CheckCircle2 size={24} color="var(--gold)" />
                  <div>
                    <strong>Monthly Salary: ₹15,000 - ₹25,000</strong>
                    <p>On-time bank payment + Overtime (OT) benefits.</p>
                  </div>
                </div>
                <div className={styles.guardHighlightItem}>
                  <CheckCircle2 size={24} color="var(--gold)" />
                  <div>
                    <strong>8-Hour & 12-Hour Duty Shifts</strong>
                    <p>Day & Night shifts available in IT Parks & Societies.</p>
                  </div>
                </div>
                <div className={styles.guardHighlightItem}>
                  <CheckCircle2 size={24} color="var(--gold)" />
                  <div>
                    <strong>Free Uniform & Accommodation Support</strong>
                    <p>Complete uniform kit & hostel facility assistance.</p>
                  </div>
                </div>
                <div className={styles.guardHighlightItem}>
                  <CheckCircle2 size={24} color="var(--gold)" />
                  <div>
                    <strong>Spot Joining & EPF/ESI Medical</strong>
                    <p>Immediate joining upon document & police verification.</p>
                  </div>
                </div>
              </div>

              <div className={styles.guardCtaRow}>
                <a href="tel:8459845730" className="btn-primary">
                  <Phone size={18} /> Call Recruitment HR: 8459845730
                </a>
                <a href="https://wa.me/919767355347?text=Hi%2C%20I%20want%20to%20join%20as%20Security%20Guard" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <WhatsAppIcon size={18} color="#FFFFFF" /> Apply via WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits & Training */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Work With VMD</span>
            <h2 className="section-title">Career Benefits & Staff Welfare</h2>
            <p className="section-desc">We value our workforce with timely salaries, EPF, ESIC insurance, accommodation support, and rapid promotion paths.</p>
          </div>

          <div className={styles.benefitsGrid}>
            <FadeIn delay={0.1}>
              <div className={styles.benefitCard}>
                <Award size={36} color="var(--gold)" />
                <h3>On-Time Monthly Salary</h3>
                <p>Guaranteed bank transfer on or before 10th of every month without delays.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className={styles.benefitCard}>
                <ShieldCheck size={36} color="var(--gold)" />
                <h3>PF & ESIC Medical Benefits</h3>
                <p>Full ESI medical coverage for you and your family plus Provident Fund savings.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className={styles.benefitCard}>
                <Users size={36} color="var(--gold)" />
                <h3>Professional Training</h3>
                <p>Free physical drill, fire safety, access control, and etiquette training sessions.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className={styles.benefitCard}>
                <Building2 size={36} color="var(--gold)" />
                <h3>Career Advancement</h3>
                <p>Clear promotion pathways from Security Guard → Head Guard → Field Supervisor → Operations Manager.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Application Form & Documents Checklist Section */}
      <section className="section bg-off-white">
        <div className="container">
          <div className={styles.applicationGrid}>
            {/* Required Documents checklist */}
            <FadeIn direction="right">
              <div className={styles.docBox}>
                <span className="section-tag" style={{ color: 'var(--gold)' }}>Requirement Checklist</span>
                <h3>Mandatory Documents for Joining</h3>
                <p>Please bring original and xerox copies of the following documents during your walk-in interview:</p>

                <div className={styles.docList}>
                  <div className={styles.docItem}>
                    <CheckCircle2 size={22} color="var(--gold)" />
                    <div>
                      <strong>Aadhaar Card</strong>
                      <p>Valid UIDAI card with correct date of birth.</p>
                    </div>
                  </div>

                  <div className={styles.docItem}>
                    <CheckCircle2 size={22} color="var(--gold)" />
                    <div>
                      <strong>PAN Card</strong>
                      <p>For EPF account creation and tax filing.</p>
                    </div>
                  </div>

                  <div className={styles.docItem}>
                    <CheckCircle2 size={22} color="var(--gold)" />
                    <div>
                      <strong>Police Verification Certificate</strong>
                      <p>Character certificate from your local police station.</p>
                    </div>
                  </div>

                  <div className={styles.docItem}>
                    <CheckCircle2 size={22} color="var(--gold)" />
                    <div>
                      <strong>Updated Resume & Educational Marksheet</strong>
                      <p>10th / 12th pass certificate for supervisor roles.</p>
                    </div>
                  </div>

                  <div className={styles.docItem}>
                    <CheckCircle2 size={22} color="var(--gold)" />
                    <div>
                      <strong>4 Passport Size Photographs</strong>
                      <p>In clean background for ID card & EPF files.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.hrCallBox}>
                  <Phone size={20} color="var(--gold)" />
                  <div>
                    <strong>HR Recruitment Helpline</strong>
                    <p>Call 8459845730 for direct walk-in details.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Application Form */}
            <FadeIn direction="left">
              <div className={styles.formCard}>
                <h3>Submit Your Application</h3>
                <p>Fill out the form below and our HR recruitment manager will contact you for an interview.</p>

                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar" 
                      required 
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Mobile Number" 
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Optional" 
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="position">Position Applied For *</label>
                      <select 
                        id="position"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      >
                        <option value="Security Guard">Security Guard</option>
                        <option value="Housekeeping Staff">Housekeeping Staff</option>
                        <option value="Office Boy">Office Boy</option>
                        <option value="Field Supervisor">Field Supervisor</option>
                        <option value="Facility Manager">Facility Manager</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="experience">Prior Experience</label>
                      <select 
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      >
                        <option value="Freshers">Fresher</option>
                        <option value="1-3 Years">1 - 3 Years</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="address">Current City / Location in Pune *</label>
                    <input 
                      type="text" 
                      id="address" 
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Hadapsar, Kothrud, Chinchwad" 
                      required 
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    <Send size={18} /> Submit Candidate Profile
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
