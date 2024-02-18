class HomeController {
  async index(req, res) {
    res.render('index');
  }
}
module.exports = HomeController;
