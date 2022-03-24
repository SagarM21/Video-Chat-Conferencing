import { roomActions } from "../actions/roomActions";

const initialState = {
	isUserOnline: false,
	isUserRoomCreator: false,
	roomDetails: null,
	activeRooms: [],
	localStream: null,
	remoteStream: [],
	audioOnly: false,
	screenSharingStream: null,
	isScreenSharingActive: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case roomActions.OPEN_ROOM:
			return {
				...state,
				isUserInRoom: action.isUserInRoom,
				isUserRoomCreator: action.isUserRoomCreator,
			};
		default:
			return state;
	}
};

export default reducer;
