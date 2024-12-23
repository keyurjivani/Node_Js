const role = async(req,res) =>{
    let { role } = req.cookies;
    if (role !== 'admin') {
      return res.status(403).send('You are not authorized to access this page.');
    }
    
    next();
}

module.exports = role;