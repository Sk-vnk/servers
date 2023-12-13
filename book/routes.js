const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks, deleteOne, updateAuthor, dynamicUpdate } = require("./controllers");

bookRouter.post("/book", addBook);

bookRouter.get("/book", getAllBooks);

bookRouter.delete("/book", deleteOne);

bookRouter.put("/book", updateAuthor);

bookRouter.put("/book/dynamic", dynamicUpdate);

  

module.exports = bookRouter;