require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("../db/connection");

const Book = require("../book/model");

const bookRouter = require("../book/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());


connection();


app.use(bookRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
