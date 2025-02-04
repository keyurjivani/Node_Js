const jwt = require("jsonwebtoken");
require("dotenv").config();

const isToken = (roles = []) => {
    return (req, res, next) => {

        let token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(403).send({ msg: "token is required" });
        }

        try {
            let decode = jwt.verify(token, process.env.jwt_secret);
            req.user = decode;
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).send('Access Forbidden');
            }
            next();
        } catch (error) {
            res.status(500).send({ msg: "error verifying token " });
        }
    };
};

module.exports = isToken;