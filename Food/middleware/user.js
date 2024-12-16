const checkuser = (req, res, next) => {
    if (req.user.role !== 'admin') { 
      return res.status(403).json({ error: "Permission denied" });
    }
    next(); 
  };
  
module.exports = { checkuser };
  

const User = require('../model/user.schema');

const authenticateUser = async (req, res, next) => {
  try {
    const userId = req.cookies.userId;
    if (!userId) return res.status(401).json({ error: "Authentication required" });
    const user = await User.findById(userId);
    if (!user) return res.status(401).json({ error: "Invalid user" });
    req.user = user; 
    next(); 
  } catch (err) {
    res.status(401).json({ error: "Authentication failed" });
  }
};

module.exports = { authenticateUser };
