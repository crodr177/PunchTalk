import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'

const Messages = (props) => {
  const chatBottom = useRef(null)

  useEffect(() => {
    chatBottom.current.scrollIntoView({ behavior: "smooth"})
  }, [props.messages])

  return(
    <div id="message-field">
      <p id="messages-typing">Messages: <span>{props.isTyping? "typing...": ''}</span></p>
      <ul id="message-list">
        {
          props.messages.map((message, i) => (
            <li className="message" key={"message-" + i}><p className="user">{message.user}</p><p className="text">{message.text}</p><p>{message.time}</p></li>
          ))
        }
        <div ref={chatBottom} />
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