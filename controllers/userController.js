const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({ user: user });
    } else {
      res.json({ message: "User doesn't exist" });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const usr = User.findOne({ email });

    /*if (usr.keyValue["username"]) {
      return res.json({
        message: "Chose another email, a user with that email already exists",
        existingEmail,
      });
    }*/
    const newUser = await User.create({ username, email });
    if (newUser) {
      res.json(newUser);
    } else {
      res.json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findById(req.params.id);

    if (user) {
      user.username = username;
      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.json({ message: "No user found" });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
    if (deletedUser) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.json({ message: "User doesn't exist" });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const addFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findById(userId);

    if (user) {
      const friend = await User.findById(friendId);
      if (friend) {
        if (!user.friends.includes(friendId)) {
          user.friends.push(friendId);
          const updatedUser = await user.save();
          res.json(updatedUser);
        } else {
          res.json({ message: "Friend already added to friend list" });
        }
      } else {
        res.json({ message: "Friend doesn't exist as a user" });
      }
    } else {
      res.json({ message: "No user found" });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
};
