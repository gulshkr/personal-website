import type { NewsItem } from '../_lib/news';

type Props = { item: NewsItem };

const colorMap: Record<string, string> = {
  blue:   'badge-blue',
  cyan:   'badge-cyan',
  purple: 'badge-purple',
  green:  'badge-green',
  orange: 'badge-orange',
};

export default function NewsCard({ item }: Props) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-3d"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        className="card-3d-inner glass"
        style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        {/* Category + source */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className={`badge ${colorMap[item.categoryColor] ?? 'badge-blue'}`}>
            {item.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#475569' }}>{item.source}</span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#f1f5f9',
            lineHeight: 1.45,
            margin: 0,
            transition: 'color 0.2s',
          }}
        >
          {item.title}
        </h3>

        {/* Summary */}
        <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
          {item.summary}
        </p>

        {/* Date + read link */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <span style={{ fontSize: '0.76rem', color: '#334155' }}>
            {new Date(item.date).toLocaleDateString('en-IN', {
              year: 'numeric', month: 'short', day: 'numeric',
            })}
          </span>
          <span style={{ fontSize: '0.82rem', color: '#06b6d4', fontWeight: 600 }}>
            Read full →
          </span>
        </div>
      </div>
    </a>
  );
}
