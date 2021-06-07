const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { url } = require("./config/config");
const PORT = 5000 || process.env.PORT;
mongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else console.log(`database connected successfully`);
  }
);
app.listen(PORT, () => {
  console.log(`express server run at port ${PORT}`);
});
