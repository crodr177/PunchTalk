import React, { useContext } from 'react'
import { AuthContext } from "../lib/auth"
import Input from './Input'
import Messages from './Messages'

const ChatField = (props) => {
  const { signout, user } = useContext(AuthContext)
  console.log(user)

  function logout() {
    signout()
    props.history.push("/")
  }

  return (
    <div id="main-page">
      <div className="main-column">
        <h1>{user}</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="messages-column">
        <Messages/>
        <Input/>
      </div>
    </div>
  )
}

export default ChatField