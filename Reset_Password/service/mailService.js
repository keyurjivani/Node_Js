const nodemailer = require("nodemailer");
require("dotenv").config();
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "keyurjivani07rw@gmail.com",
    pass: "password",
  },
});

const sendingMail = async (to, subject, content) => {
  try {
    const mailOptions = {
      from: "keyurjivani07rw@gmail.com",
      to: to,
      subject: subject,
      html: content,
    };
    let res = await transport.sendMail(mailOptions);
   
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendingMail;