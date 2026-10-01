import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DWIHN AI Learning Curriculum',
  description: 'Beginner-to-applied AI learning for safe, practical work at DWIHN.',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#087f8c' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    siteTitle: 'DWIHN AI Curriculum',
    nav: [
      { text: 'Curriculum', link: '/' },
      { text: 'Start learning', link: '/modules/01-ai-foundations' }
    ],
    sidebar: [
      {
        text: 'Course guide',
        items: [{ text: 'Curriculum overview', link: '/' }]
      },
      {
        text: 'Foundations',
        collapsed: false,
        items: [
          { text: '1. What AI Is and Is Not', link: '/modules/01-ai-foundations' },
          { text: '2. Approved Tools and HIPAA Safety', link: '/modules/02-approved-tools' },
          { text: '3. Data Classification in Practice', link: '/modules/03-data-classification' }
        ]
      },
      {
        text: 'Everyday practice',
        collapsed: false,
        items: [
          { text: '4. Prompting Skills', link: '/modules/04-prompting-skills' },
          { text: '5. AI in Daily Work', link: '/modules/05-daily-work' }
        ]
      },
      {
        text: 'Role-based tools',
        collapsed: false,
        items: [
          { text: '6. Lumenore Impact', link: '/modules/06-lumenore-impact' },
          { text: '7. Genesys AI', link: '/modules/07-genesys-ai' },
          { text: '8. Objective Decisions with Data', link: '/modules/08-objective-decisions' }
        ]
      },
      {
        text: 'Responsible application',
        collapsed: false,
        items: [
          { text: '9. Governance and Incidents', link: '/modules/09-governance-incidents' },
          { text: '10. Applied Learning', link: '/modules/10-applied-learning' }
        ]
      }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous module', next: 'Next module' },
    footer: {
      message: 'Use fictional training data unless DWIHN has explicitly approved another practice environment.',
      copyright: 'DWIHN AI Learning Curriculum'
    }
  }
})
