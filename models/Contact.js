var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var contactSchema = new Schema({
  date: Date,
  name: String,
  coname: String,
  website: String,
  email: String
});

var User = mongoose.model('Contact', contactSchema);

module.exports = User;