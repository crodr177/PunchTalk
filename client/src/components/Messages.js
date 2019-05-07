import React , { useContext } from 'react'
import { connect } from 'react-redux'
import { AuthContext } from "../lib/auth"

const Messages = (props) => {
  const { user } = useContext(AuthContext)

  return(
    <div id="message-field">
      <p>Messages: {props.isTyping? "typing...": ''}</p>
      <ul id="message-list">
        {
          props.messages.map((message, i) => (
            <li className="message" key={"message-" + i}><p className="user">{user}</p><p className="text">{message}</p></li>
          ))
        }
      </ul>
    </div>
  )
}

function mapStateToProps(appState){
  return {
    messages: appState.messages,
    isTyping: appState.isTyping
  }
}

export default connect(mapStateToProps)(Messages)