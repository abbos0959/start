const express = require("express");
const cookie = require("cookie-parser");
const app = express();
const userRouter = require("../router/user");
const prodRouter = require("../router/product");
const dataRouter = require("../router/data");
app.use(express.json());
app.use(cookie());

app.use("/api/v1", userRouter);
app.use("/api/v1", prodRouter);
app.use("/api/v1", dataRouter);

module.exports = app;
