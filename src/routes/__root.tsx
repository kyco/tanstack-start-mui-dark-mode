/// <reference types="vite/client" />
import * as React from 'react'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles/app.css?url'

import ThemeProvider from '../components/ThemeProvider'
import { getThemeFromCookie } from '../lib/theme/theme.functions'
import type { ColorMode } from '../types-enums'

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

function RootDocument({
  theme,
  children
}: {
  theme: ColorMode,
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={theme}>
      <head>
        <HeadContent />
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
