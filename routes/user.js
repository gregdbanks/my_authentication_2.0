const express = require("express");
const { check } = require("express-validator");

const auth = require("../middleware/auth");
const { signUp, loginUser, getMe } = require("../controllers/user");

const router = express.Router();

router.post(
  "/signup",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  signUp
);

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  loginUser
);

router.get("/me", auth, getMe);

module.exports = router;
