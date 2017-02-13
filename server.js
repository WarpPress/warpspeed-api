const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./database/db');
const ContactCtrl = require('./controllers/contact.controller');
const cors = require('cors');

const app = express();
const contactCtrl = new ContactCtrl();

app.use(function(req, res, next) {
  var allowedOrigins = ['warpspeed.site', '127.0.0.1:9999', 'localhost:9999'];
  var origin = req.headers.host;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
       return next();
  } else {
      res.json({status: 403, message: 'bad origin'});
  }
});


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('combined'));


//routes
app.post('/contact',  (req, res) => {

    contactCtrl.save(req.body).then((data) => {
        res.json(data);
    })
    // res.json(db.find({name: 'chad'}));

})

app.get('/contact',  (req, res) => {
        console.log(req.headers)

    contactCtrl.findAll().then((data) => {
        res.json(data);
    })
})


app.listen(9999, function () {
    console.log('Mail server listening on port 9999');
});
