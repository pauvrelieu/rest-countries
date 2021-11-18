import { useEffect } from 'preact/hooks'
import { MoonIcon } from './icons/MoonIcon'

const getTheme = () => localStorage.getItem('theme')
const setTheme = (theme) => localStorage.setItem('theme', theme)

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
