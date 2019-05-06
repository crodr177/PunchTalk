import React from 'react'

import Input from './Input'
import Messages from './Messages'

const ChatField = (props) => {
  return (
    <div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default ChatField