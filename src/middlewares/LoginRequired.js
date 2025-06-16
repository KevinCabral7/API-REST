import jwt from "jsonwebtoken";
export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({
      errors: ["Login required"],
    });

  const [, token] = authorization.split(" ");

  try {
    const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = userVerified;
    req.userID = id;
    req.userEmail = email;
    return next();
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return res.status(401).json({
      errors: ["Expired or invalid token"],
    });
  }
};
