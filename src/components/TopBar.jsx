import { Link } from 'react-router-dom'
import { ThemeSwitch } from './ThemeSwitch'

export function TopBar() {
  return (
    <header class="topbar">
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>
      <ThemeSwitch />
    </header>
  )
}
