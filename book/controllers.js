const Book = require("./model");

// ADD ONE BOOK

const addBook = async (request, response) => {
  try {  
  const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });

  response.status(201).json({message: "BOOK ADDED", book: book});

} catch (error) {
  response.status(501).json({message: "couldn't 'ADD BOOK'", error: error});
  };
};



// GET ALL BOOKS

const getAllBooks = async (request, response) => {
  try {  
    console.log(request.params)
  const book = await Book.find({});
    
    response.status(200).json({message: "BOOKS FOUND", book: book});
  
  } catch (error) {
    response.status(400).json({message: "couldn't find 'ALLBOOKS'", error: error})
  }; 
};
 

// DELETE ONE ITEM

const deleteOne = async (request, response) => {
  try {  
    const book = await Book.deleteOne({
      title: request.body.title
  });
  const successResponse = {
      message: "Book Deleted",
      book: book,
  };
  
  response.status(202)({message: "BOOK DELETED", book: book});

} catch (error) {
  response.status(404)({message: "couldn't 'DELETEONE'", error: error})
  }; 
};



// DELETE ONE OR ALL

const deleteOneOrAll = async (request, response) => {
try {
  let book
  if (request.body.deleteSwitch === "deleteOne"){
     book = await Book.deleteOne({
      title: request.body.title
  })
  response.status(200).json({message: "'SUCCESSFULY' deleted 'ONE'", book: book});
  return


  }else if (request.body.deleteSwitch === "deleteAll"){
    book = await Book.deleteMany();
    response.status(200).json({message: "'SUCCESSFULLY' deleted 'ALL'", book: book});
    return
  }

}catch (error) {
  response.status(404).json({message: "'FAILED TO DELETE ANYTHING'", error: error}); 
};
};



// UPDATE AUTHOR

  const updateAuthor = async (request, response) => {
    try {  
    const book = await Book.updateOne({
        author: request.body.author,
    });

    response.status(201).json({message: "AUTHOR UPDATED", book: book});

} catch (error) {
  response.status(400).json({message: "couldn't Update the 'AUTHOR'", error: error})
    }; 
  };



// DYNAMICALLY UPDATE BOOK

  const dynamicUpdate = async (request, response) => {
    try {  
    const index = await Book.updateOne({title: request.body.title},{ [request.body.dynamicKey]: request.body.dynamicValue});
    

    response.status(201)({message: "UPDATED", book: book});
  } catch (error) {
    response.status(400)({message: "couldn't Update the 'BOOK'", error: error})
  };
};




module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteOneOrAll: deleteOneOrAll,
    updateAuthor: updateAuthor,
    dynamicUpdate: dynamicUpdate,
}