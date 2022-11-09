const express = require("express");
const { requireSignin } = require("../../common-middleware.js");

const { signup, signin, signout } = require("../../controller/admin/auth");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../../validators/auth");

const router = express.Router();

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);
router.post(
  "/admin/signin",
  validateSigninRequest,
  validateSignupRequest,
  signin
);
router.post("/admin/signout", signout);

module.exports = router;
