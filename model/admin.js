const mongoose = require("mongoose");
const admin = {
  email: "string",
  password: "string",
};
const adminSchema = new mongoose.Schema(attacker);
module.exports = mongoose.model("Attacker", adminSchema);
