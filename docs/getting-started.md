
# Getting Started — NotaBeen

NotaBeen is an open-source AI-powered email assistant that helps reduce inbox
overload by summarizing messages, suggesting smart replies, and automatically
categorizing incoming mail.

Demo: ![Notabeen Welcome GIF](https://github.com/NotaBeen/notabeen-ai-email-assistant/raw/main/public/notabeen-welcome.gif)

## Features

- AI-powered summaries for long emails
- Automated categorization (Urgent, Important, Can Wait, Unsubscribe, Unimportant)
- Smart reply generation
- Self-hostable so you control your data

## Tech stack

- Next.js — Framework
- Material UI — UI components
- MongoDB — Database
- NextAuth.js — Authentication
- Google Gemini API — AI engine

## Getting started

Setup video: https://www.youtube.com/watch?v=HmpXFbpzquU

### Prerequisites

- Node.js (>= 18.0.0)
- A MongoDB database (local or hosted)
- A Google Cloud project with OAuth 2.0 credentials (for Gmail access)
- A Google Gemini API key

> Note: At the moment NotaBeen supports Gmail only.

### 1. Clone the repository

Run:

```pwsh
git clone https://github.com/NotaBeen/notabeen-ai-email-assistant.git
cd notabeen-ai-email-assistant
```

### 2. Install dependencies

Install with npm (or your preferred Node package manager):

```pwsh
npm install
# or
pnpm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file at the project root and add the variables below.
Replace placeholders with your real values.

```env
# NextAuth & Security
AUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (Authentication & Gmail Access)
# NOTE: Enable Gmail API scope in Google Cloud. Callback URL:
# http://localhost:3000/api/auth/callback/google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Database & Encryption
MONGODB_URI=
MONGO_CLIENT=
ENCRYPTION_IV=
ENCRYPTION_KEY=

# AI Engine
GEMINI_API_KEY=
```

#### Quick helpers to generate secrets (PowerShell / cross-platform)

- Generate `AUTH_SECRET` (Node):

```pwsh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

- Generate `ENCRYPTION_IV` and `ENCRYPTION_KEY` using Node (base64):

```pwsh
node -e "console.log(require('crypto').randomBytes(9).toString('base64'))"   # ENCRYPTION_IV
node -e "console.log(require('crypto').randomBytes(24).toString('base64'))"  # ENCRYPTION_KEY
```

Note: On Unix-like systems you can also use `openssl rand -base64 9` / `openssl rand -base64 24`.

### 4. Run the development server

Start the app locally:

```pwsh
npm run dev
# or (if the repo provides a Bun script)
bun dev
```

### 5. Open the app

Visit http://localhost:3000 in your browser.

## Additional notes

- Make sure your Google Cloud OAuth consent screen and credentials are configured
	and that the Gmail API is enabled for the project.
- `NEXTAUTH_URL` should match the URL you use to access the app (use `https://...`
	in production).
- Keep your API keys and encryption secrets private.

## Contributing

We ❤️ contributions — open a pull request to fix a bug, add a feature, or improve
documentation. Please follow standard GitHub PR practices and include a short
description of your change and the reason for it.

## License

This project is available under the MIT Expat License. See the repository
`LICENSE` for details.

## Links

- Repo: https://github.com/NotaBeen/notabeen-ai-email-assistant
- Issues: https://github.com/NotaBeen/notabeen-ai-email-assistant/issues
- README source: https://github.com/NotaBeen/notabeen-ai-email-assistant/blob/main/README.md

