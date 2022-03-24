import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";

const MainContainer = styled("div")({
	width: "72px",
	height: "100vh",
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	backgroundColor: "#202225",
});

const SideBar = () => {
	return (
		<MainContainer>
			<MainPageButton />
			<CreateRoomButton />
		</MainContainer>
	);
};

export default SideBar;
