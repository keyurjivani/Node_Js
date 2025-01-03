const { signup, signuppage, loginpage, login, sendmails, sendemail, sendotp, resetingpassword,  } = require("../controller/user.controller")

const {Router}=require("express")

const router = Router()
router.get("/otppage",(req, res) => {
    res.render("otpform");
})
router.get('/resetpassword',(req,res)=>{
    res.render("resetpassword");
})
router.get('/loginpage',loginpage )
router.get('/signuppage',signuppage )
router.get('/sendmail',sendmails)
router.post('/signup',signup)
router.post('/login',login)
router.post('/mail',sendemail)
router.post('/otpsend',sendotp)
router.post('/resetingpassword',resetingpassword)
module.exports = router;