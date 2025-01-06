const { Router } = require("express");
const { signup, sendMail, sendOtp, verifyOtp, login } = require("../controller/userController");

const userRouter = Router();
userRouter.post('/signup', signup)
userRouter.post("/mail", sendMail);
userRouter.post("/send-otp", sendOtp);
userRouter.post("/reset-password", verifyOtp);
userRouter.post("/login", login)

module.exports = userRouter;