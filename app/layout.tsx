import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    template: '%s – AI Agents Handbook',
    default: 'AI Agents Handbook'
  },
  description: 'Your comprehensive guide to building AI agents'
}

const navbar = (
  <Navbar
    logo={<b>AI Agents Handbook</b>}
    projectLink="https://github.com/kapilgupta101292/ai-agents-handbook"
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © AI Agents Handbook.
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/kapilgupta101292/ai-agents-handbook"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
