var express = require('express');
var router = express.Router();
var Property = require('../models/property');
var path = require('path');
var multer = require('multer');
router.use(express.static(__dirname + "./public/"));
// if (typeof localStorage === "undefined" || localStorage === null) {
//   const LocalStorage = require('node-localstorage').LocalStorage;
//   localStorage = new LocalStorage('./scratch');
// }

var Storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({
  storage: Storage
}).single('file');


router.post('/addProperty', upload, function (req, res, next) {
  // var success =req.file.filename+ " uploaded successfully";
  if (!req.file) {
    console.log("error");
    return res.status(500).send({ message: 'Upload fail' });
  } else {

 
    addToDB(JSON.parse(req.body.data), req,res);
  }

});


async function addToDB(req,reqfile ,res) {
  // console.log("Addtodb");
  // console.log(reqfile);
  console.log(reqfile.file.filename);
  var property = new Property({
    propertyname: req.propertyname,
    propertydated: req.propertydated,
    propertyTypeOption: req.propertyTypeOption,
    propertyaddress: req.propertyaddress,
    city: req.city,
    state: req.state,
    area: req.area,
    landmark: req.landmark,
    approveOption: req.approveOption,
    approveNo: req.approveNo,
    valuation: req.valuation,
    policyPeriod: req.policyPeriod,
    policyAmount: req.policyAmount,
    image: reqfile.file.filename,
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
router.get('/getProperty', function (req, res, next) {
  getproperties(req, res);
});
async function getproperties(req, res) {

  try {
    doc = await Property.find();
    return res.status(201).json(doc)
  }
  catch (err) {
    console.log(err);
    return res.status(501).json(err);
  }
}


module.exports = router;
