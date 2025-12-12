# cognera-website

Professional website for Cognera Data Labs - Analytics Platform

## Features

- Modern Next.js 14 application
- Professional enterprise design
- Responsive layout
- Authentication system
- Multiple page sections

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Authentication with JWT

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

### Deploy to Vercel

This project is configured for Vercel deployment. Follow these steps:

1. **Push your code to GitHub** (already done)

2. **Import project to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `Raahul-bale/cognera-website`
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables:**
   In Vercel project settings, add these environment variables:
   ```
   JWT_SECRET=your-secret-key-change-this-in-production-use-a-long-random-string
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   MICROSOFT_CLIENT_ID=your-microsoft-client-id
   MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret
   NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
   ```

4. **Update OAuth Redirect URIs:**
   - Google: Update redirect URI to `https://your-domain.vercel.app/api/auth/oauth/google`
   - Microsoft: Update redirect URI to `https://your-domain.vercel.app/api/auth/oauth/microsoft`

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your site automatically

### Important Notes

⚠️ **File Storage Limitation:** The current authentication system uses file-based storage (`/data/users.json`), which won't work on Vercel's serverless functions. For production, you'll need to:
- Use a database (PostgreSQL, MongoDB, etc.)
- Or use Vercel KV (Redis) for user storage
- Update the `src/lib/auth.js` file to use the database instead of file system

The site is ready for deployment, but authentication features will need database integration for production use.

