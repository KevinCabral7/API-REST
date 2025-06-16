import jwt from "jsonwebtoken";
import User from "../models/User";
class LoginController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;
    console.log(email, password);
    if (!email || !password)
      return res.status(401).json({
        errors: ["Invalid form"],
      });

    const user = await User.findOne({ where: { email } });

    if (!user)
      return res.status(401).json({
        errors: ["Invalid user"],
      });

    if (!(await user.passwordIsValid(password)))
      return res.status(401).json({
        errors: ["Invalid password"],
      });

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXP,
    });

    return res.json({ token });
  }
}

export default new LoginController();
