import type { Metadata } from 'next';
import GlobeBackground from '../_components/GlobeBackground';

export const metadata: Metadata = {
  title: 'About — Gulshan Kumar',
  description: 'Resume and professional background of Gulshan Kumar, DevOps Engineer at Onsurity Technologies.',
};

const experience = [
  {
    role: 'DevOps Engineer (Level 1)',
    company: 'Onsurity Technologies Pvt. Ltd.',
    location: 'Bengaluru, India',
    period: 'Nov 2023 – Present',
    color: '#3b82f6',
    achievements: [
      'Automated AWS infrastructure (EC2, RDS, S3) using Bash and Python Boto, reducing cloud costs by 20%.',
      'Took full solo ownership of DevOps during team transition — managed infra, CI/CD, deployments & monitoring, maintaining 99.9% uptime.',
      'Optimized GitHub Actions CI/CD pipelines, cutting runtime by 50% and deployment time by 30%.',
      'Implemented Blue-Green Deployments with APM — achieving zero-downtime releases and improving incident response by 30%.',
      'Configured AWS WAF with rate limiting, geo-blocking, and IP rules — mitigating OWASP Top 10 and DDoS threats.',
      'Integrated SonarQube for DevSecOps, reducing critical vulnerabilities by 50% and improving code quality compliance.',
      'Introduced Terraform IaC, standardizing AWS provisioning and improving reproducibility.',
      'Implemented monitoring with Prometheus, Grafana, and APM for end-to-end visibility.',
      'Containerized MySQL, PostgreSQL, MongoDB, Redis, Elasticsearch using Docker — improving performance 20% and cutting EC2 costs 25%.',
      'Automated Elasticsearch log rotation, reducing storage costs by 30%.',
      'Contributing to Docker Swarm → AWS EKS migration, improving scalability and observability.',
    ],
  },
];

const skillGroups = [
  {
    label: 'Cloud & Containers',
    color: '#3b82f6',
    skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS EKS', 'AWS WAF', 'Docker', 'Kubernetes', 'GCP'],
  },
  {
    label: 'CI/CD & DevSecOps',
    color: '#8b5cf6',
    skills: ['GitHub Actions', 'SonarQube', 'Blue-Green Deployment', 'Pipeline Optimization'],
  },
  {
    label: 'Monitoring & Observability',
    color: '#10b981',
    skills: ['Prometheus', 'Grafana', 'APM', 'Elasticsearch', 'ELK Stack'],
  },
  {
    label: 'Scripting & Automation',
    color: '#06b6d4',
    skills: ['Bash', 'Python', 'Python Boto3', 'AWS CLI', 'kubectl'],
  },
  {
    label: 'IaC & Tools',
    color: '#f59e0b',
    skills: ['Terraform', 'Helm', 'Docker Hub', 'GitHub', 'AWS CLI'],
  },
  {
    label: 'Disaster Recovery',
    color: '#ef4444',
    skills: ['AWS Backup', 'RDS Snapshots', 'MongoDB Backup', 'GitHub DR', 'Bash Automation'],
  },
];

const certifications = [
  { name: 'AWS Cloud Practitioner', year: '2023', icon: '☁️', color: '#f59e0b' },
  { name: 'AWS DevOps on AWS', year: '2022', icon: '⚙️', color: '#3b82f6' },
  { name: 'Google IT Support', year: '2021', icon: '🔧', color: '#10b981' },
  { name: 'Linux Fundamentals', year: '2022', icon: '🐧', color: '#8b5cf6' },
];

export default function AboutPage() {
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
        <GlobeBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto' }}>
          <p className="section-label">About Me</p>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 800,
              color: 'white',
              margin: '0 auto 24px',
              boxShadow: '0 0 40px rgba(59,130,246,0.35)',
            }}
          >
            GK
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            Gulshan Kumar
          </h1>
          <p className="gradient-text" style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '20px' }}>
            DevOps Engineer (Level 1)
          </p>
          <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '28px' }}>
            DevOps Engineer with 2+ years of experience automating, deploying, and securing cloud infrastructure on AWS.
            Proficient in containerization, CI/CD, monitoring, and cost optimization. Successfully implemented Blue-Green
            Deployments, AWS WAF security policies, and APM for zero-downtime releases. Demonstrated full ownership by
            leading solo DevOps operations, ensuring system reliability and scalability.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:gulshansinghbuzz.591@gmail.com" className="btn-primary" style={{ fontSize: '0.85rem' }}>
              ✉️ Email
            </a>
            <a
              href="https://github.com/gulshkr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.85rem' }}
            >
              ⌥ GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gulshkr/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.85rem' }}
            >
              in LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
        {/* Experience */}
        <section style={{ marginBottom: '80px' }}>
          <p className="section-label">Work History</p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '40px', letterSpacing: '-0.01em' }}>
            Experience
          </h2>
          {experience.map((job) => (
            <div
              key={job.company}
              className="glass"
              style={{ padding: '32px', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Accent line */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: `linear-gradient(to bottom, ${job.color}, transparent)`,
                  borderRadius: '3px 0 0 3px',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>{job.role}</h3>
                  <p style={{ color: '#60a5fa', fontWeight: 600, margin: '4px 0 0' }}>{job.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge-blue">{job.period}</span>
                  <p style={{ color: '#475569', fontSize: '0.82rem', margin: '6px 0 0' }}>{job.location}</p>
                </div>
              </div>
              <ul style={{ margin: '20px 0 0', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {job.achievements.map((item, idx) => (
                  <li key={idx} style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '80px' }}>
          <p className="section-label">Capabilities</p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '40px', letterSpacing: '-0.01em' }}>
            Skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {skillGroups.map((group) => (
              <div key={group.label} className="glass" style={{ padding: '24px' }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: group.color,
                    marginBottom: '14px',
                  }}
                >
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={{ marginBottom: '80px' }}>
          <p className="section-label">Academic</p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '40px', letterSpacing: '-0.01em' }}>
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                institution: 'SRM University',
                degree: 'B.Tech — Computer Science Engineering',
                period: '2019 – 2023',
                detail: 'CGPA: 8.26 / 10',
              },
              {
                institution: 'Uchh Vidyalaya',
                degree: 'AISSCE (Class XII)',
                period: '–',
                detail: 'Percentage: 72%',
              },
            ].map((edu) => (
              <div
                key={edu.institution}
                className="glass"
                style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}
              >
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
                    {edu.institution}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', margin: '4px 0 0' }}>{edu.degree}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="badge badge-purple">{edu.period}</div>
                  <p style={{ color: '#3b82f6', fontSize: '0.88rem', fontWeight: 600, margin: '6px 0 0' }}>{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <p className="section-label">Credentials</p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '40px', letterSpacing: '-0.01em' }}>
            Certifications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="glass"
                style={{
                  padding: '24px',
                  textAlign: 'center',
                  borderTop: `2px solid ${cert.color}`,
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{cert.icon}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '6px' }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#475569' }}>{cert.year}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
