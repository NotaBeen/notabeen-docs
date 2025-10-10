import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ZoomableImage from './components/ZoomableImage.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('ZoomableImage', ZoomableImage)
  }
} satisfies Theme
