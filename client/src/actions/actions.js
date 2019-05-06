import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://localhost:3001')
console.log(socket)

export function sendText(text) {
  socket.emit('new message', text)
  console.log(text)
}

socket.on('new message', text => {
  store.dispatch({
    type: 'GET_MESSAGES',
    payload: text
  })
})

