import ThreeBackground from './_components/ThreeBackground';
import BlogCard from './_components/BlogCard';
import Link from 'next/link';
import { getAllPosts } from './_lib/posts';

const stats = [
  { value: '2+',    label: 'Years Experience' },
  { value: '99.9%', label: 'Uptime Maintained' },
  { value: '50%',   label: 'CI/CD Runtime Cut' },
  { value: '20%',   label: 'Cloud Cost Savings' },
];

const skills = [
  { icon: '☁️', name: 'AWS' },
  { icon: '⎈',  name: 'Kubernetes' },
  { icon: '🐳', name: 'Docker' },
  { icon: '⚙️', name: 'GitHub Actions' },
  { icon: '📦', name: 'Terraform' },
  { icon: '📊', name: 'Prometheus' },
  { icon: '🔍', name: 'Grafana' },
  { icon: '🔒', name: 'DevSecOps' },
];

export default function HomePage() {
  const featuredPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'var(--bg-base)',
        }}
      >
        <ThreeBackground />
        {/* Radial glows */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 50% -10%, rgba(59,130,246,0.18) 0%, transparent 60%), radial-gradient(ellipse at 85% 80%, rgba(139,92,246,0.12) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '860px',
          }}
        >
          {/* Availability badge */}
          <div className="fade-in-up" style={{ marginBottom: '28px' }}>
            <span
              className="badge badge-green"
              style={{ fontSize: '0.8rem', padding: '6px 16px' }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10b981',
                  display: 'inline-block',
                  marginRight: '6px',
                  boxShadow: '0 0 8px #10b981',
                }}
              />
              Open to opportunities
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="fade-in-up-delay-1"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Gulshan Kumar
            <br />
            <span className="gradient-text">DevOps Engineer</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="fade-in-up-delay-2"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            Building resilient cloud infrastructure on AWS · Zero-downtime deployments ·{' '}
            <span style={{ color: '#60a5fa' }}>2+ years</span> shipping production-grade
            DevOps at Onsurity Technologies.
          </p>

          {/* CTA buttons */}
          <div
            className="fade-in-up-delay-3"
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/blog" className="btn-primary">
              📝 Read Blog
            </Link>
            <Link href="/about" className="btn-secondary">
              👤 View Resume
            </Link>
            <a
              href="https://github.com/gulshkr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              ⌥ GitHub
            </a>
          </div>

          {/* Stats */}
          <div
            className="fade-in-up-delay-3"
            style={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '56px',
            }}
          >
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div
                  className="gradient-text"
                  style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '4px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{ fontSize: '0.72rem', color: '#334155', letterSpacing: '0.1em' }}>
            SCROLL
          </span>
          <div
            className="float"
            style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, #3b82f6, transparent)' }}
          />
        </div>
      </section>

      {/* ── Skills strip ──────────────────────────────────────────── */}
      <section
        style={{
          padding: '40px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(13,21,38,0.5)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {skills.map((s) => (
            <div
              key={s.name}
              className="glass"
              style={{
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '50px',
                fontSize: '0.88rem',
                color: '#94a3b8',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{s.icon}</span>
              {s.name}
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Blog Posts ────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p className="section-label">From the Blog</p>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
            }}
          >
            Latest{' '}
            <span className="gradient-text-purple">Articles</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            In-depth write-ups on DevOps practices, cloud architecture, and lessons from production.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/blog" className="btn-secondary">
            View all posts →
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section style={{ padding: '0 24px 96px' }}>
        <div
          className="glass-strong"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: 'clamp(48px, 8vw, 80px) 48px',
            textAlign: 'center',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))',
            border: '1px solid rgba(59,130,246,0.2)',
            boxShadow: '0 0 60px rgba(59,130,246,0.1)',
          }}
        >
          <p className="section-label">Let&apos;s Connect</p>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Building something{' '}
            <span className="gradient-text">cloud-native?</span>
          </h2>
          <p style={{ color: '#64748b', marginBottom: '36px', fontSize: '1rem' }}>
            Whether it&apos;s infrastructure automation, CI/CD pipelines, or Kubernetes migrations —
            let&apos;s talk.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:gulshansinghbuzz.591@gmail.com" className="btn-primary">
              ✉️ Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/gulshkr/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              in LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
