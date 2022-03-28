import {
	setLocalStream,
	setRemoteStreams,
	setRoomDetails,
} from "../store/actions/roomActions";
import store from "../store/store";
import Peer from "simple-peer";
import * as socketConnection from "./socketConnection";

const getConfiguration = () => {
	const turnIceServers = null;

	if (turnIceServers) {
		// use TURN server credential
	} else {
		console.warn("Using only turn server");
		return {
			iceServers: [
				{
					urls: "stun:stun.1.google.com:19302", // to get our internet details connection
				},
			],
		};
	}
};

const onlyAudioConstraints = {
	audio: true,
	video: false,
};

const defaultConstraints = {
	video: true,
	audio: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
	const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

	// mediaDevices is provided by browser
	navigator.mediaDevices
		.getUserMedia(constraints)
		.then((stream) => {
			store.dispatch(setLocalStream(stream));
			callbackFunc();
		})
		.catch((err) => {
			console.log(err);
			console.log("Cant get access to local camera");
		});
};

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
	const localStream = store.getState().room.localStream;

	if (isInitiator) {
		console.log("preparing new connection as initiator");
	} else {
		console.log("preparing new connection as not initiator");
	}

	peers[connUserSocketId] = new Peer({
		initiator: isInitiator,
		config: getConfiguration(),
		stream: localStream,
	});

	peers[connUserSocketId].on("signal", (data) => {
		const signalData = {
			signal: data,
			connUserSocketId: connUserSocketId,
		};

		socketConnection.signalPeerData(signalData);
	});

	peers[connUserSocketId].on("stream", (remoteStream) => {
		// add new remote server to our server store
		console.log("remote stream came from other user");
		console.log("direct connection has been established");
		remoteStream.connUserSocketId = connUserSocketId;
		addNewRemoteStream(remoteStream);
	});
};

export const handleSignalingData = (data) => {
	const { connUserSocketId, signal } = data;
	if (peers[connUserSocketId]) {
		peers[connUserSocketId].signal(signal);
	}
};

const addNewRemoteStream = (remoteStream) => {
	const remoteStreams = store.getState().room.remoteStreams;
	const newRemoteStreams = [...remoteStreams, remoteStream];

	store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const closeAllConnections = () => {
	Object.entries(peers).forEach((mappedObject) => {
		const connUserSocketId = mappedObject[0];
		if (peers[connUserSocketId]) {
			peers[connUserSocketId].destroy();
			delete peers[connUserSocketId];
		}
	});
};

export const handleParticipantLeftRoom = (data) => {
	const { connUserSocketId } = data;
	if (peers[connUserSocketId]) {
		peers[connUserSocketId].destroy();
		delete peers[connUserSocketId];
	}

	const remoteStreams = store.getState().room.remoteStreams;

	const newRemoteStreams = remoteStreams.filter(
		(remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
	);

	store.dispatch(setRemoteStreams(newRemoteStreams));
};
