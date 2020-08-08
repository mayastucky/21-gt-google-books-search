const router = require("express").Router(); 
const Books = require("../models/book")

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
    Books.destroy(req.params).then(deletedBook => {
        res.json(deletedBook)
    })
})

module.exports = router; 