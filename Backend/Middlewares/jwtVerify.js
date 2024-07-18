const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({
      msg: "No token provided"
    });
  }

  const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7, token.length).trimLeft() : token;
  jwt.verify(tokenWithoutBearer, secretKey, (err, decoded) => {
    if (err) {
      return res.status(500).json({
        msg: "Failed to authenticate token"
      })
    }

    req.userId = decoded.id;
    next();
  });
}

module.exports = {
  verifyToken
}
