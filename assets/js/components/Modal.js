import React, { useRef, useEffect } from 'react'

const clickOnElement = (e, element) => {
  const mouseX = e.clientX
  const mouseY = e.clientY
  const [top, bottom, left, right] = [
    element.getBoundingClientRect().top,
    element.getBoundingClientRect().bottom,
    element.getBoundingClientRect().left,
    element.getBoundingClientRect().right
  ]

  return (mouseX > left && mouseX < right) &&
    (mouseY > top && mouseY < bottom)
}

const Modal = props => {
  const modal = useRef()
  const modalContent = useRef()

  const hide = () => props.setActive(false)
  const handleClick = e => {
    const clickedOn = clickOnElement(e, modalContent.current)
    if (!clickedOn) hide()
  }

  useEffect(() => {
    if (modal.current) {
      props.active
        ? modal.current.classList.add('active')
        : modal.current.classList.remove('active')
    }
  })

  return (
    <div
      ref={modal}
      className='modal-container'
      onClick={handleClick}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div ref={modalContent} className='modal-content'>
              {props.active && props.children}
              <div className='text-center'>
                <a
                  href='#'
                  className='btn btn-primary m-3'
                  onClick={hide}
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
