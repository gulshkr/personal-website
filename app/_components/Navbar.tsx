'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Blog',      href: '/blog' },
  { label: 'News',      href: '/news' },
  { label: 'Resources', href: '/resources' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 1.5rem',
        background: 'rgba(2,8,23,0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 800,
              color: 'white',
              boxShadow: '0 0 15px rgba(59,130,246,0.4)',
            }}
          >
            GK
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: '1rem',
              color: '#f1f5f9',
              letterSpacing: '-0.01em',
            }}
          >
            Gulshan Kumar
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '4px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '6px 16px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: active ? 600 : 400,
                  color: active ? '#60a5fa' : '#94a3b8',
                  background: active ? 'rgba(59,130,246,0.12)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  border: active ? '1px solid rgba(59,130,246,0.25)' : '1px solid transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Hire badge */}
        <a
          href="mailto:gulshansinghbuzz.591@gmail.com"
          className="btn-primary"
          style={{ padding: '8px 20px', fontSize: '0.85rem', display: 'none' }}
          id="nav-hire-btn"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          id="nav-hamburger"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: '#94a3b8',
                borderRadius: '2px',
                transition: 'all 0.2s',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '12px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: active ? 600 : 400,
                  color: active ? '#60a5fa' : '#94a3b8',
                  background: active ? 'rgba(59,130,246,0.1)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          #nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          #nav-hire-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
