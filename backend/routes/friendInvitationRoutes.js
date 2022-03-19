const express = require("express");
const router = express.Router();
const friendInvitationControllers = require("../controllers/friendInvitation/friendInvitationControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const postFriendInvitationSchema = Joi.object({
	targetMailAddress: Joi.string().email(),
});

router.post(
	"/invite",
	auth,
	validator.body(postFriendInvitationSchema),
	friendInvitationControllers.postInvite
);

module.exports = router;
