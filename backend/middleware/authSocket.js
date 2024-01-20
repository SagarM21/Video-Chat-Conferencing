const jwt = require("jsonwebtoken");

const config = process.env;

const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token;
  console.log(token, "token", config.TOKEN_KEY);
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    console.log(decoded, "decoded");
    socket.user = decoded;
  } catch (err) {
    console.log(err, "err");
    const socketError = new Error("NOT AUTHORIZED");
    return next(socketError);
  }

  next();
};

module.exports = verifyTokenSocket;
