import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 24px',
        background: 'rgba(13,21,38,0.8)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '15px',
              fontWeight: 800,
              color: 'white',
              boxShadow: '0 0 20px rgba(59,130,246,0.35)',
            }}
          >
            GK
          </span>
          <div>
            <div style={{ fontWeight: 700, color: '#f1f5f9' }}>Gulshan Kumar</div>
            <div style={{ fontSize: '0.8rem', color: '#475569' }}>DevOps Engineer</div>
          </div>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'News', href: '/news' },
            { label: 'Resources', href: '/resources' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href="https://github.com/gulshkr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 20px',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
            }}
          >
            <span>⌥</span> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gulshkr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 20px',
              borderRadius: '50px',
              border: '1px solid rgba(59,130,246,0.25)',
              color: '#60a5fa',
              textDecoration: 'none',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s',
            }}
          >
            <span>in</span> LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="divider" style={{ width: '100%', maxWidth: '400px' }} />

        {/* Copyright */}
        <div
          style={{
            color: '#334155',
            fontSize: '0.82rem',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Gulshan Kumar · Built with Next.js & ☁️
        </div>
      </div>
    </footer>
  );
}
