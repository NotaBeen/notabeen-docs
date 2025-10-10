import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/notabeen-docs/',
  title: "Notabeen Documentation",
  description: "Open-Source AI-powered email assistant",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started/introduction' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/getting-started/introduction' },
            { text: 'Installation', link: '/guide/getting-started/installation' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NotaBeen/notabeen-ai-email-assistant' }
    ]
  }
})
