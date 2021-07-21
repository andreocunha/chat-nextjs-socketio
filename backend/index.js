const io = require("socket.io")(4000, {
    cors: {
        origin: '*',
    }
});

let mensagens = []

io.on("connection", socket => {
    console.log("USUARIO: " + socket.id);

    socket.emit('messagesChat', mensagens);

    socket.on('novaMensagem', msg => {
        mensagens.push(msg)
        io.emit('messagesChat', mensagens);
    })
})