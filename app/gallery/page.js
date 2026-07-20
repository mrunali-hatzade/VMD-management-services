import Image from 'next/image';
import styles from './gallery.module.css';

export const metadata = {
  title: 'Gallery | VMD Management Services',
  description: 'View our team, training sessions, and client sites.',
}

export default function GalleryPage() {
  const images = [
    { category: 'Guards', src: 'https://placehold.co/600x400/0A1F3F/FFFFFF?text=Security+Guards' },
    { category: 'Housekeeping', src: 'https://placehold.co/600x600/0A1F3F/FFFFFF?text=Housekeeping+Staff' },
    { category: 'Office Team', src: 'https://placehold.co/800x600/0A1F3F/FFFFFF?text=Office+Team' },
    { category: 'Training', src: 'https://placehold.co/600x800/0A1F3F/FFFFFF?text=Training+Session' },
    { category: 'Client Sites', src: 'https://placehold.co/800x400/0A1F3F/FFFFFF?text=Client+Site+1' },
    { category: 'Guards', src: 'https://placehold.co/600x600/0A1F3F/FFFFFF?text=Uniformed+Personnel' },
  ];

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Our Gallery</h1>
          <p>A Glimpse into Our Operations</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.filterBar}>
            <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
            <button className={styles.filterBtn}>Guards</button>
            <button className={styles.filterBtn}>Housekeeping</button>
            <button className={styles.filterBtn}>Office Team</button>
            <button className={styles.filterBtn}>Training</button>
          </div>

          <div className={styles.masonryGrid}>
            {images.map((img, i) => (
              <div key={i} className={styles.masonryItem}>
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.category} className={styles.image} />
                  <div className={styles.overlay}>
                    <span>{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
