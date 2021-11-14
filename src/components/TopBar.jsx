import { MoonIcon } from './icons/MoonIcon'

export function TopBar() {
  return (
    <header class="topbar">
      <h1>Where in the world?</h1>
      <p>
        <MoonIcon />
        <span>Dark Mode</span>
      </p>
    </header>
  )
}
