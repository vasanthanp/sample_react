//add
//find
//all urls
//updateWithId
//delete
const {
  getAllUrls,
  addNewUrl,
  deleteUrlWithId,
  getUrlWithName,
  updateUrlWithId,
} = require("../controller/urlcontroller");
const routes = require("express").Router();
routes.get("/urls", getAllUrls);
routes.get("/url", getUrlWithName);
routes.post("/url", addNewUrl);
routes.patch("/url/:id", updateUrlWithId);
routes.delete("/url/:id", deleteUrlWithId);
module.exports = routes;
