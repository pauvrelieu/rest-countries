import slugify from "slugify"

export const getTheme = () => localStorage.getItem('theme')
export const setTheme = (theme) => localStorage.setItem('theme', theme)

export const getSlugify = function (value) {
  return slugify(value, { lower: true, strict: true })
}
