const io = require("socket.io")(process.env.PORT, {
    cors: {
        origin: process.env.ORIGIN,
    },
});

io.on("connection", (socket) => {
    console.log("a user connected.");
});
