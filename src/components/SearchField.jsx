import { memo } from 'react'
import { SearchIcon } from './icons/SearchIcon'

export const SearchField = memo(({ onInput }) => {
  const handleInput = (e) => {
    onInput(e.target.value)
  }

  return (
    <div class="search-field">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="Search for a country"
        onInput={handleInput}
      />
      <button type="submit" class="flat">
        <SearchIcon />
      </button>
    </div>
  )
})
