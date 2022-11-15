var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var schema = new Schema({

    propertyname: { type: String },
    area: { type: String }
    

});
 

module.exports = mongoose.model('Propertylist', schema);