import { useEffect, useState } from 'preact/hooks'
import { ChevronUpIcon } from './icons/ChevronUpIcon'

export function Select({ items, onChange }) {
  const [label, setLabel] = useState(items[0])

  useEffect(() => {
    onChange(label)
  }, [label])

  useEffect(() => {
    const select = document.querySelector('.select')
    const selectTitle = document.querySelector('.select__title')
    const selectUl = document.querySelector('.select__items')
    const selectLi = document.querySelectorAll('.select__items li')

    const hidden = function () {
      selectUl.setAttribute('aria-hidden', true)
      selectTitle.classList.remove('rotate')
    }

    const reveal = function () {
      selectTitle.classList.add('rotate')
      selectUl.removeAttribute('aria-hidden')
    }

    const selectToggle = function (e) {
      if (!select.contains(e.target)) {
        hidden()
      }

      if (selectTitle.contains(e.target)) {
        if (selectUl.hasAttribute('aria-hidden')) {
          reveal()
        } else {
          hidden()
        }
      }

      selectLi.forEach((li) => {
        if (li.contains(e.target)) {
          setLabel(li.dataset.value)
          hidden()
        }
      })
    }

    document.addEventListener('click', selectToggle)
    return () => document.removeEventListener('click', selectToggle)
  })

  return (
    <div class="select">
      <p class="select__title" tabIndex="0">
        <span>{label}</span>
        <ChevronUpIcon />
      </p>
      <ul class="select__items" aria-hidden="true">
        {items.map((item) => (
          <>
            {!item.includes(label) && (
              <li key={item} data-value={item}>
                {item}
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  )
}
