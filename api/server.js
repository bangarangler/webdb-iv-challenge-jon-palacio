require("dotenv").config();
const express = require("express");
const knex = require("knex");

const dishRouter = require("../dish/dishRouter.js");
const db = require("../data/dbConfig.js");
const server = express();

server.use(express.json());
server.use("/api/dishes", dishRouter);

module.exports = server;
