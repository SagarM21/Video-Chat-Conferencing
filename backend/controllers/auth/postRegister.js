const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../../models/user");

const postRegister = async (req, res) => {
	const { username, mail, password } = req.body;

	try {
		const userExists = await User.exists({ mail: mail.toLowerCase() });
		if (userExists) {
			return res.status(409).send("E-mail already in use");
		}

		const encryptedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			username,
			mail: mail.toLowerCase(),
			password: encryptedPassword,
		});

		const token = "JWT Token";

		res.status(201).json({
			userDetails: {
				username: user.username,
				mail: user.mail,
				token: token,
			},
		});
	} catch (err) {
		return res.status(500).send("Error occured, please try again later!");
	}
};

module.exports = postRegister;
