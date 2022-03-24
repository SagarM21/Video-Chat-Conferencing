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
		default:
			return state;
	}
};

export default reducer;
