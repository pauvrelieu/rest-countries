import { MoonOutline } from './icons/MoonOutline'

export function TopBar() {
  return (
    <header class="topbar">
      <h1>Where in the world?</h1>
      <p>
        <MoonOutline />
        <span>Dark Mode</span>
      </p>
    </header>
  )
}
