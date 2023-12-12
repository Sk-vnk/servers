const express = require("express");

const app = express();

app.use(express.json());

const books = [];

app.post("/book", (request, response) => {
  books.push(request.body);

  const successResponse = {
    message: "book added",
    books: books,
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

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
