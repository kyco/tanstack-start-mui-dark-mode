/// <reference types="vite/client" />
import * as React from 'react'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles/app.css?url'

import ThemeProvider from '../components/ThemeProvider'
import { getThemeFromCookie } from '../lib/theme/theme.functions'
import darkModeScript from '../lib/theme/darkModeScript?raw'
import { ColorMode } from '../types-enums'

export const Route = createRootRoute({
  loader: async () => {
    const theme = await getThemeFromCookie()
    return { theme }
  },
  head: () => ({
    links: [{ rel: 'stylesheet', href: appCss }],
    meta: [{ name: 'color-scheme', content: 'light dark' }],
  }),
  component: RootComponent,
})

function RootComponent() {
  const { theme } = Route.useLoaderData()

  return (
    <ThemeProvider defaultMode={theme}>
      <RootDocument theme={theme}>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  )
}

type RootDocumentProps = {
  theme: ColorMode,
  children: React.ReactNode
}

function RootDocument({ theme, children }: RootDocumentProps) {
  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <head>
        <HeadContent />
        {theme === ColorMode.SYSTEM ? (
          <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
        ) : null}
      </head>
      <body>
        <div>
          <Link to="/">Index</Link>
          <Link to="/about">About</Link>
        </div>

        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
