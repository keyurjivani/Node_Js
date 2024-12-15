const CheackInput = (req, res, next) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }
    next();
  };
  
  module.exports = { CheackInput };
  