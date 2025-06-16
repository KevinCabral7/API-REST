class HomeController {
  async index(req, res) {
    res.json("Hello, world!");
  }
}

export default new HomeController();
