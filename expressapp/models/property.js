var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var schema = new Schema({

    propertyname: { type: String, require: true },
    area: { type: String, require: true },
    creation_dt: { type: Date, require: true }

});



module.exports = mongoose.model('Property', schema);