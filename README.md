# Notabeen Documentation

![Notabeen Banner](https://github.com/NotaBeen/notabeen-ai-email-assistant/raw/main/public/notabeen-welcome.gif)

Welcome to the official documentation repository for **Notabeen** — an open-source AI-powered email assistant that helps you take control of your inbox.

## 📚 About This Repository

This repository contains the source code for the Notabeen documentation website, built with [VitePress](https://vitepress.dev/). The documentation provides comprehensive guides, tutorials, and references for using and contributing to Notabeen.

## 🌐 Live Documentation

Visit the live documentation at: [docs.notabeen.com](https://docs.notabeen.com) *(or your deployment URL)*

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/)
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yipfram/notabeen-docs.git
cd notabeen-docs
```

2. Install dependencies:
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using bun
bun install
```

3. Start the development server:
```bash
# Using pnpm
pnpm docs:dev

# Or using npm
npm run docs:dev

# Or using bun
bun run docs:dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 Documentation Structure

```
docs/
├── index.md                 # Home page
└── guide/
    └── getting-started/
        ├── introduction.md  # Introduction to Notabeen
        └── installation.md  # Installation guide
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm docs:dev` | Start the development server |
| `pnpm docs:build` | Build the documentation for production |
| `pnpm docs:preview` | Preview the production build locally |

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing typos, improving existing documentation, or adding new guides, your help is appreciated.

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

### Quick Contribution Guide

1. Fork the repository
2. Create a new branch (`git checkout -b docs/improve-installation-guide`)
3. Make your changes
4. Test locally with `pnpm docs:dev`
5. Commit your changes (`git commit -m 'docs: improve installation guide'`)
6. Push to your branch (`git push origin docs/improve-installation-guide`)
7. Open a Pull Request

## 📝 Writing Guidelines

- Write in clear, concise language
- Use proper Markdown formatting
- Include code examples where applicable
- Add screenshots or diagrams for complex concepts
- Follow the existing documentation structure
- Test all code examples before submitting

## 🐛 Found an Issue?

If you find an error in the documentation or have a suggestion for improvement:

1. Check if an [issue already exists](https://github.com/yipfram/notabeen-docs/issues)
2. If not, [create a new issue](https://github.com/yipfram/notabeen-docs/issues/new)
3. Provide as much detail as possible

## 📬 Links

- **Main Project**: [NotaBeen AI Email Assistant](https://github.com/NotaBeen/notabeen-ai-email-assistant)
- **Website**: [notabeen.com](https://notabeen.com)
- **Documentation**: [docs.notabeen.com](https://docs.notabeen.com)
- **Issues**: [GitHub Issues](https://github.com/yipfram/notabeen-docs/issues)

## 📄 License

This documentation is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [VitePress](https://vitepress.dev/)
- Powered by the Notabeen community
- Thanks to all contributors who help improve this documentation

---

<div align="center">
Made with ❤️ by the Notabeen Community
</div>
