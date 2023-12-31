class AppController {
  // [GET] /
  home(req, res) {
    res.render("app/home", {
      path: "/",
      pageTitle: "Home page",
    });
  }

  // [GET] /about
  about(req, res) {
    res.render("app/about", {
      path: "/about",
      pageTitle: "About page",
    });
  }
}

module.exports = new AppController();
