# Contributing to Notabeen Documentation

Thank you for your interest in contributing to the Notabeen documentation! 🎉

This guide will help you get started with contributing to our documentation project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Documentation Structure](#documentation-structure)
- [Writing Guidelines](#writing-guidelines)
- [Submitting Changes](#submitting-changes)
- [Review Process](#review-process)

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. We expect all contributors to:

- Be respectful and considerate
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## 🤔 How Can I Contribute?

There are many ways to contribute to the Notabeen documentation:

### 1. Report Documentation Issues

Found something unclear or incorrect?

- Check if the issue [already exists](https://github.com/yipfram/notabeen-docs/issues)
- If not, [create a new issue](https://github.com/yipfram/notabeen-docs/issues/new)
- Provide:
  - Page URL or file path
  - Description of the issue
  - Suggestion for improvement (if applicable)

### 2. Improve Existing Documentation

- Fix typos and grammatical errors
- Clarify confusing sections
- Add missing information
- Update outdated content
- Improve code examples

### 3. Add New Documentation

- Create new guides or tutorials
- Document undocumented features
- Add troubleshooting guides
- Create FAQ sections
- Add examples and use cases

### 4. Enhance Visual Content

- Add helpful screenshots
- Create diagrams and flowcharts
- Design better visual explanations
- Improve the overall layout

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- [pnpm](https://pnpm.io/) (recommended), npm, or [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)
- A [GitHub account](https://github.com/)

### Setting Up Your Environment

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the [repository page](https://github.com/yipfram/notabeen-docs).

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/notabeen-docs.git
   cd notabeen-docs
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/yipfram/notabeen-docs.git
   ```

4. **Install dependencies**

   ```bash
   pnpm install
   ```

5. **Start the development server**

   ```bash
   pnpm docs:dev
   ```

6. **Open your browser**

   Navigate to `http://localhost:5173` to see the documentation locally.

## 📁 Documentation Structure

```
docs/
├── .vitepress/          # VitePress configuration
│   └── config.js        # Site configuration
├── public/              # Static assets
├── index.md             # Home page
└── guide/               # Documentation sections
    ├── getting-started/ # Getting started guides
    ├── configuration/   # Configuration guides
    ├── features/        # Feature documentation
    └── contributing/    # Contribution guides
```

### File Naming Conventions

- Use lowercase with hyphens: `getting-started.md`
- Be descriptive: `docker-installation.md` instead of `docker.md`
- Keep names concise but clear

## ✍️ Writing Guidelines

### General Principles

1. **Clarity First**: Write for users who may be unfamiliar with the topic
2. **Be Concise**: Get to the point quickly
3. **Show, Don't Just Tell**: Include examples and code snippets
4. **Test Everything**: Verify all instructions and code examples work

### Markdown Formatting

#### Headers

Use appropriate header levels:

```markdown
# Page Title (H1) - One per page
## Main Sections (H2)
### Subsections (H3)
#### Minor Sections (H4)
```

#### Code Blocks

Always specify the language for syntax highlighting:

```markdown
\`\`\`bash
npm install notabeen
\`\`\`

\`\`\`javascript
const notabeen = require('notabeen');
\`\`\`
```

#### Callouts

Use VitePress custom containers for important information:

```markdown
::: tip
Helpful tips and best practices
:::

::: warning
Important warnings or caveats
:::

::: danger
Critical information that could cause issues
:::

::: info
Additional context or explanations
:::
```

#### Links

- Use relative links for internal pages: `[Installation](/guide/getting-started/installation)`
- Use absolute URLs for external links: `[VitePress](https://vitepress.dev/)`

#### Images

- Store images in `docs/public/images/`
- Use descriptive filenames
- Always include alt text

```markdown
![Notabeen Dashboard](../public/images/dashboard.png)
```

### Writing Style

#### Voice and Tone

- **Use second person**: "You can install Notabeen..." (not "One can install...")
- **Be conversational**: Write as if explaining to a colleague
- **Be encouraging**: "Great job! You've successfully installed Notabeen."
- **Avoid jargon**: Explain technical terms when first used

#### Grammar and Punctuation

- Use American English spelling
- Use the Oxford comma: "apples, oranges, and bananas"
- Keep sentences concise (aim for 20-25 words)
- Use active voice: "Run the command" (not "The command should be run")

#### Code Examples

- Test all code examples before submitting
- Include necessary context (imports, setup, etc.)
- Add comments to explain complex logic
- Show expected output when relevant

```javascript
// Good example with context
import { NotabeenClient } from 'notabeen';

// Initialize the client with your API key
const client = new NotabeenClient({
  apiKey: process.env.NOTABEEN_API_KEY
});

// Fetch email summaries
const summaries = await client.getSummaries();
console.log(summaries);
// Expected output: [{ id: '1', summary: '...' }, ...]
```

## 📤 Submitting Changes

### Branch Naming

Use descriptive branch names:

- `docs/add-docker-guide` - Adding new documentation
- `docs/fix-installation-typos` - Fixing issues
- `docs/update-api-reference` - Updating existing docs
- `docs/improve-getting-started` - Improvements

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
docs: add Docker installation guide
docs: fix typo in installation instructions
docs: update API reference for v2.0
docs: improve getting started guide clarity
```

### Pull Request Process

1. **Sync with upstream**

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a new branch**

   ```bash
   git checkout -b docs/your-feature-name
   ```

3. **Make your changes**

   Edit the documentation files as needed.

4. **Test locally**

   ```bash
   pnpm docs:dev
   ```

   Visit `http://localhost:5173` and verify your changes.

5. **Build to check for errors**

   ```bash
   pnpm docs:build
   ```

6. **Commit your changes**

   ```bash
   git add .
   git commit -m "docs: describe your changes"
   ```

7. **Push to your fork**

   ```bash
   git push origin docs/your-feature-name
   ```

8. **Open a Pull Request**

   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill in the PR template with:
     - **Title**: Clear, concise description
     - **Description**: What changed and why
     - **Related Issues**: Link any related issues
     - **Screenshots**: If visual changes were made

### Pull Request Template

```markdown
## Description
Brief description of your changes

## Type of Change
- [ ] Bug fix (typo, broken link, etc.)
- [ ] New content (new guide, section, etc.)
- [ ] Content improvement (clarity, examples, etc.)
- [ ] Other (please describe)

## Checklist
- [ ] I have tested my changes locally
- [ ] I have followed the writing guidelines
- [ ] All links work correctly
- [ ] All code examples have been tested
- [ ] I have checked for typos and grammatical errors
- [ ] My changes build without errors (`pnpm docs:build`)

## Related Issues
Closes #(issue number)

## Screenshots (if applicable)
Add screenshots here
```

## 🔍 Review Process

### What to Expect

1. **Automated Checks**: GitHub Actions will run build tests
2. **Maintainer Review**: A maintainer will review your PR within 3-5 business days
3. **Feedback**: You may be asked to make changes
4. **Approval**: Once approved, your PR will be merged

### Review Criteria

Reviewers will check for:

- ✅ Accuracy of information
- ✅ Clarity and readability
- ✅ Proper formatting and structure
- ✅ Working code examples
- ✅ Proper grammar and spelling
- ✅ Consistency with existing documentation
- ✅ Build passes without errors

## 🎯 Best Practices

### Do's ✅

- Keep PRs focused on a single topic
- Write clear commit messages
- Test all code examples
- Add screenshots for UI changes
- Link to related issues
- Be responsive to feedback
- Ask questions if unsure

### Don'ts ❌

- Don't make massive changes in a single PR
- Don't skip testing your changes locally
- Don't ignore build errors
- Don't forget to update the table of contents if needed
- Don't be discouraged by feedback—it helps improve the docs!

## 💬 Getting Help

If you need help or have questions:

- **GitHub Discussions**: [Ask a question](https://github.com/yipfram/notabeen-docs/discussions)
- **Issues**: [Report a problem](https://github.com/yipfram/notabeen-docs/issues)
- **Main Project**: [Notabeen Repository](https://github.com/NotaBeen/notabeen-ai-email-assistant)

## 🙏 Recognition

All contributors will be:

- Listed in our contributors section
- Acknowledged in release notes
- Forever appreciated by the community! ❤️

## 📄 License

By contributing to this documentation, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for helping make Notabeen documentation better! 🚀
