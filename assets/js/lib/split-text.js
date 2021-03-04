const SplitText = elem => {
  const generateDiv = word => {
    const div = document.createElement('div')
    div.setAttribute('style', 'position: relative; display: inline-block;')
    div.innerText = word
    return div
  }

  const innerText = elem.innerText
  const words = innerText.split(' ')
  elem.innerText = ''
  const list = words.map(generateDiv)
  while (list.length) {
    const div = list.shift()
    elem.appendChild(div)
    elem.appendChild(document.createTextNode(' '))
  }
}

export default SplitText
