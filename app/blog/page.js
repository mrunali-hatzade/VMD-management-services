import Link from 'next/link';
import { Calendar, User, ChevronRight } from 'lucide-react';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog | VMD Management Services',
  description: 'Read the latest articles on security tips, society safety, fire safety, and facility management.',
}

export default function BlogPage() {
  const posts = [
    {
      id: 'security-tips-housing-societies',
      title: 'Top 10 Security Tips for Housing Societies',
      excerpt: 'Ensure the safety of your residential complex with these essential security measures and best practices.',
      date: 'Oct 15, 2023',
      author: 'VMD Security Expert',
      category: 'Society Safety'
    },
    {
      id: 'fire-safety-guidelines',
      title: 'Basic Fire Safety Guidelines Every Office Should Follow',
      excerpt: 'Fire emergencies can happen anytime. Learn how to prepare your office and staff for a fire emergency.',
      date: 'Oct 08, 2023',
      author: 'VMD Safety Team',
      category: 'Fire Safety'
    },
    {
      id: 'housekeeping-best-practices',
      title: 'Corporate Housekeeping: Best Practices for a Healthy Workspace',
      excerpt: 'A clean office is a productive office. Discover the standard operating procedures for professional housekeeping.',
      date: 'Oct 01, 2023',
      author: 'VMD Facility Manager',
      category: 'Housekeeping Tips'
    },
    {
      id: 'facility-management-trends',
      title: 'Emerging Trends in Facility Management',
      excerpt: 'How technology is reshaping the way we manage building infrastructure and security operations.',
      date: 'Sep 24, 2023',
      author: 'VMD Tech Team',
      category: 'Facility Management'
    }
  ];

  return (
    <div>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, Tips & Industry News</p>
        </div>
      </div>

      <section className="section bg-off-white">
        <div className="container">
          <div className={styles.blogGrid}>
            {posts.map((post) => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.cardContent}>
                  <div className={styles.categoryBadge}>{post.category}</div>
                  <h2 className={styles.postTitle}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <div className={styles.postMeta}>
                    <span><Calendar size={16} /> {post.date}</span>
                    <span><User size={16} /> {post.author}</span>
                  </div>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className={styles.readMore}>
                    Read Article <ChevronRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
