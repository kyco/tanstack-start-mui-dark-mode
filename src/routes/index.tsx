import { createFileRoute } from '@tanstack/react-router'

import ThemeSwitcher from '../components/ThemeSwitcher'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <main>
      <h1>Hello world!</h1>
      <ThemeSwitcher />
    </main>
  )
}
