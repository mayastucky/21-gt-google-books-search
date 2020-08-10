// const db = require("../models");
// module.exports = {
//   findAllBooks: (req, res) => {
//     db.Book.find(req.query)
//       .then((book) => {
//         res.json(book);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },

//   findBookById: (req, res) => {
//     db.Book.findById(req.params.id)
//       .then((book) => {
//         res.json(book);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
//   create: (req, res) => {
//     db.Book.create(req.body)
//       .then((book) => {
//         res.json(book);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
//   updateBook: (req, res) => {
//     db.Book.findOneAndUpdate({_id: req.params.id}, req.body)
//       .then((book) => {
//         res.json(book);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, 

//   removeBook: (req, res) => {
//     db.Book.findById({_id: req.params.id})
//       .then((book) => {
//         res.json(book);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, 
// };
