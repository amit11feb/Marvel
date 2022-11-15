var express = require('express');
var router = express.Router();
var Property = require('../models/property');
 
var Propertylist = require('../models/propertylist');

router.post('/addProperty', function (req, res, next) {
  addToDB(req, res);
});


async function addToDB(req, res) {

  var property = new Property({
    
    propertyname: req.body.propertyname,
    area:req.body.area,
    creation_dt: Date.now()
  });

  try {
    doc = await property.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}
router.get('/getProperty',function(req,res,next){
  getproperties(req, res);
});
async function getproperties(req, res) {

  var getpropertylist = new Schema({
    propertyname: String,
    area: String
}, {collection: 'properties'});

  try {
    doc = await getpropertylist.get();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}
 

module.exports = router;
