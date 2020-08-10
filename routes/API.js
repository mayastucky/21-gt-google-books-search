const router = require("express").Router(); 
const Books = require("../models/book")
// const booksController = require("../controllers/bookController")

router.get("/api/books", function(req, res) {
    Books.find({}).then(booksRetrieved =>{
        res.json(booksRetrieved)
    })
})

router.post("/api/books", function(req,res){
    Books.create(req.body).then(newSave => {
        res.json(newSave)
    })
})

router.delete("/api/books/:id", function(req,res){
    Books.findOneAndRemove({ _id: req.params.id })
        .then(book => {
            res.json(book)
        })
})

//IS THIS WHAT I WAS SUPPOSED TO DO INSTEAD?
// router.route('/')
// .get(booksController.findAllBooks)
// .post(booksController.create)

// router.route("/:id")
// .get(booksController.findBookById)
// .put(booksController.updateBook)
// .delete(booksController.removeBook)


module.exports = router; 