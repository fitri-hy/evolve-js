class HomeController {
  static index(req, res) {
    res.render('pages/index', { message: 'Hello from HomeController!' });
  }
}

export default HomeController;
