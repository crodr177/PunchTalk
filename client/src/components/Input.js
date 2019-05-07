import React, { useState } from 'react'
import { sendText, setIsTyping } from '../actions/actions'

const Input = (props) => {
  const [text, setText] = useState("")

  function sendMessage(e) {
    e.preventDefault()
    sendText(text)
  }

  function handleChange(e) {
    setText(e.target.value)
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
    }, 800)
  }

  return (
    <form id="input-field" onSubmit={sendMessage}>
      <input type="text" placeholder="enter message" onChange={handleChange}/>
      <button type="submit">Send</button>
    </form>
  )
}

export default Input