import React, { useState, useContext } from 'react'
import { sendText, setIsTyping } from '../actions/actions'
import { AuthContext } from "../lib/auth"
import moment from 'moment'

const Input = (props) => {
  const [text, setText] = useState("")
  const [time, setTime] = useState("")
  const { user } = useContext(AuthContext)

  function sendMessage(e) {
    e.preventDefault()
    sendText({text, user, time})
    setText('')
  }

  function handleChange(e) {
    setText(e.target.value)
    setIsTyping(true)
    setTime(moment().format('MMM D, h:mm a'))

    setTimeout(() => {
      setIsTyping(false)
    }, 800)
  }

  return (
    <form id="input-field" onSubmit={sendMessage}>
      <input type="text" value={text} placeholder="enter message" onChange={handleChange}/>
      <button type="submit">Send</button>
    </form>
  )
}

export default Input