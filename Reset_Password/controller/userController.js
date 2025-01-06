const users = require("../model/userSchema");
const bcrypt = require("bcrypt");
const sendingMail = require("../service/mailService");

const signup = async (req, res) => {
  const { email, password } = req.body;
  let isExist = await users.findOne({ email: email });
  if (isExist) {
    return res.status(400).json({ message: "Email already exists" });
  } else {
    let hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
    let user = await users.create(req.body);
    console.log(user);
    return res.status(201).json(user);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let isExists = await users.findOne({ email: email });
  if (!isExists) {
    return res.send("user not found");
  }

  const isMatched = await bcrypt.compare(password, isExists.password);

  if (!isMatched) {
    return res.send("invalid password");
  }

  return res.send("logged in");
};

const sendMail = async (req, res) => {
  const { to, subject, content } = req.body;
  await sendingMail(to, subject, content);
  res.send("mail to: " + to);
};

let otps = new Map();

const sendOtp = async (req, res) => {
  const { email } = req.body;
  console.log(req.body, email);

  let isExists = await users.findOne({ email: email });
  if (!isExists) {
    return res.send("user not found");
  }
  try {
    let otp = Math.round(Math.random() * 1000000);
    otps.set(otp, email);
    console.log(otps);

    let html = `<h1>OTP : ${otp}</h1>`;
    await sendingMail(email, "password reset", html);
    res.redirect("/user/reset-password");
  } catch (error) {
    res.send(error.message);
  }
};

const verifyOtp = async (req, res) => {
  const { otp, password } = req.body;
  console.log(req.body);
  console.log(otps);

  let data = otps.get(Number(otp));
  console.log(data);
  if (!data) {
    res.send("Invalid OTP ");
  }
  let user = await users.findOne({ email: data });
  let hash = await bcrypt.hash(password, 10);
  user.password = hash;
  await user.save();
  res.send("password reseting...");
};

module.exports = { signup, login, verifyOtp, sendOtp, sendMail };
