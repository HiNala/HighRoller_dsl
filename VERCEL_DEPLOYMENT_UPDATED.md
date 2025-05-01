# Updated Vercel Deployment Instructions for Morrison Construction LLC

## Fixed Deployment Configuration

We've made several important changes to fix the deployment issues:

1. **Updated vercel.json**:
   - Changed `outputDirectory` to `dist/public`
   - Set `framework` to `null` to prevent Next.js auto-detection
   - Added proper function configuration for API endpoints
   - Added filesystem middleware to handle static assets properly

2. **Updated build scripts**:
   - Separate build script for API files that outputs to `dist/api`
   - Modified vercel-build to run both build scripts in sequence
   - Fixed serverless function handling for Vercel's environment

3. **Fixed API handler**:
   - Updated the Vercel serverless function handler to properly process Express requests
   - Added proper promise-based handling for serverless functions
   - Ensured proper response handling

## Deployment Steps

1. **Push these changes to GitHub**:
   - Commit all the configuration changes
   - Push to your GitHub repository

2. **Deploy to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your repository
   - Configure the environment variables (see below)
   - Deploy

## Environment Variables

Configure the following environment variables in Vercel:

```
DATABASE_URL=your_postgresql_connection_string
```

## Database Setup

Choose one of the following hosted PostgreSQL providers:

1. **Neon** (Recommended): [neon.tech](https://neon.tech)
2. **Supabase**: [supabase.com](https://supabase.com)
3. **Railway**: [railway.app](https://railway.app)

Copy the connection string from your chosen provider and add it to your Vercel environment variables.

## Troubleshooting

If you continue to experience deployment issues:

1. **Check build logs**:
   - Look for specific error messages in the Vercel deployment logs
   - Pay attention to the bundling and build steps

2. **Local testing**:
   - Test the build locally before deploying:
     ```
     npm run vercel-build
     ```
   - Check the output in the dist directory

3. **API errors**:
   - Check the function logs in Vercel's dashboard
   - Verify that API routes are properly configured

4. **Static asset issues**:
   - Ensure assets are properly built to the dist/public directory
   - Check that routes in vercel.json are correct

For any further issues, consult the [Vercel documentation](https://vercel.com/docs) or contact Vercel support. 