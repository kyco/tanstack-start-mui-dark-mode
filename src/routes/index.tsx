import { createFileRoute } from '@tanstack/react-router'
import Button from '@mui/material/Button';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <main>
      <h1>Hello world!</h1>
      <Button variant="contained">Hello world</Button>
    </main>
  )
}
