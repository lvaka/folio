/*
Scroll to Element.

  Find and element by ID and then trigger scrollIntoView method.

*/
const elemScrollTo = (e, elemId) => {
  e.preventDefault()
  const elem = document.getElementById(elemId)

  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.log('No Element in DOM')
  }
}

export { elemScrollTo }
