import type { Resource } from '../_lib/resources';

type Props = { resource: Resource };

const catColors: Record<string, string> = {
  blue:   'badge-blue',
  cyan:   'badge-cyan',
  purple: 'badge-purple',
  green:  'badge-green',
  orange: 'badge-orange',
};

const levelColors: Record<string, string> = {
  Beginner:     'badge-green',
  Intermediate: 'badge-blue',
  Advanced:     'badge-purple',
};

const typeIcons: Record<string, string> = {
  Course:     '🎓',
  Book:       '📚',
  Docs:       '📄',
  Tool:       '🔧',
  Cheatsheet: '⚡',
  Video:      '🎬',
};

export default function ResourceCard({ resource }: Props) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-3d"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        className="card-3d-inner glass"
        style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}
      >
        {/* Icon + type */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '2rem' }}>{resource.icon}</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            <span className={`badge ${catColors[resource.categoryColor] ?? 'badge-blue'}`}>
              {resource.category}
            </span>
            <span className={`badge ${levelColors[resource.level]}`}>{resource.level}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#f1f5f9',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {resource.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
          {resource.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {resource.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '2px 10px',
                borderRadius: '50px',
                fontSize: '0.72rem',
                color: '#475569',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#475569' }}>
            {typeIcons[resource.type]} {resource.type}
          </span>
          <span style={{ fontSize: '0.82rem', color: '#8b5cf6', fontWeight: 600 }}>
            Open →
          </span>
        </div>
      </div>
    </a>
  );
}
