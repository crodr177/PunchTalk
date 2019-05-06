import React from 'react'
import { connect } from 'react-redux'

const Messages = (props) => {
  return(
    <ul id="message-list">
      {
        props.messages.map((message, i) => (
          <li className="message" key={"message-" + i}>{message}</li>
        ))
      }
    </ul>
  )
}

function mapStateToProps(appState){
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(Messages)