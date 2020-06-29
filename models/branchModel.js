const mongoose = require('mongoose');

var branchSchema = new mongoose.Schema({
 
  
   location:{
       type:String,
       required: true
   }
 
});


module.exports = mongoose.model('Branch', branchSchema);