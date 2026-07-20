"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Eye, ShieldCheck } from 'lucide-react';

import styles from './gallery.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';
import LightboxModal from '../../components/LightboxModal/LightboxModal';

const fullGallery = [
  { id: 1, title: 'Security Guard Patrol Drill', category: 'Security Guards', src: '/hero_team.jpg' },
  { id: 2, title: 'Corporate Floor Housekeeping', category: 'Housekeeping', src: '/hero_housekeeping.jpg' },
  { id: 3, title: 'Industrial Control Room Surveillance', category: 'Industrial', src: '/hero_surveillance.jpg' },
  { id: 4, title: 'Guard Formation & Uniform Inspection', category: 'Training', src: '/vmd_hero_formation.jpg' },
  { id: 5, title: 'Residential Gated Protection', category: 'Corporate', src: '/vmd_hero_guard.jpg' },
  { id: 6, title: 'Special VIP Event Guarding', category: 'Events', src: '/weblium_hero_bg.jpg' },
  { id: 7, title: 'Fire Extinguisher Training Drill', category: 'Training', src: '/vmd_hero_housekeeping.jpg' },
  { id: 8, title: 'Commercial Office Access Control', category: 'Corporate', src: '/hero_team.jpg' },
  { id: 9, title: 'Warehouse Material Audit Guarding', category: 'Industrial', src: '/hero_surveillance.jpg' },
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
