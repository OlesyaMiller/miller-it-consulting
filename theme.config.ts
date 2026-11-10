import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Miller It Consulting',
  id: 'miller-it-consulting',
  seo: {
    title: 'Miller It Consulting',
    description: 'Miller It Consulting is an accessible Astro site with blog, portfolio, and demo pages ready to customize.',
    image: previewImage,
  },
  logo: logoImage,
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
              type: 'link',
              label: 'Home',
              href: '/',
            },
      {
              type: 'link',
              label: 'Blog',
              href: '/blog',
            },
      {
              type: 'link',
              label: 'Portfolio',
              href: '/portfolio',
            },
      {
              type: 'dropdown',
              label: 'Features',
              items: [
                {
                            label: 'Accessibility statement',
                            href: '/accessibility-statement',
                          },
                {
                            label: 'Accessible components',
                            href: '/accessible-components',
                          },
                {
                            label: 'Accessible launcher',
                            href: '/accessible-launcher',
                          },
                {
                            label: 'Color contrast checker',
                            href: '/color-contrast-checker',
                          },
                {
                            label: 'Markdown page',
                            href: '/markdown-page',
                          },
                {
                            label: 'MDX page',
                            href: '/mdx-page',
                          },
                {
                            label: 'Sitemap',
                            href: '/sitemap',
                          }
              ],
            },
      {
              type: 'link',
              label: 'Contact',
              href: '/contact',
            }
    ],
  },
  socials: [],
})
