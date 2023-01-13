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


router.post('/addProperty',  function (req, res, next) {
   
   
 
  addToDB(req, res);
  

});

 
router.delete('/deleteProperty/:id', function (req, res, next) {
  deletePropertyList(req, res)
});
router.put('/editProperty/:id', function (req, res, next) {
  editPropertyList(req, res)
});
router.get('/getProperty', function (req, res, next) {
  getproperties(req, res);
});
router.get('/getProperty/:id', function (req, res, next) {
  getpropertiesbyId(req, res)
});


async function addToDB(req,res) {
  // console.log("Addtodb");
  // console.log(reqfile);
   var property = new Property({
    propertyname: req.body.propertyname,
    propertydesc: req.body.propertydesc,
    propertyaddress: req.body.propertyaddress,
    landmark: req.body.landmark,
    state: req.body.state,
    city: req.body.city,
    reraApproved: req.body.reraApproved,
    registrationNumber: req.body.registrationNumber,
    valuation: req.body.valuation,
    propertyAge: req.body.propertyAge,
    policyDuration: req.body.policyDuration,
    policyAmount: req.body.policyAmount,
    policyCoverage: req.body.policyCoverage,
    images:"file",
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

async function getpropertiesbyId(req, res) {
  const id = req.params.id;
  console.log(id);

  try {
    doc = await Property.findById(id);
    return res.status(201).json(doc)
  }
  catch (err) {
    console.log(err);
    return res.status(501).json(err);
  }
}
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
async function deletePropertyList(req, res) {
  const id = req.params.id;
  try {
    doc = await Property.findByIdAndRemove(id);
    return res.status(201).json(doc)
  }
  catch (err) {
    console.log(err);
    return res.status(501).json(err);
  }
}
async function editPropertyList(req, res) {
  const id = req.params.id;
  console.log(req.body)
  try {
    doc = await Property.findByIdAndUpdate(id, req.body);
    return res.status(201).json(doc)
  }
  catch (err) {
    console.log(err);
    return res.status(501).json(err);
  }
}





module.exports = router;
