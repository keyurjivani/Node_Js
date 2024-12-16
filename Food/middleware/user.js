const checkuser = (req, res, next) => {
    if (req.user.role !== 'admin') { 
      return res.status(403).json({ error: "Permission denied" });
    }
    next(); 
  };
  
module.exports = { checkuser };
  