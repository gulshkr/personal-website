export type NewsItem = {
  id: string;
  title: string;
  source: string;
  date: string;
  category: string;
  categoryColor: 'blue' | 'cyan' | 'purple' | 'green' | 'orange';
  summary: string;
  url: string;
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Kubernetes 1.32 Released: Sidecar Containers Promoted to Stable',
    source: 'Kubernetes Blog',
    date: '2025-03-20',
    category: 'Kubernetes',
    categoryColor: 'cyan',
    summary:
      'Kubernetes 1.32 "Penelope" ships with sidecar containers as a stable feature, improved DRA for GPU workloads, and numerous API deprecations to watch.',
    url: 'https://kubernetes.io/blog/',
  },
  {
    id: '2',
    title: 'AWS Announces Amazon EKS Auto Mode for Simplified Cluster Management',
    source: 'AWS Blog',
    date: '2025-03-18',
    category: 'AWS',
    categoryColor: 'orange',
    summary:
      'EKS Auto Mode automates infrastructure management, node provisioning, and updates — letting teams focus on workloads instead of cluster operations.',
    url: 'https://aws.amazon.com/blogs/aws/',
  },
  {
    id: '3',
    title: 'GitHub Actions Now Supports Arm64 Runners Natively',
    source: 'GitHub Blog',
    date: '2025-03-15',
    category: 'CI/CD',
    categoryColor: 'blue',
    summary:
      'GitHub-hosted Arm64 runners are now generally available, cutting build times for projects targeting Apple Silicon and AWS Graviton by up to 40%.',
    url: 'https://github.blog/',
  },
  {
    id: '4',
    title: 'HashiCorp Terraform 1.8 Introduces Provider Functions',
    source: 'HashiCorp Blog',
    date: '2025-03-12',
    category: 'IaC',
    categoryColor: 'purple',
    summary:
      'Terraform 1.8 brings provider-defined functions, allowing providers like AWS to expose reusable functions in HCL — reducing boilerplate in complex configs.',
    url: 'https://www.hashicorp.com/blog',
  },
  {
    id: '5',
    title: 'OpenTelemetry Reaches 1.0 for All Signals (Logs, Metrics, Traces)',
    source: 'CNCF Blog',
    date: '2025-03-10',
    category: 'Observability',
    categoryColor: 'green',
    summary:
      'OpenTelemetry has reached stable 1.0 across all three telemetry signals, cementing it as the industry standard for vendor-neutral observability instrumentation.',
    url: 'https://www.cncf.io/blog/',
  },
  {
    id: '6',
    title: 'Docker Desktop 4.30 Adds Docker Debug and Improved Resource Saver',
    source: 'Docker Blog',
    date: '2025-03-08',
    category: 'Containers',
    categoryColor: 'blue',
    summary:
      'Docker Debug lets you attach a debug shell to any running container — even distroless images — without modifying the Dockerfile.',
    url: 'https://www.docker.com/blog/',
  },
  {
    id: '7',
    title: 'Grafana Loki 3.0: Major Performance Improvements and New Query Language',
    source: 'Grafana Labs',
    date: '2025-03-05',
    category: 'Observability',
    categoryColor: 'green',
    summary:
      'Loki 3.0 ships 5x query performance improvements, a redesigned ingestion pipeline, and a new LogQL v2 with SQL-like syntax for aggregations.',
    url: 'https://grafana.com/blog/',
  },
  {
    id: '8',
    title: 'AWS re:Invent 2025: Top 10 Announcements for DevOps Engineers',
    source: 'AWS Blog',
    date: '2025-02-28',
    category: 'AWS',
    categoryColor: 'orange',
    summary:
      'From Amazon Q Developer improvements to ECS Fargate Spot enhancements and new CloudWatch features, here are the biggest DevOps takeaways from re:Invent.',
    url: 'https://aws.amazon.com/blogs/aws/',
  },
  {
    id: '9',
    title: 'ArgoCD 3.0 Released: Major UI Overhaul and Improved Multi-Cluster Support',
    source: 'Argo Project',
    date: '2025-02-22',
    category: 'GitOps',
    categoryColor: 'cyan',
    summary:
      'ArgoCD 3.0 ships a completely redesigned UI, native multi-cluster application sets, and significant performance improvements for large fleet management.',
    url: 'https://argoproj.github.io/blog/',
  },
];
