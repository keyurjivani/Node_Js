const isLogin =(req,res,next) => {
    let {username}=req.cookies
    if(username){
        next()
    }
    else{
        res.redirect("/user/login");
    }
}

module.exports = {isLogin}