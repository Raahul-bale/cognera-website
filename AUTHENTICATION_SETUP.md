# Authentication Setup Guide

## Overview
Complete authentication system with:
- Email/Password registration and login
- Google OAuth
- Microsoft OAuth
- Password validation and verification
- JWT token-based sessions

## Features Implemented

### 1. User Registration (`/api/auth/register`)
- Full name, email, and password registration
- Password validation (8+ chars, uppercase, lowercase, number, special char)
- Email format validation
- Terms & Conditions checkbox
- Password hashing with bcrypt

### 2. User Login (`/api/auth/login`)
- Email and password authentication
- Password verification
- JWT token generation
- Session cookie management

### 3. OAuth Authentication
- **Google OAuth** (`/api/auth/oauth/google`)
- **Microsoft OAuth** (`/api/auth/oauth/microsoft`)
- Automatic user creation for OAuth users
- Token-based session management

### 4. Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in the root directory:

```env
# Authentication
JWT_SECRET=your-secret-key-change-this-in-production-use-a-long-random-string

# OAuth - Google
# Get from: https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# OAuth - Microsoft
# Get from: https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade
MICROSOFT_CLIENT_ID=your-microsoft-client-id
MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Add authorized redirect URI: `http://localhost:3000/api/auth/oauth/google`
6. Copy Client ID and Client Secret to `.env.local`

### 3. Microsoft OAuth Setup
1. Go to [Azure Portal](https://portal.azure.com/)
2. Navigate to Azure Active Directory → App registrations
3. Create a new registration
4. Add redirect URI: `http://localhost:3000/api/auth/oauth/microsoft`
5. Go to Certificates & secrets → Create a new client secret
6. Copy Application (client) ID and Client secret to `.env.local`

## User Storage

Currently using file-based storage (`/data/users.json`) for development.
**For production, replace with a proper database (PostgreSQL, MongoDB, etc.)**

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/oauth/google` - Google OAuth flow
- `GET /api/auth/oauth/microsoft` - Microsoft OAuth flow

## Security Notes

- Passwords are hashed using bcrypt (10 rounds)
- JWT tokens expire after 7 days
- HTTP-only cookies for session management
- Password validation on both client and server
- OAuth tokens stored securely in cookies






