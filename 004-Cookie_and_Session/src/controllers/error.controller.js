class ErrorController {
  get404(req, res, next) {
    res.status(404).render("app/404", {
      pageTitle: "Page Not Found",
      path: "/404",
    });
  }
}

module.exports = new ErrorController();
