const express = require("express");
//database
const database = require("./dataset");

//express initialise
const booky =express();
/*
  Route :          /
  Description :   Get all the books;
  Access;         public
  Parameter:      none;
  Methods :       Get
*/
booky.get("/",(req,res) => {
  return res.json({books: database.books});
});


/*
  Route:           /is
  Description :   Get specific book based on isbn;
  Access;         public
  Parameter:      isbn;
  Methods :       Get
*/

booky.get("/is/:isbn",(req,res) => {
  const getSpecificBook = database.books.filter((book) =>
    book.ISBN === req.params.isbn);

  if(getSpecificBook.length===0){
    return res.json({error: `No book found for the ISBN ${req.params.isbn}`});
  }
  return res.json({book:getSpecificBook});
});

/*
  Route:           /c
  Description :   Get specific book based on category;
  Access;         publi
  Parameter:      category;
  Methods :       Get
*/
booky.get("/c/:category",(req,res) => {
  const getSpecificBook = database.books.filter((book) =>
    book.category.includes(req.params.category))

    if(getSpecificBook.length===0){
      return res.json({error: `No book found for the category ${req.params.category}`});
    }
    return res.json({book:getSpecificBook});

});


/*
  Route:           /lang
  Description :   Get specific book based on language;
  Access;         public
  Parameter:      category;
  Methods :       Get
*/
booky.get("/lang/:language",(req,res) => {
  const getSpecificBook = database.books.filter((books) =>
    books.language === req.params.language);

    if(getSpecificBook.length===0){
      return res.json({error: `No book found for the language ${req.params.language}`});
    }
    return res.json({book:getSpecificBook});

});

/*
  Route:           /author
  Description :   Get all authors;T
  Access;         public
  Parameter:      category;
  Methods :       Get
*/
booky.get("/author",(req,res) => {
  return res.json({author:database.author});
});

/*
  Route:           /auth
  Description :   Get specific author based on id;
  Access;         public
  Parameter:      category;
  Methods :       Get
*/
booky.get("/auth/:id",(req,res) => {
  const getSpecificAuthor = database.author.filter((author) =>
    author.id == req.params.id);

    if(getSpecificAuthor.length===0){
      return res.json({error: `No author found for the id ${req.params.id}`});
    }
    return res.json({author:getSpecificAuthor});

});

/*
  Route:           /author/book
  Description :   Get specific author based on book;
  Access;         public
  Parameter:      isbn;
  Methods :       Get
*/
booky.get("/author/book/:isbn",(req,res) => {
  const getSpecificBook = database.author.filter((author) =>
    author.books.includes(req.params.isbn))

    if(getSpecificBook.length===0){
      return res.json({error: `No author found for the book ${req.params.isbn}`});
    }
    return res.json({authors:getSpecificBook});

});



/*
Route            /publications
Description      Get all publications
Access           PUBLIC
Parameter        NONE
Methods          GET
*/

booky.get("/publications",(req,res) => {
  return res.json({publications: database.publication});
});

/*
Route            /pub-id
Description      Get all publications based on id
Access           PUBLIC
Parameter        NONE
Methods          GET
*/

booky.get("/pub-id/:id",(req,res) => {
  const specificPublication = database.publication.filter((publication) =>
    publication.id == req.params.id);
  if(specificPublication.length===0){
    return res.json({error: `No publication found for the id ${req.params.id}`});
  }
  return res.json({publication:specificPublication});


});


/*
Route            /pub-id/book
Description      Get all publications on book
Access           PUBLIC
Parameter        NONE
Methods          GET
*/

booky.get("/pub-id/book/:isbn",(req,res) => {
  const specificPublication = database.publication.filter((publication) =>
    publication.books.includes(req.params.isbn));
  if(specificPublication.length===0){
    return res.json({error: `No publication found for the isbn ${req.params.isbn}`});
  }
  return res.json({publication:specificPublication});


});





booky.listen(3000,()=> {
  console.log("server is up and running");
});
