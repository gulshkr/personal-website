export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  categoryColor: 'blue' | 'cyan' | 'purple' | 'green' | 'orange';
  excerpt: string;
  readTime: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'blue-green-deployments-zero-downtime',
    title: 'Blue-Green Deployments: Achieving Zero Downtime in Production',
    date: '2025-03-15',
    category: 'CI/CD',
    categoryColor: 'blue',
    readTime: '8 min read',
    excerpt:
      'A deep dive into Blue-Green deployment strategy — how it works, how I implemented it at Onsurity to achieve zero-downtime releases, and the pitfalls to avoid.',
    content: `
## What is Blue-Green Deployment?

Blue-Green deployment is a release strategy that reduces downtime by running two identical production environments — **Blue** (live) and **Green** (staging the new version). When the new release is ready, traffic is switched from Blue to Green, making it instantly live.

## Why We Needed It

At Onsurity, our monolithic deployments caused 5–10 minutes of downtime per release, impacting our health insurance platform users. We needed a seamless switch.

## Implementation on AWS

\`\`\`bash
# Switch target group to new deployment
aws elbv2 modify-listener \\
  --listener-arn $LISTENER_ARN \\
  --default-actions Type=forward,TargetGroupArn=$GREEN_TG_ARN
\`\`\`

We used **AWS Application Load Balancer** target groups to route traffic. The pipeline:

1. Deploy new version to the Green ASG
2. Run smoke tests against Green  
3. Shift 10% traffic → monitor → shift 100%
4. Keep Blue running as instant rollback

## Results

- **Zero downtime** releases achieved ✅
- Incident response improved by **30%** (easy rollback)
- Deployment confidence increased across the team

## Lessons Learned

- Database migrations must be backward-compatible during the switch
- Session stickiness can be tricky — use external session stores (Redis)
- Always have automatic rollback triggers based on error rate thresholds
    `,
  },
  {
    slug: 'aws-waf-devops-security',
    title: 'Hardening Your AWS Infrastructure with WAF — A Practical Guide',
    date: '2025-02-28',
    category: 'Security',
    categoryColor: 'purple',
    readTime: '10 min read',
    excerpt:
      'How I configured AWS WAF with rate limiting, geo-blocking, and IP rules to mitigate OWASP Top 10 and DDoS threats at the application layer.',
    content: `
## Why WAF Matters

A Web Application Firewall inspects HTTP traffic before it reaches your application. It blocks malicious requests at the edge — SQL injection, XSS, DDoS floods — before they ever hit your EC2/EKS workloads.

## Core Rule Groups I Applied

### 1. AWS Managed Rules
\`\`\`hcl
resource "aws_wafv2_web_acl" "main" {
  name  = "prod-waf"
  scope = "REGIONAL"

  rule {
    name     = "AWSManagedRulesCommonRuleSet"
    priority = 1
    override_action { none {} }
    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }
  }
}
\`\`\`

### 2. Rate Limiting
We capped requests at **2000 per 5 minutes per IP** to neutralize brute force and credential stuffing.

### 3. Geo-blocking
Blocked traffic from regions we don't operate in, reducing noise by ~40%.

## Impact

- OWASP Top 10 threats mitigated at the edge
- DDoS flood events absorbed without reaching backend
- Zero false-positive incidents after 2 weeks of tuning
    `,
  },
  {
    slug: 'github-actions-optimization',
    title: 'Slashing CI/CD Runtime by 50% with GitHub Actions Optimization',
    date: '2025-02-10',
    category: 'CI/CD',
    categoryColor: 'blue',
    readTime: '7 min read',
    excerpt:
      'Practical tips I used to reduce our GitHub Actions pipeline from 40 minutes to under 20 — caching, matrix builds, and smart job splitting.',
    content: `
## The Problem

Our GitHub Actions pipeline was taking 40+ minutes. Engineers were losing focus waiting for CI results.

## Optimization Techniques

### 1. Aggressive Dependency Caching

\`\`\`yaml
- uses: actions/cache@v4
  with:
    path: |
      ~/.npm
      node_modules
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-
\`\`\`

### 2. Parallel Job Matrix

Split tests across 4 workers:
\`\`\`yaml
strategy:
  matrix:
    shard: [1, 2, 3, 4]
steps:
  - run: npm test -- --shard=\${{ matrix.shard }}/4
\`\`\`

### 3. Skip Redundant Steps

Use \`paths\` filters to skip Docker builds when only docs change:
\`\`\`yaml
on:
  push:
    paths:
      - 'src/**'
      - 'Dockerfile'
\`\`\`

## Results

| Metric | Before | After |
|--------|--------|-------|
| Build time | 40 min | 19 min |
| Deploy time | 15 min | 10 min |
| Cache hit rate | 0% | 85% |
    `,
  },
  {
    slug: 'docker-to-eks-migration',
    title: 'Migrating from Docker Swarm to AWS EKS: What I Learned',
    date: '2025-01-20',
    category: 'Kubernetes',
    categoryColor: 'cyan',
    readTime: '12 min read',
    excerpt:
      'Key decisions, gotchas, and architectural changes when moving production workloads from Docker Swarm to Amazon EKS for better scalability and observability.',
    content: `
## Why We Moved Away from Swarm

Docker Swarm served us well, but we hit its ceiling: no native HPA, limited observability hooks, and no ecosystem for GitOps tooling.

## Migration Phases

### Phase 1 — Containerize & Validate
Every service already had a Dockerfile. We focused on:
- Extracting all config to environment variables
- Adding health check endpoints \`/healthz\`

### Phase 2 — EKS Cluster Setup

\`\`\`bash
eksctl create cluster \\
  --name prod-cluster \\
  --version 1.29 \\
  --nodegroup-name standard \\
  --node-type t3.medium \\
  --nodes-min 2 --nodes-max 10 \\
  --managed
\`\`\`

### Phase 3 — Helm Charts

We wrote Helm charts for each service, parameterized by environment. This made staging → prod promotion a one-liner.

### Phase 4 — Observability

- **Prometheus + Grafana** for metrics
- **Fluent Bit → Elasticsearch** for logs
- **APM** for distributed tracing

## Wins

- Auto-scaling now handles traffic spikes without manual intervention
- Deployment velocity increased 2x
- Rollbacks take < 30 seconds with Helm
    `,
  },
  {
    slug: 'prometheus-grafana-monitoring-setup',
    title: 'Production Monitoring with Prometheus & Grafana — Complete Setup',
    date: '2024-12-05',
    category: 'Observability',
    categoryColor: 'green',
    readTime: '9 min read',
    excerpt:
      'A complete walkthrough of setting up Prometheus and Grafana for production monitoring, alerting, and dashboards — with real configs from my setup.',
    content: `
## The Observability Stack

Good observability answers three questions instantly:
1. **Is it broken?** (Alerting)
2. **Where is it broken?** (Metrics + Tracing)
3. **Why did it break?** (Logs)

## Prometheus Setup

\`\`\`yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'nodejs-app'
    static_configs:
      - targets: ['app:3000']
    metrics_path: '/metrics'
\`\`\`

## Key Alerts I Use

\`\`\`yaml
groups:
  - name: production
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Error rate > 5% for 2 minutes"
\`\`\`

## Grafana Dashboard Tips

- Use **variables** for service name — one dashboard covers all services
- Add **SLO panels** (target 99.9% uptime = 8.7h downtime/year budget)
- Set **Slack/PagerDuty** alert routing for severity tiers

## Result

End-to-end visibility across 15+ services. MTTR dropped from 45 minutes to under 10 minutes.
    `,
  },
  {
    slug: 'kubernetes-simulation-from-scratch',
    title: 'Kubernetes Simulation from Scratch: Learn Kubernetes Internals',
    date: '2026-04-01',
    category: 'Kubernetes',
    categoryColor: 'blue',
    readTime: '4 min read',
    excerpt: 'Stop just using Kubernetes. Start understanding it. I built a production-style Kubernetes simulation from scratch to explore real-world bare-metal setups.',
    content: `
## Stop just using Kubernetes. Start understanding it. 🏗️

Over the past few days, I built a production-style Kubernetes simulation from scratch, and it’s now live on GitHub. 🚀

Most tutorials show how to run a simple \`kubectl apply\`, but they rarely explain the “why” behind Kubernetes architecture. This project focuses on understanding how things actually work under the hood by building a full environment that mirrors a real-world bare-metal Kubernetes setup.

## What’s inside the project?

- **Microservices** – Node.js APIs for User & Product management
- **Stateful Workloads** – MongoDB deployed using StatefulSets with persistent storage
- **Full Observability** – ELK Stack (Elasticsearch, Logstash, Kibana) with Filebeat for centralized logging
- **Advanced Networking** – NGINX Ingress Controller & MetalLB for real-world load balancing
- **Security** – Zero-Trust model using NetworkPolicies & RBAC

## Cloud → Kubernetes Terminology Mapping

If you're coming from AWS or GCP, this repo also includes a Cloud-to-K8s translation guide:

| Cloud Service | Kubernetes Equivalent |
|---------------|-----------------------|
| ECS Task      | Pod                   |
| Application Load Balancer | Ingress   |
| Target Group  | Service               |
| VPC           | Namespace             |

The goal was to bridge the gap between cloud services and Kubernetes internals and create something that engineers can actually learn from.

If you're learning Kubernetes or want a hands-on environment to explore real concepts, feel free to check it out!

🔗 **GitHub Repository:** [https://lnkd.in/grhN72dT](https://lnkd.in/grhN72dT)
    `,
  },
  {
    slug: 'building-self-healing-agent-ollama',
    title: 'Building a Self-Healing Docker Agent with Ollama',
    date: '2026-03-25',
    category: 'AI Agents',
    categoryColor: 'purple',
    readTime: '3 min read',
    excerpt: 'If you don’t have access to paid coding agents, try running models locally using Ollama. Here is how I built a self-healing container agent with local LLMs.',
    content: `
Lately I’ve been experimenting with something pretty interesting, and thought it’s worth sharing with folks here 👇

If you don’t have access to paid coding agents or LLM subscriptions, don’t let that stop you. Try running models locally using **Ollama**, especially something like \`qwen3.5:cloud\` (and a few others available there). It’s honestly a great way to get hands-on without spending anything.

You can:
- Build small projects
- Experiment with agents
- Learn how LLMs actually behave in real scenarios
- And most importantly, break things and fix them 😄

## How to get started (super basic steps):

1. **Install Ollama** -> [https://ollama.com](https://ollama.com)
2. **Pull a model** -> \`ollama run qwen3.5:cloud\`
3. **Start experimenting**:
   - Ask coding questions
   - Build scripts
   - Try creating small agents

*(Optional but fun)*
- Integrate with Python / APIs
- Connect with your local apps or services

## Building a Self-Healing Agent

Recently, I started working on a small side project — a self-healing agent for containers. The idea is simple (still a work in progress):

- It monitors running services/containers
- Sends alerts when something goes wrong
- Tries to resolve basic issues automatically

For example, if there’s a memory issue or a service crash / unhealthy state, the agent attempts a basic fix and ensures the service is back up. Not production-ready yet, but it’s been a great learning experience around automation + LLM use cases in DevOps.

Honestly, tools like Ollama make it super accessible to experiment with ideas like this without worrying about API costs.

*Have you tried running LLMs locally? Built anything interesting with them? Would love to hear what others are exploring! 🚀*
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
