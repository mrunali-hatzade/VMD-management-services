"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Eye, ShieldCheck } from 'lucide-react';

import styles from './gallery.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import LightboxModal from '../../components/LightboxModal/LightboxModal';

const fullGallery = [
  // Security Guards
  { id: 1, title: 'Security Guards in Uniform', category: 'Security Guards', src: '/srv_security_guards_v2.jpg' },
  { id: 2, title: 'Residential Guard Patrol', category: 'Security Guards', src: '/gal_residential_guard_v2.jpg' },
  { id: 3, title: 'Front Gate Security Check', category: 'Security Guards', src: '/gal_gate_check_v2.jpg' },
  { id: 4, title: 'Housing Societies Protection', category: 'Security Guards', src: '/ind_housing_societies_v2.jpg' },

  // Housekeeping
  { id: 5, title: 'Corporate Housekeeping Staff', category: 'Housekeeping', src: '/srv_housekeeping.jpg' },
  { id: 6, title: 'Office Floor Cleaning', category: 'Housekeeping', src: '/gal_floor_cleaning.jpg' },
  { id: 7, title: 'Deep Cleaning Services', category: 'Housekeeping', src: '/gal_deep_cleaning.jpg' },

  // Corporate
  { id: 8, title: 'Office Operations Team', category: 'Corporate', src: '/srv_office_boys.jpg' },
  { id: 9, title: 'Corporate Client Sites', category: 'Corporate', src: '/client_sites.jpg' },
  { id: 10, title: 'Reception & Access Control', category: 'Corporate', src: '/gal_reception_security_v2.jpg' },
  { id: 11, title: 'Executive Support Staff', category: 'Corporate', src: '/gal_executive_staff.jpg' },

  // Industrial
  { id: 12, title: 'Industrial Facility Security', category: 'Industrial', src: '/gal_industrial_facility_v2.jpg' },
  { id: 13, title: 'Control Room Surveillance', category: 'Industrial', src: '/gal_cctv_control_room_v2.jpg' },
  { id: 14, title: 'Facility Management Maintenance', category: 'Industrial', src: '/gal_facility_maintenance.jpg' },

  // Training
  { id: 15, title: 'Guard Formation & Training Sessions', category: 'Training', src: '/training_sessions_v2.jpg' },

  // Events
  { id: 17, title: 'Event Crowd Management', category: 'Events', src: '/gal_event_crowd.jpg' },
  { id: 18, title: 'VIP Protection Supervisors', category: 'Events', src: '/gal_vip_supervisors_v2.jpg' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = ['All', 'Security Guards', 'Housekeeping', 'Training', 'Corporate', 'Industrial', 'Events'];

  const filteredItems = activeCategory === 'All' 
    ? fullGallery 
    : fullGallery.filter(item => item.category === activeCategory);

  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <FadeIn>
            <div className={styles.bannerContent}>
              <span className={styles.badge}>VISUAL EVIDENCE</span>
              <h1>VMD On-Site Media Gallery</h1>
              <p>Explore high-resolution captures of our security guarding operations, housekeeping teams, and guard training drills across Pune.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className={styles.galleryMasonry}>
            {filteredItems.map((item) => (
              <FadeIn key={item.id}>
                <div className={styles.galleryItem} onClick={() => setSelectedImg(item)}>
                  <Image src={item.src} alt={item.title} width={450} height={320} className={styles.img} />
                  <div className={styles.overlay}>
                    <Eye size={32} color="var(--gold)" />
                    <span className={styles.itemCat}>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal 
        isOpen={!!selectedImg}
        image={selectedImg}
        onClose={() => setSelectedImg(null)}
      />
    </div>
  );
}
