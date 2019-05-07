import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://10.68.0.118:3001')
console.log(socket)

export function sendText({text, user, time}) {
  socket.emit('new message', {text, user, time})
}

socket.on('new message', text => {
  console.log(text)

  store.dispatch({
    type: 'GET_MESSAGES',
    payload: text
  })
})

export function setIsTyping(isTyping){
  socket.emit('isTyping', isTyping)
}

socket.on('isTyping', isTyping => {
  store.dispatch({
    type: 'IS_TYPING',
    payload: isTyping
  })
})

