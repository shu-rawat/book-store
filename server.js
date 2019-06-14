const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

// const expressHbs = require('express-handlebars');
const app = express();

//setting  view engine

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views_pug'));

// app.engine('hbs',expressHbs({ extname: 'hbs'}));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views_hbs'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views_ejs'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

app.use("/", indexRouter.router);
app.use(function(req, res){
  res.render('404',{title:"Page Not Found"});
});
app.listen(8080);
