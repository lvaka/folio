/*
Truncate Text and add ellipses

  params:
    text - string of text to truncate
    trunc - how many characters to truncate
    end - what string to terminate text with
*/
const truncate = (text, trunc = 160, end = '...') => {
  text = text.replace(/(<([^>]+)>)/ig, '')
  if (text && typeof text === 'string' && text.length > trunc) {
    text = text.slice(0, trunc)
    text += end
  }

  return text
}

export { truncate }
