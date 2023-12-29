const User = require("../models/user");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

exports.getUsers = (req, res, next) => {
  User.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("user/index", {
        users: rows,
        pageTitle: "Users",
        path: "/users",
      });
    })
    .catch((err) => console.log(err));
};

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then(([user]) => {
      res.render("user/detail", {
        user: user[0],
        pageTitle: user[0].username,
        path: "/users/:userId",
      });
    })
    .catch((err) => console.log(err));
};

exports.getAddUser = (req, res, next) => {
  res.render("user/add", {
    pageTitle: "Add User",
    path: "/users/add",
  });
};

exports.postAddUser = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const user = new User(null, username, email);
  user
    .save()
    .then(() => {
      res.redirect("/users");
    })
    .catch((err) => console.log(err));
};

exports.getEditUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then(([user]) => {
      if (!user) {
        return res.redirect("/users");
      }
      res.render("user/edit", {
        pageTitle: "Edit User",
        path: "/users/:userId",
        user: user[0],
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditUser = async (req, res, next) => {
  const userId = req.params.userId;
  const updatedUsername = req.body.username;
  const updatedEmail = req.body.email;
  User.updateById(userId, updatedUsername, updatedEmail);
  // wating for update before redirect
  await sleep(1000);
  res.redirect("/users");
};

exports.postDeleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.deleteById(userId)
    .then(() => {
      res.redirect("/users");
    })
    .catch((err) => console.log(err));
};
