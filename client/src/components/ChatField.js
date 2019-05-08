import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../lib/auth"
import Input from './Input'
import Messages from './Messages'
import UserList from './UserList'
import { getUser } from '../actions/actions'

const ChatField = (props) => {
  const { signout, user } = useContext(AuthContext)

  useEffect(() => {
    getUser(user)
  })

  function logout() {
    signout()
    props.history.push("/")
    window.location.reload();
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
      <div className="userlist-column">
        <UserList/>
      </div>
    </div>
  )
}

export default ChatField