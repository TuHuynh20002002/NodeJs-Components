const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

// [GET] /add -> add user to database
router.get("/add", UserController.getAddUser);
router.post("/add", UserController.postAddUser);

// [GET] /:userId -> get user by id
router.get("/:userId/detail", UserController.getUser);

// [GET] /:userId/edit -> edit user by id
router.get("/:userId/edit", UserController.getEditUser);
router.post("/:userId/edit", UserController.postEditUser);

// [POST] /:userId/delete -> delete user by id
router.post("/:userId/delete", UserController.postDeleteUser);

// [GET] / -> get all users
router.get("/", UserController.getUsers);

module.exports = router;
