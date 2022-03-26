const serverStore = require("../serverStore");
const roomsUpdates = require("./updates/rooms");

const roomJoinHandler = (socket, data) => {
	const { roomId } = data;

	const participantDetails = {
		userId: socket.user.userId,
		socketId: socket.ID,
	};

	const roomDetails = serverStore.getActiveRoom(roomId);

	serverStore.joinActiveRoom(roomId, participantDetails);

	roomsUpdates.updateRooms();
};

module.exports = roomJoinHandler;
