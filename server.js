"use strict";

const express = require("express");
const nodemon = require("nodemon");
const app = express();
const router = require("./routes/route");
const port = 7000;

// Middleware -> Access public aset
app.use(express.static("public"));

// Middleware -> Convert data FE to BE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.listen(port, () => console.log(`Running server on port: ${port}`));

app.use(router);
