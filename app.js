const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.use(express.static(__dirname + '/'));
app.set( 'view engine', 'html' );
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(6002, () => {
  console.log('[Server running on 6002]')
});
