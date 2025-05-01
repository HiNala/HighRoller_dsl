# Vercel Deployment Instructions for Morrison Construction LLC Website

## Deployment Steps

1. **Push Your Code to GitHub**: 
   - Ensure your code is pushed to a GitHub repository

2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Select your GitHub repository
   - Vercel will automatically detect your Vite configuration

3. **Configure Environment Variables**:
   - In the Vercel project settings, go to "Settings" > "Environment Variables"
   - Add the following environment variables:
     ```
     DATABASE_URL=your_postgresql_connection_string
     ```
   - For production, you should use a hosted PostgreSQL database like Neon, Supabase, or Railway

4. **Deploy Settings**:
   - Build Command: `npm run build` (already set in vercel.json)
   - Output Directory: `dist` (already set in vercel.json)
   - These settings should be automatically detected by Vercel

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your application

## Domains and HTTPS

- Vercel automatically provides a domain in the format: `project-name.vercel.app`
- To use a custom domain:
  - Go to "Settings" > "Domains"
  - Add your custom domain and follow the verification process

## Environment Variables

For proper functioning, your application needs:

1. **DATABASE_URL**: Connection string to your PostgreSQL database
   - Format: `postgresql://username:password@hostname:port/database_name`
   - For production, use a hosted PostgreSQL service

## Database Setup for Production

### Option 1: Neon PostgreSQL (Recommended)

1. **Create a Neon account**: 
   - Go to [Neon](https://neon.tech/) and sign up
   - Create a new project
   - Create a new database and note the connection string

2. **Add connection string to Vercel**:
   - Copy the connection string from Neon dashboard
   - Format: `postgresql://username:password@hostname:port/database_name?sslmode=require`
   - Add as `DATABASE_URL` environment variable in Vercel

### Option 2: Supabase PostgreSQL

1. **Create a Supabase account**:
   - Go to [Supabase](https://supabase.com/) and sign up
   - Create a new project
   - Navigate to Settings > Database to find the connection string

2. **Add connection string to Vercel**:
   - Copy the connection string from Supabase dashboard
   - Format: `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres`
   - Add as `DATABASE_URL` environment variable in Vercel

### Option 3: Railway PostgreSQL

1. **Create a Railway account**:
   - Go to [Railway](https://railway.app/) and sign up
   - Start a new PostgreSQL project
   - Railway will generate a connection string

2. **Add connection string to Vercel**:
   - Copy the connection string from Railway dashboard
   - Add as `DATABASE_URL` environment variable in Vercel

## Testing Database Connection

Before deploying, you can test your database connection:

```bash
# Install Vercel CLI if not installed
npm install -g vercel

# Pull environment variables from Vercel
vercel env pull .env.production

# Test database connection
NODE_ENV=production DATABASE_URL="your_connection_string" npx tsx -e "import { db } from './shared/db'; console.log('Database connection successful');"
```

## Database Migration

After deployment, you'll need to run database migrations:

1. Add your production DATABASE_URL to Vercel environment variables
2. Use Vercel CLI to run database migrations:
   ```
   vercel env pull .env.production
   npm run db:push
   ```

## Monitoring and Logs

- Monitor application performance and logs in the Vercel dashboard
- View deployment logs, function execution, and other metrics

## Troubleshooting

If you encounter issues during deployment:

1. Check Vercel build logs for errors
2. Ensure all environment variables are correctly set
3. Verify database connection string is correct and the database is accessible
4. Check for any CORS issues if the frontend and backend are deployed separately

For additional help, refer to [Vercel Documentation](https://vercel.com/docs) 