import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as roomHandler from "../../../realtimeCommunication/socketConnection";

const CloseRoomButton = () => {
	const handleLeaveRoom = () => {
		roomHandler.leaveRoom();
	};
	console.log(handleLeaveRoom);
	return (
		<IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
			<CloseIcon />
		</IconButton>
	);
};

export default CloseRoomButton;
