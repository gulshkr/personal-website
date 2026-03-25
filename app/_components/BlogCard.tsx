import Link from 'next/link';
import type { Post } from '../_lib/posts';

type Props = { post: Post };

const colorMap: Record<string, string> = {
  blue:   'badge-blue',
  cyan:   'badge-cyan',
  purple: 'badge-purple',
  green:  'badge-green',
  orange: 'badge-orange',
};

export default function BlogCard({ post }: Props) {
  return (
    <div className="card-3d">
      <div
        className="card-3d-inner glass"
        style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}
      >
        {/* Category + read time */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className={`badge ${colorMap[post.categoryColor] ?? 'badge-blue'}`}>
            {post.category}
          </span>
          <span style={{ fontSize: '0.78rem', color: '#475569' }}>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#f1f5f9',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontSize: '0.88rem',
            color: '#64748b',
            lineHeight: 1.65,
            margin: 0,
            flexGrow: 1,
          }}
        >
          {post.excerpt}
        </p>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <span style={{ fontSize: '0.78rem', color: '#334155' }}>
            {new Date(post.date).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#60a5fa',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
