const mongoose = require("mongoose");
const attacker = {
  email: "string",
  password: "string",
};
const attackerSchema = new mongoose.Schema(attacker);
module.exports = mongoose.model("Attacker", attackerSchema);
