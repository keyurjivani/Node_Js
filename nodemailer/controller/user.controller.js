const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const sendmails = require("../service/nodemailer");

const sendmail = (req, res) => {
  res.render("sendmail");
};
const signuppage = (req, res) => {
  res.render("signup");
};
const loginpage = (req, res) => {
  res.render("login");
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const isExists = await User.findOne({ email });
    if (isExists) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      ...req.body,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExists = await User.findOne({ email: email });
    if (!isExists) {
      return res.status(400).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, isExists.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    } else {
      res.json({
        message: "Logged in successfully",
        user: { id: isExists._id, email: isExists.email },
      });
    }
  } catch (error) {
    res.status(400).json({ error: "Internal server error" });
  }
};


const sendemail = async (req, res) => {
    try {
        const { to, subject, content } = req.body;
        await sendmails(to, subject, content);
        res.send("mail to: " + to);
    } catch (error) {
        res.send(error.message);
        
    }
  };
   let otps=new Map()

  const sendotp=async(req,res)=>{
    const {email}=req.body
    try {
        isExists=await User.findOne({email:email})
        if(!isExists){
            return res.status(400).json({error: "User not found"})
        }
       
          const otp=Math.floor(100000 + Math.random() * 900000);
          console.log(`otp: ${otp}`);
          
          otps.set(Number(otp),email)
          console.log(otps.get(Number(otp)));
          
          await sendmails(email,"OTP","Your OTP is: "+otp)
         return res.redirect("/resetpassword");
        
    } catch (error) {
        res.send(error.message);
        
    }
  }
console.log(otps.get(984747));



  const resetingpassword=async(req,res)=>{
    const {otp,password}=req.body
    
    console.log(otps.get(otp),req.body);
    let data=otps.get(Number(otp));

    if(!data){
        return res.status(400).json({error: "Invalid OTP"})
    }
    let user=await User.findOne({email:data})
    user.password=await bcrypt.hash(password,10)

    user.save()
    return res.redirect("/loginpage")
    // res.send("Password reset successfully")
  }

module.exports = {
  signuppage,
  signup,
  loginpage,
  login,
  sendmails,
  sendemail,
  sendotp,
  resetingpassword,
};
