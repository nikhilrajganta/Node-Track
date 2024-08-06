// const express = require("express");

import express from "express";

import moviesRouter from "./routes/movies-route.js";

// const { v4: uuidv4 } = require("uuid");

import cors from "cors";
// const cors = require("cors");

const app = express();
app.use(express());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 hello");
});

app.use("/movies", moviesRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
