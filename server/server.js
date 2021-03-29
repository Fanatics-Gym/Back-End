require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const userRouter = require("../user/user-router");
const itemRouter = require("../items/items-router");
const stripeRouter = require("../stripe/stripePayment");
const applicationRouter = require("../application/application-router");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/user", userRouter);
server.use("/items", itemRouter);
server.use("/checkout", stripeRouter);
server.use("/applications", applicationRouter);
server.use("/gear");

module.exports = server;
