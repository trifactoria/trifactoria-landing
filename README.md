# TriFactoria Landing Page

This repository contains the TriFactoria landing page, a small Next.js site that
introduces the studio and links to public developer-tool, automation, AI
workflow, and creative infrastructure projects. It is a lightweight portfolio
hub rather than a standalone product.

TriFactoria is a technical studio focused on developer tools, automation
systems, AI-assisted workflows, and creative infrastructure.

SkillKraftz LLC is the operating company behind TriFactoria Labs, so both names
may appear in public footer or legal text.

## Project Links

- **Deployed site**: <https://www.trifactoria.com>
- **GitHub organization**: <https://github.com/trifactoria>

## Screenshot

![TriFactoria Landing Page](public/screenshot.png)

The TriFactoria landing page introducing developer tooling, automation systems,
AI-assisted workflows, and creative infrastructure projects.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- npm

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd trifactoria-landing
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

## Running the Development Server

Start the development server:

```bash
npm run dev
```

## Build and Lint

```bash
# Build the production site
npm run build

# Run the configured lint check
npm run lint
```

The package lock resolves Next.js 14.2.35, where `next lint` still exists, but
the repo does not include an ESLint config or ESLint dependencies. The `lint`
script uses `tsc --noEmit` so checks run non-interactively with the dependencies
already declared by the project. Run `npm run build` first in a clean checkout
so Next.js can generate its `.next/types` files.

## License

Copyright © 2025 SkillKraftz LLC. All rights reserved.
