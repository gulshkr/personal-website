import type { Metadata } from 'next';
import BlogCard from '../_components/BlogCard';
import RingsBackground from '../_components/RingsBackground';
import { getAllPosts } from '../_lib/posts';

export const metadata: Metadata = {
  title: 'Blog — Gulshan Kumar',
  description: 'DevOps engineering blog covering AWS, Kubernetes, CI/CD, security, and cloud infrastructure best practices.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Header */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 24px 60px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 60%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <RingsBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '620px', margin: '0 auto' }}>
          <p className="section-label">Articles</p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            The <span className="gradient-text">DevOps</span> Blog
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
            Real-world write-ups on CI/CD pipelines, Kubernetes, AWS infrastructure,
            monitoring, DevSecOps, and lessons learned from production.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
