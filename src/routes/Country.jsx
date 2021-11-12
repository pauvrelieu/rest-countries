import { useEffect, useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

export function Country() {
  const [country, setCountry] = useState({})
  const [bordersCountries, setBordersCountries] = useState([])

  useEffect(() => {
    let params = new URLSearchParams(document.location.search.substring(1))
    const name = params.get('name')
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((response) => response.json())
      .then((response) => setCountry(...response))
  }, [])

  useEffect(() => {
    const codes = country?.borders?.join()
    if (codes) {
      fetch(`https://restcountries.com/v2/alpha?codes=${codes}`)
        .then((response) => response.json())
        .then(setBordersCountries)
    }
  }, [country])

  const currencies = country?.currencies?.map((c) => c.name).join(', ')
  const languages = country?.languages?.map((l) => l.name).join(', ')

  return (
    <article>
      <img
        src={country?.flags?.svg}
        alt={`The ${country.name} country flags`}
      />

      <h2>{country.name}</h2>

      <ul>
        <li>
          <strong>Native Name</strong>: {country.nativeName}
        </li>
        <li>
          <strong>Population</strong>: {country.population}
        </li>
        <li>
          <strong>Region</strong>: {country.region}
        </li>
        <li>
          <strong>Sub Region</strong>: {country.subregion}
        </li>
        <li>
          <strong>Capital</strong>: {country.capital}
        </li>
        <li>
          <strong>Top Level Domain</strong>: {country.topLevelDomain}
        </li>
        <li>
          <strong>Currencies</strong>: {currencies}
        </li>
        <li>
          <strong>Languages</strong>: {languages}
        </li>
      </ul>

      <p>
        <strong>Border Countries</strong>:{' '}
        {bordersCountries.length >= 0 && <span>None</span>}
      </p>

      {bordersCountries.length > 0 && (
        <nav>
          <ul>
            {bordersCountries?.map((country) => (
              <li key={country.name}>
                <Link to={`${slugify(country.name, { lower: true })}`}>
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </article>
  )
}
