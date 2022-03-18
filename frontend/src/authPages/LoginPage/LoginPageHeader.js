import { Typography } from "@mui/material";
import React from "react";

const LoginPageHeader = () => {
	return (
		<>
			<Typography sx={{ color: "white" }} variant='h5'>
				Welcome Back!
			</Typography>
			<Typography sx={{ color: "#b9bbbe" }}>
				We are happy that you are with us!
			</Typography>
		</>
	);
};

export default LoginPageHeader;
