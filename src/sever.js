require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("../db/connection");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());


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

app.get("/book", async (request, response) => {
  const books = await Book.find({});

  const successResponse = {
    message: "book found",
    books: books,
  };

  response.send(successResponse);
});

app.delete("/book", async (request, response) => {
  const book = await Book.deleteOne({
    title: request.body.title
});
const successResponse = {
    message: "Book Deleted",
    book: book,
};

response.send(successResponse);
});

app.put("/book", async (request, response) => {
    const book = await Book.updateOne({
        author: request.body.author,
    });
    const successResponse = {
      message: "Author Updated",
      book: book,
    };

    response.send(successResponse);
  });

  app.put("/book/dynamic", async (request, response) => {
    const index = await Book.updateOne({title: request.body.title},{ [request.body.dynamicKey]: request.body.dynamicValue});
    
    const successResponse = {
      message: "Author Updated",
      book: index,
    };

    response.send(successResponse);
  });
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
