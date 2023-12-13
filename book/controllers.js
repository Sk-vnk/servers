const Book = require("./model");

const addBook = async (request, response) => {
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
};

const getAllBooks = async (request, response) => {
    const books = await Book.find({});
  
    const successResponse = {
      message: "book found",
      books: books,
    };
  
    response.send(successResponse);
  };

const deleteOne = async (request, response) => {
    const book = await Book.deleteOne({
      title: request.body.title
  });
  const successResponse = {
      message: "Book Deleted",
      book: book,
  };
  
  response.send(successResponse);
  };

  const updateAuthor = async (request, response) => {
    const book = await Book.updateOne({
        author: request.body.author,
    });
    const successResponse = {
      message: "Author Updated",
      book: book,
    };

    response.send(successResponse);
  };

  const dynamicUpdate = async (request, response) => {
    const index = await Book.updateOne({title: request.body.title},{ [request.body.dynamicKey]: request.body.dynamicValue});
    
    const successResponse = {
      message: "Author Updated",
      book: index,
    };

    response.send(successResponse);
  };

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteOne: deleteOne,
    updateAuthor: updateAuthor,
    dynamicUpdate: dynamicUpdate,
}