import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
/*
Scroll to Element.

  Find and element by ID and then trigger scrollIntoView method.

*/
const elemScrollTo = (elemId) => {
  const elem = document.querySelector(elemId)

  if (elem) {
    gsap.to(window, { duration: 1, scrollTo: elemId })
  } else {
    console.log('No Element in DOM')
  }
}

export { elemScrollTo }
