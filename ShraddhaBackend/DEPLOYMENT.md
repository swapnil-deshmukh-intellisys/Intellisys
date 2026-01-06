# ShraddhaBackend Deployment Guide

## Prerequisites
- Node.js 22.x 
- MongoDB Atlas account
- Render.com account (or your preferred hosting platform)

## Environment Variables Setup

### Required Environment Variables:
1. **NODE_ENV**: Set to `production` for production deployment
2. **MONGO_URI**: MongoDB connection string
3. **FRONTEND_URL**: Your frontend domain URL for CORS (e.g. `https://your-frontend.com`)

### Setting up Environment Variables on Render:
1. Go to your Render dashboard
2. Select your backend service
3. Navigate to Environment tab
4. Add the following variables (Render auto-injects `PORT`, do not add it):
   ```
   NODE_ENV=production
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   FRONTEND_URL=https://your-frontend-domain.com
   ```

## Render Blueprint (recommended)
This repository includes a `render.yml` at the repo root. It defines a single Web Service with:
- `rootDir: ShraddhaBackend` so Render builds from the backend folder
- `buildCommand: npm install` and `startCommand: npm start`
- Health check at `/health`

To deploy via Blueprint:
1. Push the latest commits to your default branch on GitHub.
2. In Render, create a new Blueprint from the repository.
3. Render will create the service named `shraddhabackend`. Set `MONGO_URI` and `FRONTEND_URL` in the service settings.
4. Deploy. The logs should show `Working directory: ShraddhaBackend` and a successful health check.

If you previously created a service pointing to the repo root and see the error `ENOENT: open '/opt/render/project/src/package.json'`, delete that service and redeploy using the Blueprint so the correct working directory is used.

## MongoDB Setup
1. Create a MongoDB Atlas cluster
2. Create a database user with read/write permissions
3. Whitelist Render's IP addresses (0.0.0.0/0 for all IPs)
4. Get your connection string and set it as MONGO_URI

## API Endpoints

### Health Check
- **GET** `/health` - Server health status

### Project Proposals
- **POST** `/api/project` - Submit project proposal
  - Required fields: name, email, category, contact, description

### Career Applications
- **POST** `/api/career` - Submit job application
  - Required fields: position, name, email, contact
  - Optional: address, country, state, city, postalcode
  - File upload: CV (PDF, DOC, DOCX, max 5MB)

### Contact Messages
- **POST** `/api/contact` - Submit contact message
  - Required fields: name, email, message

## File Uploads
- CV files are stored in `/uploads` directory
- Supported formats: PDF, DOC, DOCX
- Maximum file size: 5MB
- Files are served statically at `/uploads/filename`

## Security Features
- CORS configured for production
- File type validation for uploads
- File size limits
- Environment-based error messages
- Input validation for all endpoints

## Monitoring
- Health check endpoint at `/health`
- Structured logging with timestamps
- Error tracking in production

## Deployment Checklist
- [ ] Environment variables configured
- [ ] MongoDB connection string set
- [ ] Frontend URL configured for CORS
- [ ] File uploads directory accessible
- [ ] Health check endpoint responding
- [ ] All API endpoints tested
- [ ] Error handling working properly
