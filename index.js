const express = require("express");
const app = express ();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.render('index')
  });

  


const PORT = process.env.PORT  || 3045;
app.listen(PORT, function() {
  console.log("App started at port:" + PORT)
});