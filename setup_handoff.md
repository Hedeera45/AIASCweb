# AIASC Webpage Project Handoff

## Project Overview
Setting up a new webpage for **AIASC** (Asociación de Ingenieros Agrónomos del Sur de Córdoba).
The goal is a professional, high-end site using **Next.js (App Router)** and **Vanilla CSS** (No Tailwind).

## Current State
- **Workspace**: `C:\Docs\Uni\Extra uni\AIASC page`
- **Git**: Initialized and linked to `https://github.com/Hedeera45/AIASCweb`. First commit "asd123" already pushed.
- **Environment**: `.env.local` is present with Supabase URL and keys (Anon and Service).
- **Design Refs**: Located in `./style ref/`.
    - **Color Palette**: Teal (#40a090), Green (#6b8e23), Dark Green (#1a4d3a), Soft Lime (#e0f0a0).
    - **Layout**: See `AIASC web type final.png` for nav structure (Inicio, Acerca de, Iniciar sesión, etc.).

## The "Wall"
We hit a naming restriction: `create-next-app` refuses to install in a folder named `AIASC page` due to spaces and capital letters. 

## Instructions for Next Agent
1.  **Project Initialization**: 
    - EITHER: Rename the folder to `aiasc_web` (user prefers underscore) AND ensure the IDE/Agent workspace mapping is updated before running any command.
    - OR: Perform a **Manual Setup** by creating `package.json`, `tsconfig.json`, and `next.config.ts` directly to bypass the naming tool.
2.  **Tech Stack**: 
    - Next.js 15+ (App Router).
    - TypeScript.
    - **NO Tailwind**. Use Vanilla CSS for all styling.
    - Supabase for backend.
3.  **Aesthetics**: 
    - Prioritize visual excellence.
    - Use the provided color palette.
    - Reference `style ref/working lib/` for typography/layout inspiration.

## Suggested Command (Run inside the renamed folder)
```bash
npx -y create-next-app@latest ./ --typescript --eslint --app --src-dir --import-alias "@/*" --use-npm --empty --yes --disable-git --tailwind=false
```

---
*Note: The user is switching to a new conversation to reset the workspace state.*
