# Greig Technologies Limited — Website

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS + custom CSS properties
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **CI/CD**: GitHub Actions (Gitleaks → Semgrep → ESLint → TypeScript → Build → Trivy → Deploy)
- **Container**: Docker multi-stage (Alpine, non-root user)
- **Proxy**: Nginx + Let's Encrypt (Certbot)

## Local Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint         # ESLint check
```

## CI/CD Secrets Required (GitHub → Settings → Secrets)

| Secret | Description |
|---|---|
| `DEPLOY_HOST` | Production server IP |
| `DEPLOY_USER` | SSH deploy user |
| `DEPLOY_SSH_KEY` | Private SSH key |
| `DEPLOY_PORT` | SSH port (default 22) |
| `SEMGREP_APP_TOKEN` | Semgrep Cloud token (optional) |
| `SNYK_TOKEN` | Snyk API token (optional) |

## Production Deployment

```bash
# On server — initial setup
mkdir -p /opt/greig-web/nginx/conf.d
cp docker-compose.yml /opt/greig-web/
cp nginx/conf.d/greig.conf /opt/greig-web/nginx/conf.d/

# Set GitHub repo owner env var
export GITHUB_REPO_OWNER=YourGitHubOrg

# Deploy
cd /opt/greig-web
docker compose up -d
```

## Sections
1. **Hero** — Animated radar canvas, typewriter headline, stats
2. **Services** — 8 service cards (VSAT, Maritime, Enterprise, Wireless, etc.)
3. **Industries** — 6 industry verticals
4. **Coverage** — Animated SVG globe, satellite bands, coverage regions
5. **About** — Company history, timeline, pillars
6. **Contact** — Form with validation, contact info, business hours

## Contact Form
Wired to simulate submission. To go live, point the `handleSubmit` function in
`components/sections/Contact.tsx` at your preferred backend:
- [Formspree](https://formspree.io) — drop-in
- [Resend](https://resend.com) — for API route `/api/contact`
- Your existing backend
