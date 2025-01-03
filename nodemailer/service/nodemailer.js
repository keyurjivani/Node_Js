const nodemailer = require('nodemailer')
require ('dotenv').config()
const transport=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"keyurjivani07rw@gmail.com",
        pass:"vhsp kxsa sfsz wufq",
    }
})

const sendmails=async(to,subject,content)=>{
  try {
      const mailoption={
          from:"keyurjivani07rw@gmail.com",
          to:to,
          subject:subject,
          text:content,
      }
     let res=await transport.sendMail(mailoption)
  } catch (error) {
    console.log(error.message);
    
  }
}

module.exports=sendmails;