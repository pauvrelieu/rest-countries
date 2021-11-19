export const get = async function (endpoint) {
  const response = await fetch(`https://restcountries.com/v2/${endpoint}`)

  if (response.ok) {
    return await response.json()
  }

  throw response
}
