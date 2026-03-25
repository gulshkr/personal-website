import type { Metadata } from 'next';
import NewsCard from '../_components/NewsCard';
import CubesBackground from '../_components/CubesBackground';
import { newsItems } from '../_lib/news';

export const metadata: Metadata = {
  title: 'Tech News — Gulshan Kumar',
  description: 'Curated DevOps and cloud technology news — Kubernetes, AWS, CI/CD, containers, and more.',
};

export default function NewsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Header */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 24px 60px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 60%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <CubesBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '620px', margin: '0 auto' }}>
          <p className="section-label">Stay Updated</p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Tech <span style={{
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>News</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
            Curated updates from the DevOps and cloud ecosystem — Kubernetes, AWS,
            GitOps, observability, and everything in between.
          </p>
        </div>
      </section>

      {/* News grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
