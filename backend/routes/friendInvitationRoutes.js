const express = require("express");
const router = express.Router();
const friendInvitationControllers = require("../controllers/friendInvitation/friendInvitationControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const postFriendInvitationSchema = Joi.object({
	targetMailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
	id: Joi.string().required,
});

router.post(
	"/invite",
	auth,
	validator.body(postFriendInvitationSchema),
	friendInvitationControllers.postInvite
);

router.post(
	"/accept",
	auth,
	validator.body(inviteDecisionSchema),
	friendInvitationControllers.postAccept
);

router.post(
	"/reject",
	auth,
	validator.body(inviteDecisionSchema),
	friendInvitationControllers.postReject
);

module.exports = router;
