const bcrypt = require('bcrypt');
const User = require('../Model/user.model');
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let isexist = await User.findOne({ email: email });
        if (isexist) {
            return res.status(400).json({ message: "User already exist" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            req.body.password = hashedPassword;
            let user = await User.create(req.body);
            try {
                let token = await jwt.sign(
                    {
                      email: user.email,
                      id: user.id,
                      username: user.username,
                      role: user.role,
                    },
                    process.env.jwt_secret
                  );
                  res.send({ msg: "User created", user: user, token });
            } catch (error) {
                res.send({ msg: "error creating user", error: error });
            }
        }
    } catch (error) {
        res.send({ msg: "error creating user", error: error });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let isexist = await User.findOne({ email: email });
        if (!isexist) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, isexist.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        let token = await jwt.sign(
            {
                email:isexist.email,
                id: isexist.id,
                username: isexist.username,
                role: isexist.role,
            },
            process.env.jwt_secret
        );
        res.json({
            msg: "logged in ...",
            user: {
                email: isexist.email,
                id: isexist.id,
                username: isexist.username,
                role: isexist.role,
            },
            token,
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

module.exports = {
    signupUser,
    loginUser,
};