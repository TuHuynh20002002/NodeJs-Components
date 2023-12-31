const User = require("../models/user");

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.render("user/index", {
        users: users,
        pageTitle: "Users",
        path: "/users",
      });
    })
    .catch((err) => console.log(err));
};

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then((user) => {
      res.render("user/detail", {
        user: user,
        pageTitle: "User Detail",
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
  const formData = req.body;
  const user = new User(formData);
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
    .then((user) => {
      if (!user) {
        return res.redirect("/users");
      }
      res.render("user/edit", {
        pageTitle: "Edit User",
        path: "/users/:userId",
        user: user,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditUser = async (req, res, next) => {
  const userId = req.params.userId;
  const updatedUsername = req.body.username;
  const updatedEmail = req.body.email;
  try {
    await User.findByIdAndUpdate(
      { _id: userId },
      {
        username: updatedUsername,
        email: updatedEmail,
      }
    );
    res.redirect("/users");
  } catch (error) {
    console.log(error);
  }
};

exports.postDeleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByIdAndDelete(userId)
    .then(() => {
      res.redirect("/users");
    })
    .catch((err) => console.log(err));
};
