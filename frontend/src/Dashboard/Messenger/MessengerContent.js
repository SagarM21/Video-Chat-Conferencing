import { styled } from "@mui/system";
import React, { useEffect } from "react";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";

const Wrapper = styled("div")({
	flexGrow: 1,
});
const MessengerContent = ({ chosenChatDetails }) => {
	useEffect(() => {
		// Fetch chat history
	}, [chosenChatDetails]);
	return (
		<Wrapper>
			<Messages />
			<NewMessageInput />
		</Wrapper>
	);
};

export default MessengerContent;
