const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../../models/user");

const postLogin = async (req, res) => {
	try {
		const { mail, password } = req.body;
		const user = await User.findOne({ mail: mail.toLowerCase() });
		if (user && (await bcrypt.compare(password, user.password))) {
			// send new token
			const token = "JWT Token";

			return res.status(200).json({
				userDetails: {
					mail: user.mail,
					username: user.username,
					token: token,
				},
			});
		}
		return res.status(400).send("Invalid credentials. Please try again");
	} catch (err) {
		return res
			.status(500)
			.send("Something went wrong, please try again later!");
	}
};

module.exports = postLogin;
