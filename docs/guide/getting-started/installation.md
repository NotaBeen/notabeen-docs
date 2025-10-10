---
title: Installation Guide
description: Step-by-step guide to install and run Notabeen on your local machine
---

# Installation Guide

This guide will help you set up Notabeen on your local machine in just a few steps.

::: tip Setup Video Available
Watch our complete setup tutorial: [YouTube Setup Guide](https://www.youtube.com/watch?v=HmpXFbpzquU)
:::

## What You'll Need

Before starting, make sure you have:

- **Node.js** version 18.0.0 or higher ([Download](https://nodejs.org/))
- **MongoDB database** — either local installation or a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier available)
- **Google Cloud account** — for Gmail API access (free)
- **Google Gemini API key** — for AI features ([Get API key](https://ai.google.dev/))

::: warning Gmail Only
Currently, Notabeen only supports Gmail accounts. Support for other email providers is coming soon.
:::

## Installation Steps

### Step 1: Get the Code

Open your terminal and clone the repository:

::: code-group
```pwsh [PowerShell]
git clone https://github.com/NotaBeen/notabeen-ai-email-assistant.git
cd notabeen-ai-email-assistant
```

```bash [Bash]
git clone https://github.com/NotaBeen/notabeen-ai-email-assistant.git
cd notabeen-ai-email-assistant
```
:::

### Step 2: Install Dependencies

Choose your preferred package manager and run:

::: code-group
```pwsh [npm]
npm install
```

```pwsh [pnpm]
pnpm install
```

```pwsh [yarn]
yarn install
```

```pwsh [bun]
bun install
```
:::

### Step 3: Configure Environment Variables

Create a file named `.env.local` in the project root folder and add your configuration:

```env
# Authentication (required)
AUTH_SECRET=                    # Generate using command below
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (required)
GOOGLE_CLIENT_ID=               # From Google Cloud Console
GOOGLE_CLIENT_SECRET=           # From Google Cloud Console

# Database (required)
MONGODB_URI=                    # Your MongoDB connection string
MONGO_CLIENT=                   # Your MongoDB client name

# Encryption (required)
ENCRYPTION_IV=                  # Generate using command below
ENCRYPTION_KEY=                 # Generate using command below

# AI Engine (required)
GEMINI_API_KEY=                 # From Google AI Studio
```

#### Generate Security Keys

Run these commands to generate the required security keys:

::: code-group
```pwsh [PowerShell]
# Generate AUTH_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate ENCRYPTION_IV
node -e "console.log(require('crypto').randomBytes(9).toString('base64'))"

# Generate ENCRYPTION_KEY
node -e "console.log(require('crypto').randomBytes(24).toString('base64'))"
```

```bash [Bash]
# Generate AUTH_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Generate ENCRYPTION_IV
openssl rand -base64 9

# Generate ENCRYPTION_KEY
openssl rand -base64 24
```
:::

::: details Need help getting Google OAuth credentials?
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Gmail API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Set the authorized redirect URI to: `http://localhost:3000/api/auth/callback/google`
6. Copy your Client ID and Client Secret to `.env.local`
:::

### Step 4: Start the Development Server

Launch the application:

::: code-group
```pwsh [npm]
npm run dev
```

```pwsh [pnpm]
pnpm dev
```

```pwsh [yarn]
yarn dev
```

```pwsh [bun]
bun dev
```
:::

### Step 5: Access the Application

Open your browser and navigate to:

```
http://localhost:3000
```

::: tip Success!
If you see the Notabeen login page, you're all set! 🎉
:::

## Tech Stack

Notabeen is built with modern technologies:

- **Next.js** — React framework for the web
- **Material UI** — Component library
- **MongoDB** — Database for storing emails and user data
- **NextAuth.js** — Secure authentication
- **Google Gemini API** — AI-powered email analysis

## Important Notes

::: warning Security
- Never commit your `.env.local` file to version control
- Keep all API keys and secrets private
- In production, update `NEXTAUTH_URL` to your actual domain with HTTPS
:::

::: info Google Cloud Setup
Make sure to:
- Enable the **Gmail API** in your Google Cloud project
- Configure the OAuth consent screen
- Add your email as a test user during development
:::

## Need Help?

- **Issues?** Report them on [GitHub Issues](https://github.com/NotaBeen/notabeen-ai-email-assistant/issues)
- **Contribute:** Check out our [GitHub Repository](https://github.com/NotaBeen/notabeen-ai-email-assistant)
- **Questions?** Create a discussion on GitHub

## What's Next?

Now that you have Notabeen running, learn how to use it effectively:

- [Getting Started with Notabeen](/guide/getting-started/introduction)
- [View the Main Repository](https://github.com/NotaBeen/notabeen-ai-email-assistant)

---

<div style="text-align: center; margin-top: 2rem; opacity: 0.8;">

**Notabeen** is open-source software licensed under the MIT License.

We ❤️ contributions! Pull requests are welcome.

</div>

