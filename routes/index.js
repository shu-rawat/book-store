const { Router } = require('express');
const router = Router();
const books = [];

router.get('/', function(req, res, next){
  console.log(books);
  return res.render('index',{books, title:'Book Shop', path: '/',activeHome: true,  showBooks: books.length > 0});
});

router.get('/add-book', function(req, res){
  return res.render('add-book',{title:'Add Book', path: '/add-book',activeBook: true});
});

router.post('/add-book', function(req, res){
  const { name:bookName } = req.body;
  books.push({title:bookName});
  return res.redirect('/');
});

exports.router = router;
exports.books = books;