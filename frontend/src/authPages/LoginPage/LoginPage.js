import React, { useEffect, useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import { validateLogInForm } from "../../shared/utils/validators";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";

const LoginPage = () => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(validateLogInForm({ mail, password }));
	}, [mail, setIsFormValid, password]);

	const handleLogin = () => {
		console.log("Handle login");
		console.log(mail);
		console.log(password);
	};
	return (
		<AuthBox>
			<LoginPageHeader />
			<LoginPageInputs
				mail={mail}
				setMail={setMail}
				password={password}
				setPassword={setPassword}
			/>
			<LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
		</AuthBox>
	);
};

export default LoginPage;
