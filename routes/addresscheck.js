const express = require("express");
const router = express.Router();
const Addresscheck = require("../modles/Addresscheck");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploads");
      // cb(null,Date.now()+file.originalname)
    },
    filename:function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  var upload = multer({ storage: storage });
//for get request
router.get('/',async(req,res) => {
    try{
           const addresscheck = await Addresscheck.find()
           res.json(addresscheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const addresscheck = await Addresscheck.findById(req.params.id)
           res.json(addresscheck)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const addresscheck = await Addresscheck.findById(req.params.id) 
        //const result=await Addresscheck.findByIdAndDelete(id);
    addresscheck.name = req.body.name
        const a1 = await addresscheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }


})
//delete req
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const addresscheck =await Addresscheck.findByIdAndDelete(req.params.id);

      
        res.json(addresscheck)   
    }catch(err){ 
        res.send('Error',err)
    }


})

router.delete("/:id", async (req, res) => {
    try {
      // const addresscheck = await Addresscheck.findById(req.params.id)
      const addresscheck = await Addresscheck.findByIdAndDelete(
        req.params.id
      );
  
      res.json(addresscheck);
    } catch (err) {
      res.send("Error", err);
    }
  });
  

//for post request :
router.post("/",upload.single("addressimage"), (req, res,next) => {
	const addresscheck = new Addresscheck({
        clientid:req.body.clientid,
        name:req.body.name,
        fname:req.body.fname,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        pincode:req.body.pincode,
		    contactnumber: req.body.contactnumber,
		    companyname: req.body.companyname,
		    periodofstay: req.body.periodofstay,
        addressimage:req.file,
        // files2:req.file

	});

	addresscheck
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;

