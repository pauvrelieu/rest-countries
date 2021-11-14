import { SearchIcon } from './icons/SearchIcon'

export function SearchField({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const search = e.target.search.value
    if (search) {
      onSubmit(search)
    }
    e.target.search.value = ''
  }

  return (
    <form onSubmit={handleSubmit} class="search-field">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for a country"
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  )
}
