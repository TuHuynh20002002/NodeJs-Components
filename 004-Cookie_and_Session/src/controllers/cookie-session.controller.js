exports.getPage = (req, res, next) => {
  res.render("cookie-session/index", {
    pageTitle: "Cookie and Session",
    path: "/cookie-session",
    isSession: req.session.isSession,
  });
};

exports.postCreate = (req, res, next) => {
  req.session.isSession = true;
  res.redirect("/cookie-session");
};

exports.postDestroy = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/cookie-session");
  });
};
