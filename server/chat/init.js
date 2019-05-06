const initSocket = function(io) {
  io.on("connection", socket => {
    console.log("connected")

    socket.on('new message', text => {
      io.emit('new message', text)
    })
  })
}

module.exports = initSocket
