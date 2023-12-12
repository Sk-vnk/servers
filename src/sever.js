require("dotenv").config();
const { configDotenv } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const connection = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB on the cloud");
};

connection();

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);


app.post("/book", async (request, response) => {
    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });


  const successResponse = {
    message: "book added",
    book: book,
  };

  response.send(successResponse);
});

app.get("/book", (request, response) => {
  const index = books.findIndex((x) => x.title === request.body.title);

  const successResponse = {
    message: "book found",
    book: books[index],
  };

  response.send(successResponse);
});

app.delete("/book", (request, response) => {
  const index = books.findIndex((x) => x.title === request.body.title);
});

app.put("/book");

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
