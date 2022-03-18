import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
	let navigate = useNavigate();
	const handlePushToLoginPage = () => {
		navigate("/login");
	};

	const getFormNotValidMessage = () => {
		return "Username should contain characters between 3 and 12 and password should contain characters between 6 and 12. Also correct e-mail address should be provided. ";
	};

	const getFormValidMessage = () => {
		return "Press to Register";
	};

	return (
		<>
			<Tooltip
				title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
			>
				<div>
					<CustomPrimaryButton
						label='Register'
						additionalStyles={{ marginTop: "30px" }}
						disabled={!isFormValid}
						onClick={handleRegister}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text='Already have an Account? '
				redirectText='Log in'
				additionalStyles={{ marginTop: "5px" }}
				redirectHandler={handlePushToLoginPage}
			/>
		</>
	);
};

export default RegisterPageFooter;
