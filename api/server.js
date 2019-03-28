require("dotenv").config();
const express = require("express");
const knex = require("knex");

const db = require("../data/dbConfig.js");
const server = express();

server.use(express.json());

module.exports = server;
