const { Router } = require("express");
const express = require("express");
const { time } = require("../controller/blogcontroller");
const blogrouter = express.Router();
blogrouter.get("/", time);

module.exports = blogrouter;
