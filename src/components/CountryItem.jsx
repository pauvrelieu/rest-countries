export function CountryItem({ country }) {
  return (
    <article>
      <img src={country.flags.svg} alt={`The ${country.name} flags`} />
      <h2>{country.name}</h2>
      <ul>
        <li>
          <strong>Population</strong>: {country.population}
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
}
