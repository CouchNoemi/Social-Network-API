const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
} = require("../controllers/userController");

const router = require("express").Router();

// base route =  /api/users

// get all users
router.get("/", getAllUsers);

// get user by _id
router.get("/:id", getUser);

//post user to create new user
router.post("/", createUser);

// update user by id
router.put("/:id", updateUser);

// delete user by id
router.delete("/:id", deleteUser);

// add friend to users friend list
router.post("/:userId/friends/:friendId", addFriend);

module.exports = router;
