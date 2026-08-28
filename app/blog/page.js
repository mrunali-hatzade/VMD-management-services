"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';

import styles from './blog.module.css';
import FadeIn from '../../components/FadeIn/FadeIn';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Security Protocols Every Housing Society Chairman Must Implement',
    category: 'Residential Safety',
    date: 'July 15, 2026',
    readTime: '5 min read',
    author: 'VMD Security Desk',
    excerpt: 'Discover essential access control measures, CCTV surveillance practices, and visitor logging rules to safeguard residential complexes.',
    img: '/v2/gal_residential_guard_v2.jpg'
  },
  {
    id: 2,
    title: 'Fire Safety Readiness: Emergency Evacuation Drills for Corporate IT Parks',
    category: 'Fire Safety',
    date: 'July 10, 2026',
    readTime: '6 min read',
    author: 'Safety Audit Team',
    excerpt: 'How regular fire extinguisher inspections and evacuation mock drills reduce risk and protect corporate employees.',
    img: '/v2/gal_cctv_control_room_v2.jpg'
  },
  {
    id: 3,
    title: 'Why Police Verification of Guarding Staff Is Mandatory for Commercial Plants',
    category: 'Security Tips',
    date: 'June 28, 2026',
    readTime: '4 min read',
    author: 'Legal & HR Cell',
    excerpt: 'Understanding the legal importance and peace of mind behind mandatory local police station character checks.',
    img: '/v2/gal_gate_check_v2.jpg'
  },
  {
    id: 4,
    title: 'Best Practices in Office Housekeeping & Eco-Friendly Sanitation',
    category: 'Housekeeping',
    date: 'June 20, 2026',
    readTime: '5 min read',
    author: 'Facility Management Desk',
    excerpt: 'Maintaining high hygiene standards in high-traffic corporate washrooms and open-plan workstations.',
    img: '/v2/gal_floor_cleaning_v2.jpg'
  },
  {
    id: 5,
    title: 'Preventing Inventory Theft & Raw Material Leakage at Factory Gates',
    category: 'Industrial Security',
    date: 'June 12, 2026',
    readTime: '7 min read',
    author: 'Industrial Operations',
    excerpt: 'Effective weighbridge logging, truck driver frisking, and gate pass audit protocols for manufacturing units.',
    img: '/v2/gal_industrial_facility_v2.jpg'
  },
  {
    id: 6,
    title: 'Integrated Facility Management vs Disjointed Staffing Contracts',
    category: 'Facility Management',
    date: 'June 04, 2026',
    readTime: '5 min read',
    author: 'Operations Director',
    excerpt: 'Why bundling security guarding, MEP maintenance, and housekeeping under one SLA reduces cost by 20%.',
    img: '/v2/srv_facility_mgmt_v4.png'
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Security Tips', 'Fire Safety', 'Housekeeping', 'Facility Management', 'Residential Safety', 'Industrial Security'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <FadeIn>
            <div className={styles.bannerContent}>
              <span className={styles.badge}>EXPERT KNOWLEDGE HUB</span>
              <h1>VMD Security & Facility Insights</h1>
              <p>Articles, compliance guides, and safety protocols for property managers, factory heads, and society board members.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Catalog */}
      <section className="section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className={styles.categoryFilter}>
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`${styles.catBtn} ${activeCategory === cat ? styles.activeCat : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className={styles.blogGrid}>
            {filteredPosts.map((post) => (
              <FadeIn key={post.id}>
                <article className={styles.blogCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image src={post.img} alt={post.title} width={400} height={250} className={styles.cardImg} />
                    <span className={styles.catBadge}>{post.category}</span>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.metaRow}>
                      <span><User size={14} /> {post.author}</span>
                      <span><Clock size={14} /> {post.readTime}</span>
                    </div>

                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.excerpt}>{post.excerpt}</p>

                    <Link href={`/blog/${post.id}`} className={styles.readMoreBtn}>
                      Read Full Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
