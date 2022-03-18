import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthBox from "../../shared/components/AuthBox";
import { validateRegisterForm } from "../../shared/utils/validators";
import { getActions } from "../../store/actions/authActions";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";

const RegisterPage = ({ register }) => {
	const navigate = useNavigate();
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const [isFormValid, setIsFormValid] = useState(false);

	const handleRegister = () => {
		const userDetails = {
			mail,
			password,
			username,
		};
		register(userDetails, navigate);
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

const mapActionsToProps = (dispatch) => {
	return {
		...getActions(dispatch),
	};
};

export default connect(null, mapActionsToProps)(RegisterPage);
