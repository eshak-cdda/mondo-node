const route = require("express").Router();
const { getAllUsers, addUser } = require("./controller");
// get all users
route.get("/", getAllUsers);
// add a user
route.post("/", addUser);

module.exports = route;
