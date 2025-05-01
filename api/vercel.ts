import { createServer } from 'http';
import { parse } from 'url';
import app from './index';

// This is a Vercel serverless function handler
export default function handler(req: any, res: any) {
  // Parse the URL and pass it to Express
  const parsedUrl = parse(req.url || '', true);
  req.url = parsedUrl.pathname || '/';
  
  // Handle the request with our Express app
  return new Promise((resolve, reject) => {
    try {
      // Set needed headers for serverless
      res.setHeader('Content-Type', 'application/json');
      app(req, res);
      
      // Need to manually end the response for some cases
      if (!res.writableEnded) {
        res.end();
      }
      resolve(undefined);
    } catch (err) {
      reject(err);
    }
  });
} 