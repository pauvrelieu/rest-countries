import { useEffect } from 'preact/hooks'
import { getTheme, setTheme } from '../utils/functions'
import { MoonIcon } from './icons/MoonIcon'

export function ThemeSwitch() {
  useEffect(() => {
    const body = document.body
    const switchElement = document.querySelector('.theme-switch')
    const theme = getTheme()

    if (theme) {
      body.classList.add('theme-dark')
    }

    switchElement.addEventListener('click', function () {
      if (!body.classList.contains('theme-dark')) {
        body.classList.add('theme-dark')
        setTheme('theme-dark')
      } else {
        body.classList.remove('theme-dark')
        setTheme('')
      }
    })
  })

  return (
    <p class="theme-switch">
      <MoonIcon />
      <span>Dark Mode</span>
    </p>
  )
}
