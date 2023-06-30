const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/social-network-api");
console.log("connected to Database successfully!");

module.exports = mongoose.connection;
