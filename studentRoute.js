const express = require("express");
const Router = express.Router();

const studentController = require("../controller/studentController");
const {
  createValidator,
  updateValidator,
  validate,
} = require("../validators/studentValidator.js");

Router.get("/index", studentController.index);

Router.get("/show/:id", studentController.show);

Router.post("/store", (req, res, next) => {
  const result = validate(createValidator, req.body);
  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }
  studentController.store(req, res, next);
});

Router.put("/update/:id", (req, res, next) => {
  const result = validate(updateValidator, req.body);
  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }
  studentController.update(req, res, next);
});

Router.delete("/delete/:id", studentController.delete);

module.exports = Router;
