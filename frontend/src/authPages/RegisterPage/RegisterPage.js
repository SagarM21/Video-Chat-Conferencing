import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { validateRegisterForm } from "../../shared/utils/validators";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";

const RegisterPage = () => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const [isFormValid, setIsFormValid] = useState(false);

	const handleRegister = () => {
		console.log(mail);
		console.log(username);
		console.log(password);
		console.log("registering");
	};

	useEffect(() => {
		setIsFormValid(validateRegisterForm({ mail, username, password }));
	}, [mail, username, password, setIsFormValid]);
	return (
		<AuthBox>
			<Typography variant='h5' sx={{ color: "white" }}>
				Create an Account
			</Typography>
			<RegisterPageInputs
				mail={mail}
				username={username}
				setMail={setMail}
				setUsername={setUsername}
				password={password}
				setPassword={setPassword}
			/>
			<RegisterPageFooter
				handleRegister={handleRegister}
				isFormValid={isFormValid}
			/>
		</AuthBox>
	);
};

export default RegisterPage;
