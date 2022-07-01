"use strict";

const express = require("express");
const nodemon = require("nodemon");
const route = express.Router();
const account = require("../data/accountData");

route.get("/", function (req, res) {
  res.render("index");
});

route.post("/", function (req, res) {
  const { username, password, ok } = req.body;

  if (!(account.username === username))
    return res.send(JSON.stringify({ message: "Wrong username", status: 404 }));
  if (!(account.password === password))
    return res.send(JSON.stringify({ message: "Wrong password", status: 404 }));

  res.send(
    JSON.stringify({
      message: "successful to login",
      resultData: {
        username,
        password,
        ok,
      },
      status: 200,
    })
  );

  console.log(`Success, username: ${username}, password: ${password}`);
});

route.get("/game", function (req, res) {
  res.render("game");
});

module.exports = route;
