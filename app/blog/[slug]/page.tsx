import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../_lib/posts';
import RingsBackground from '../../_components/RingsBackground';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} — Gulshan Kumar`,
    description: post.excerpt,
  };
}

const colorMap: Record<string, string> = {
  blue:   'badge-blue',
  cyan:   'badge-cyan',
  purple: 'badge-purple',
  green:  'badge-green',
  orange: 'badge-orange',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // very simple markdown-to-html: just preserve line breaks & handle code blocks
  const lines = post.content.trim().split('\n');
  const html: string[] = [];
  let inCode = false;

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inCode) {
        html.push('</code></pre>');
        inCode = false;
      } else {
        const lang = line.slice(3).trim();
        html.push(`<pre class="code-block"><code class="lang-${lang}">`);
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      html.push(line.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      continue;
    }
    if (line.startsWith('## ')) {
      html.push(`<h2>${line.slice(3)}</h2>`);
    } else if (line.startsWith('### ')) {
      html.push(`<h3>${line.slice(4)}</h3>`);
    } else if (line.startsWith('- ')) {
      html.push(`<li>${line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`);
    } else if (line.startsWith('| ')) {
      html.push(`<tr>${line.split('|').filter(Boolean).map(c => `<td>${c.trim()}</td>`).join('')}</tr>`);
    } else if (line.match(/^[-|]+$/)) {
      // separator row — skip
    } else if (line.trim() === '') {
      html.push('<br/>');
    } else {
      html.push(`<p>${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`);
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 24px 60px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 60%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <RingsBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '760px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '0.85rem', color: '#475569' }}>
            <Link href="/" style={{ color: '#475569', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/blog" style={{ color: '#475569', textDecoration: 'none' }}>Blog</Link>
            <span>›</span>
            <span style={{ color: '#94a3b8' }}>{post.title.slice(0, 40)}…</span>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
            <span className={`badge ${colorMap[post.categoryColor] ?? 'badge-blue'}`}>{post.category}</span>
            <span style={{ color: '#475569', fontSize: '0.82rem' }}>{post.readTime}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '12px',
                color: 'white',
              }}
            >
              GK
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f1f5f9' }}>Gulshan Kumar</div>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>
                {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 24px' }}>
        <div
          dangerouslySetInnerHTML={{ __html: html.join('\n') }}
          style={{
            color: '#94a3b8',
            lineHeight: 1.8,
            fontSize: '1rem',
          }}
        />

        {/* Back link */}
        <div
          style={{
            marginTop: '60px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Link href="/blog" className="btn-secondary">
            ← Back to Blog
          </Link>
          <a href="mailto:gulshansinghbuzz.591@gmail.com" className="btn-primary" style={{ fontSize: '0.85rem' }}>
            ✉️ Discuss this post
          </a>
        </div>
      </section>

      {/* Inline styles for rendered markdown */}
      <style>{`
        h2 { font-size: 1.5rem; font-weight: 700; color: #f1f5f9; margin: 40px 0 16px; letter-spacing: -0.01em; }
        h3 { font-size: 1.15rem; font-weight: 700; color: #e2e8f0; margin: 28px 0 12px; }
        p  { margin: 0 0 12px; }
        li { margin: 6px 0 6px 20px; list-style: disc; }
        strong { color: #f1f5f9; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        td { padding: 10px 14px; border: 1px solid rgba(255,255,255,0.06); font-size: 0.88rem; }
        tr:first-child td { background: rgba(59,130,246,0.08); font-weight: 600; color: #93c5fd; }
        .code-block {
          background: rgba(13,21,38,0.9);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 12px;
          padding: 20px 24px;
          overflow-x: auto;
          margin: 20px 0;
          font-family: var(--font-mono, monospace);
          font-size: 0.85rem;
          line-height: 1.7;
          color: #93c5fd;
        }
      `}</style>
    </div>
  );
}
