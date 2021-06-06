const mongoose = require("mongoose");
const url = {
  urllink: "string",
  posted_by: "string",
  tag: "string",
  harmedby: "string",
};
const urlSchema = mongoose.Schema(url);
module.exports = mongoose.model("Url", urlSchema);
