const User = require("../Models/user.schema");



const Signup = async(req, res) =>{
    const { username, password, email, role } = req.body;

  try {
    const exist = await User.findOne({ email });
    if (exist) {
      return res.send({message: "User already exists"});
    }

    const hash = await bcrypt.hash(password, 10);
    const data = new User({ username, password: hash, email, role });
    res.json(data);
    res.send(`Account created successfully ${username}`);
  } catch (error) {
    res.status(500).send("Error creating account");
  }

  res.cookie("role", exist.role);
  res.cookie("id", data._id);
}

const login = async (req, res) => {
    const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.send("Invalid Credentials.");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send("Invalid Credentials.");

    res.cookie("role", user.role);
    res.cookie("id", user._id);
    res.send(`Welcome User ${user.username}`);
  } catch (error) {
    res.status(500).send("Error logging in");
  }
}

const getLoginPage = (req, res) => {
    res.render("login");
};