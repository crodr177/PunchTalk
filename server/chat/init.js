const initSocket = function(io) {
  let users = []
  
  io.on("connection", socket => {
    console.log("connected")

    socket.on('new message', text => {
      io.emit('new message', text)
    })

    socket.on('isTyping', isTyping => {
      io.emit('isTyping', isTyping)
    })

    socket.on('get user', user => {
      users.push({
        user,
        id: socket.id
      })
      io.emit('list user', users)
    })

    socket.on('disconnect', () => {
      users = users.filter(user => user.id !== socket.id)
      io.emit('list user', users)
    })
  })
}

module.exports = initSocket
