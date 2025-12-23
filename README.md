# AUTORAH (Vite + React)

## 1) Run locally
1. Install Node.js 18+
2. In this folder:
   - `npm install`
   - `npm run dev`

## 2) Environment variables
Create a `.env` file (or set them in Vercel) with:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

See `.env.example`.

## 3) Deploy to Vercel
- Import the GitHub repo in Vercel
- Add Environment Variables in:
  Vercel → Project → Settings → Environment Variables
- Deploy

Notes:
- `vercel.json` already sets install/build/output.
