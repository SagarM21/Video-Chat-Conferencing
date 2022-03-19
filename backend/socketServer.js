const registerSocketServer = (server) => {
	const io = require("socket.io")(server, {
		cors: {
			origin: "",
			methods: ["GET", "POST"],
		},
	});

	io.on("connection", (socket) => {
		console.log("User connected");
		console.log(socket.io);
	});
};

module.exports = { registerSocketServer };
