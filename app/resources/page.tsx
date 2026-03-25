import type { Metadata } from 'next';
import ResourceCard from '../_components/ResourceCard';
import CubesBackground from '../_components/CubesBackground';
import { resources } from '../_lib/resources';

export const metadata: Metadata = {
  title: 'Resources — Gulshan Kumar',
  description: 'Curated DevOps and cloud learning resources — books, courses, docs, tools, and cheatsheets.',
};

const categories = Array.from(new Set(resources.map((r) => r.category)));

export default function ResourcesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Header */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 24px 60px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 60%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <CubesBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '620px', margin: '0 auto' }}>
          <p className="section-label">Learning Hub</p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Study{' '}
            <span className="gradient-text-purple">Resources</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7 }}>
            The books, courses, docs, and cheatsheets I recommend for every DevOps engineer —
            from beginner fundamentals to advanced SRE practices.
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: `${resources.length}`, label: 'Curated Resources' },
            { value: `${categories.length}`, label: 'Categories' },
            { value: '3', label: 'Skill Levels' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="gradient-text-purple" style={{ fontSize: '1.8rem', fontWeight: 800 }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </div>
  );
}
