# Vercel Deployment Guide

This guide will help you deploy your Cognera website to Vercel.

## Prerequisites

1. A GitHub, GitLab, or Bitbucket account
2. A Vercel account (sign up at [vercel.com](https://vercel.com))
3. Your code pushed to a Git repository

## Step 1: Set Up Vercel KV (Database)

Since this application uses Vercel KV for user data storage, you need to set it up:

1. **Create a Vercel KV Database:**
   - Go to your Vercel dashboard
   - Navigate to your project (or create a new one)
   - Go to the "Storage" tab
   - Click "Create Database"
   - Select "KV" (Redis)
   - Choose a name for your database
   - Select a region close to your users
   - Click "Create"

2. **Environment Variables:**
   - Vercel will automatically add `KV_REST_API_URL`, `KV_REST_API_TOKEN`, and `KV_REST_API_READ_ONLY_TOKEN` to your environment variables
   - You don't need to manually set these

## Step 2: Configure Environment Variables

In your Vercel project settings, add the following environment variables:

### Required Variables:

1. **JWT_SECRET**
   - Generate a strong random string: `openssl rand -base64 32`
   - Or use an online generator
   - This is used to sign and verify JWT tokens

2. **NEXT_PUBLIC_BASE_URL**
   - Set this to your Vercel deployment URL: `https://your-project.vercel.app`
   - This will be automatically set by Vercel, but you can override it if needed

### Optional Variables (for OAuth):

3. **GOOGLE_CLIENT_ID** and **GOOGLE_CLIENT_SECRET**
   - Get these from [Google Cloud Console](https://console.cloud.google.com/)
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `https://your-domain.vercel.app/api/auth/oauth/google`

4. **MICROSOFT_CLIENT_ID** and **MICROSOFT_CLIENT_SECRET**
   - Get these from [Azure Portal](https://portal.azure.com/)
   - Register an application
   - Add redirect URI: `https://your-domain.vercel.app/api/auth/oauth/microsoft`

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Vercel will auto-detect Next.js
4. Configure environment variables (see Step 2)
5. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Step 4: Verify Deployment

After deployment:

1. Visit your deployment URL
2. Test user registration
3. Test user login
4. Test OAuth (if configured)

## Important Notes

### Local Development

For local development:
- Copy `.env.example` to `.env.local`
- Fill in the required values
- Vercel KV is optional for local dev (uses in-memory storage as fallback)
- Run `npm run dev` to start the development server

### Production Considerations

1. **JWT_SECRET**: Must be a strong, random string in production
2. **HTTPS**: Vercel automatically provides HTTPS
3. **Cookies**: Secure cookies are automatically enabled in production
4. **Database**: Vercel KV provides persistent storage for user data

### Troubleshooting

**Issue: Users not persisting**
- Ensure Vercel KV is set up and environment variables are configured
- Check Vercel logs for errors

**Issue: OAuth not working**
- Verify redirect URIs match your Vercel domain
- Check that OAuth credentials are correctly set in environment variables

**Issue: Build fails**
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18.x by default)

## Next Steps

- Set up custom domain (optional)
- Configure analytics (optional)
- Set up monitoring and error tracking (optional)

## Support

For issues specific to:
- **Vercel**: Check [Vercel Documentation](https://vercel.com/docs)
- **Next.js**: Check [Next.js Documentation](https://nextjs.org/docs)
- **Vercel KV**: Check [Vercel KV Documentation](https://vercel.com/docs/storage/vercel-kv)



