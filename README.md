# DreamHouse — Meshy v2 (GitHub-ready)

This repository is a ready-to-deploy demo for Netlify that integrates with Meshy v2 (text-to-3D).
It includes an **anti-drop** check that warns when the site was uploaded via Netlify Drop (Drop disables functions).

## What is included
- `public/` — frontend (index.html, viewer.html)
- `netlify/functions/` — serverless functions (meshyCreateTask, meshyGetTask, ping, redesignRoom placeholder)
- `netlify.toml` — Netlify configuration
- `.github/workflows/` — optional GitHub Action sample (deploy to Netlify via CLI)
- `README.md`, `.gitignore`, `LICENSE`

## Quick start (recommended: GitHub → Netlify continuous deploy)
1. Create a new GitHub repository and push this project (or upload the ZIP and extract).
2. In Netlify: **Add new project → Import from Git** → choose your GitHub repo.
   - Build command: *(leave empty)*
   - Publish directory: `public`
   - Functions directory: `netlify/functions`
3. After site is created: go to **Site settings → Environment → Variables** and add:
   - `MESHY_API_KEY` = *your Meshy API key*
   - `NODE_VERSION` = `18`
4. Deploys will run automatically when you push. Or trigger a manual deploy:
   **Deploys → Trigger deploy → Clear cache and deploy site**.

## If you accidentally used Netlify Drop
The frontend has a runtime check (`/.netlify/functions/ping`). If this check fails the site shows a big red warning instructing you to re-upload via **Add new project → Deploy manually → Upload deploy** or import from Git.

## Development locally (optional)
- You can test frontend locally by opening `public/index.html` in a browser (note: functions require Netlify dev to run locally).
- To run Netlify Functions locally, install Netlify CLI and run:
  ```bash
  npm i -g netlify-cli
  netlify dev
  ```

## LICENSE
MIT — see LICENSE file.
