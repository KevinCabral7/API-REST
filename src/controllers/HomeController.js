class HomeController {
  index(req, res) {
    res.json({
      chegouAqui: true,
    });
  }
}

export default new HomeController();
