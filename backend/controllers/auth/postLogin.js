const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const config = process.env;
    console.log(config);
    console.log(mail, password, "mail password");
    const user = await User.findOne({ mail: mail.toLowerCase() });
    console.log(process.env.TOKEN_KEY, "login");
    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
      console.log("Token Payload:", { userId: user._id, mail });
      const token = jwt.sign({ userId: user._id, mail }, config.TOKEN_KEY, {
        expiresIn: "24h",
      });
      console.log("Generated Token:", token);

      return res.status(200).json({
        userDetails: {
          mail: user.mail,
          username: user.username,
          token: token,
          _id: user._id,
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
