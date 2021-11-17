import { Link } from 'react-router-dom'
import { MoonIcon } from './icons/MoonIcon'

export function TopBar() {
  return (
    <header class="topbar">
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>
      <p>
        <MoonIcon />
        <span>Dark Mode</span>
      </p>
    </header>
  )
}
