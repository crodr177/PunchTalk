import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://192.168.0.25:3001')
console.log(socket)

export function sendText({text, user, time}) {
  socket.emit('new message', {text, user, time})
}

socket.on('new message', text => {
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

export function getUser(user){
  socket.emit('get user', user)
}

socket.on('list user', users => {
  console.log(users)
  store.dispatch({
    type:'GET_USER_LIST',
    payload: users
  })
})