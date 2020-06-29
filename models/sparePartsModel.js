const mongoose = require('mongoose');

var sparePartSchema = new mongoose.Schema({
   model:{
       type:String,
       required: true
   },
   year:{
       type:String,
       required: true
   },
   sparePart:{
       type:String,
       required: true
   },
   location:{
       type:String,
       required: true
   }
 
});


module.exports = mongoose.model('spareParts', sparePartSchema);