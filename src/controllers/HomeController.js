import User from "../models/User";

class HomeController {
  async index(req, res) {
    const novoUser = await User.create({
      name: "Kevin",
      email: "kevin1tdsb@gmail.com",
    });
    res.json(novoUser);
  }
}

export default new HomeController();
