var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    propertyname: { type: String, require: true },
    propertydated: { type: Number, require: true },
    propertyTypeOption: { type: String, require: true },
    propertyaddress: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    area: { type: String, require: true },
    landmark: { type: String, require: true },
    approveOption: { type: String, require: true },
    approveNo: { type: Number, require: true },
    valuation: { type: Number, require: true },
    policyPeriod: { type: Number, require: true },
    policyAmount: { type: Number, require: true },
    image: { type: String, require: true },
    creation_dt: { type: Date, require: true }

});



module.exports = mongoose.model('Property', schema);