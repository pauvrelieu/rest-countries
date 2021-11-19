import { memo } from 'preact/compat'

export const CountryCard = memo(({ country }) => {
  const population = new Intl.NumberFormat().format(country.population)

  return (
    <article class="country-card">
      <img src={country.flag} alt={`The ${country.name} country flags`} />
      <h2>{country.name}</h2>
      <ul>
        <li>
          <strong>Population</strong>: {population}
        </li>
        <li>
          <strong>Region</strong>: {country.region}
        </li>
        <li>
          <strong>Capital</strong>: {country.capital}
        </li>
      </ul>
    </article>
  )
})
