const io = require('socket.io')(3000)

io.on('connection', (socket) => {
  socket.emit('hello', 'world')
  socket.on('from', (e) => {
    console.log(e)
  })
  setTimeout(() => {
    socket.emit('hello', 'react')
  }, 200)
})
