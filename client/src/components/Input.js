import React, { useState } from 'react'
import { sendText } from '../actions/actions'

const Input = (props) => {
  const [text, setText] = useState("")

  function sendMessage(e) {
    e.preventDefault()
    sendText(text)
  }

  return (
    <form id="input-field" onSubmit={sendMessage}>
      <input type="text" placeholder="enter message" onChange={e => setText(e.target.value)}/>
      <button type="submit">Send</button>
    </form>
  )
}

export default Input