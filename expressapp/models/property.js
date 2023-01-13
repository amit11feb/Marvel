var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var schema = new Schema({

    propertyname: { type: String, require: true },
    propertydesc: { type: String, require: true },
    propertyaddress: { type: String, require: true },
    landmark: { type: String, require: true },
    state: { type: String, require: true },
    city: { type: String, require: true },
    reraApproved: { type: String, require: true },
    registrationNumber: { type: String, require: true },
    valuation: { type: String, require: true },
    propertyAge: { type: String, require: true },
    policyDuration: { type: String, require: true },
    policyAmount: { type: String, require: true },
    policyCoverage: { type: String, require: true },
    images: { type: String, require: true },
    creation_dt: { type: Date, require: true }



});

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });



module.exports = mongoose.model('Property', schema);