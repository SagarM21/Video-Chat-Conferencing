const serverStore = require("../serverStore");

const newConnectionHandler = async (socket, io) => {
	const userDetails = socket.user;

	serverStore.addNewConnectedUser({
		socketId: socket.id,
		usedId: userDetails.userId,
	});
};

module.exports = newConnectionHandler;
