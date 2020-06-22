import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../components/Modal'

const Contact = () => {
  const [modalState, setModalState] = useState(false)

  const [formSet, setFormSet] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [modalMessage, setModalMessage] = useState('')

  const handleInput = e => {
    const value = e.target.value
    const name = e.target.name

    setFormSet({
      ...formSet,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData()
    form.set('name', formSet.name)
    form.set('email', formSet.email)
    form.set('message', formSet.message)

    axios.post('/contact-submit', form)
      .then(res => {
        setFormSet({
          name: '',
          email: '',
          message: ''
        })
        setModalMessage('Message Sent')
      })
      .catch(e => setModalMessage('Invalid Email Data'))
  }

  useEffect(() => {
    if (modalMessage !== '') setModalState(true)
  }, [modalMessage])

  useEffect(() => {
    if (!modalState) setModalMessage('')
  }, [modalState])

  return (
    <div id='contact'>
      <Modal active={modalState} setActive={setModalState}>
        <h2 className='text-center'>{modalMessage}</h2>
      </Modal>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <h1>Send Me a Message</h1>
            <form onSubmit={handleSubmit}>
              <div className='input-group'>
                <input
                  type='text' placeholder='Name' name='name'
                  value={formSet.name}
                  onChange={handleInput}
                />
              </div>
              <div className='input-group'>
                <input
                  type='e-mail' placeholder='Email' name='email'
                  value={formSet.email}
                  onChange={handleInput}
                />
              </div>
              <textarea
                name='message'
                value={formSet.message}
                placeholder='Leave a message'
                maxLength='500'
                onChange={handleInput}
              />
              <small className='wordCount'>{500 - formSet.message.length} remaining characters</small>
              <input
                type='submit'
                value='Send Message'
                className='btn btn-primary mt-3'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
