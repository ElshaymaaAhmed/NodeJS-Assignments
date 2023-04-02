const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fname: {
    type: String,
    default:"Shaima"
  },
  lname: {
    type: String,
    default:"Ahmed"
  },
  phone: {
    type: String,
    default:"1234567"
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
  
})

const Client = mongoose.model('clients', ClientSchema);
module.exports = Client;
