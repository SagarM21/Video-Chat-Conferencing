import { styled } from "@mui/system";
import React from "react";

const AvatarPreview = styled("div")({
	height: "42px",
	width: "42px",
	borderRadius: "42px",
	backgroundColor: "#5865f2",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "20px",
	fontWeight: "700",	
	color: "white",
});

const Avatar = ({ username, large }) => {
	return (
		<AvatarPreview style={large ? { height: "80px", width: "80px" } : {}}>
			{username.substring(0, 2)}
		</AvatarPreview>
	);
};

export default Avatar;
