import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	let navigate = useNavigate();
	const handlePushToRegisterPage = () => {
		navigate("/register");
	};

	const getFormNotValidMessage = () => {
		return "Enter correct e-mail address and password should contain characters between 6 and 12 characters";
	};

	const getFormValidMessage = () => {
		return "Press to Login";
	};

	return (
		<>
			<Tooltip
				title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
			>
				<div>
					<CustomPrimaryButton
						label='Log in'
						additionalStyles={{ marginTop: "30px" }}
						disabled={!isFormValid}
						onClick={handleLogin}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text='Need an Account? '
				redirectText='Create an Account'
				additionalStyles={{ marginTop: "5px" }}
				redirectHandler={handlePushToRegisterPage}
			/>
		</>
	);
};

export default LoginPageFooter;
