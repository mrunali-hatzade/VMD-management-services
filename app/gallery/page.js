"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Eye, ShieldCheck } from 'lucide-react';

import styles from './gallery.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import LightboxModal from '../../components/LightboxModal/LightboxModal';

const fullGallery = [
  // Security Guards
  { id: 1, title: 'Security Guards in Uniform', category: 'Security Guards', src: '/guards_in_uniform.jpg' },
  { id: 2, title: 'Residential Guard Patrol', category: 'Security Guards', src: '/srv_residential_security.jpg' },
  { id: 3, title: 'Front Gate Security Check', category: 'Security Guards', src: '/vmd_hero_guard.jpg' },
  { id: 4, title: 'Housing Societies Protection', category: 'Security Guards', src: '/ind_housing_societies.jpg' },

  // Housekeeping
  { id: 5, title: 'Corporate Housekeeping Staff', category: 'Housekeeping', src: '/housekeeping_staff.jpg' },
  { id: 6, title: 'Office Floor Cleaning', category: 'Housekeeping', src: '/hero_housekeeping.jpg' },
  { id: 7, title: 'Deep Cleaning Services', category: 'Housekeeping', src: '/vmd_hero_housekeeping.jpg' },

  // Corporate
  { id: 8, title: 'Office Operations Team', category: 'Corporate', src: '/office_team.jpg' },
  { id: 9, title: 'Corporate Client Sites', category: 'Corporate', src: '/client_sites.jpg' },
  { id: 10, title: 'Reception & Access Control', category: 'Corporate', src: '/srv_corporate_security.jpg' },
  { id: 11, title: 'Executive Support Staff', category: 'Corporate', src: '/hero_team.jpg' },

  // Industrial
  { id: 12, title: 'Industrial Facility Security', category: 'Industrial', src: '/srv_industrial_security.jpg' },
  { id: 13, title: 'Control Room Surveillance', category: 'Industrial', src: '/hero_surveillance.jpg' },
  { id: 14, title: 'Facility Management Maintenance', category: 'Industrial', src: '/srv_facility_mgmt.jpg' },

  // Training
  { id: 15, title: 'Guard Formation & Training Sessions', category: 'Training', src: '/training_sessions.jpg' },
  { id: 16, title: 'Physical Drill & Inspection', category: 'Training', src: '/vmd_hero_formation.jpg' },

  // Events
  { id: 17, title: 'Event Crowd Management', category: 'Events', src: '/weblium_hero_bg.jpg' },
  { id: 18, title: 'VIP Protection Supervisors', category: 'Events', src: '/srv_supervisors.jpg' },
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
