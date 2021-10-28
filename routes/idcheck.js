const express = require("express");
const router = express.Router();
const IDcheck = require("../modles/IDcheck");
const multer = require("multer");
 const path = require("path");
// const upload = multer({dest : "public/uploads/"})

//for get request
var storage=multer.diskStorage({
        distination:function(req,file,cb){
        cb(null,"./upload/images")
        // cb(null,Date.now()+file.originalname)
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})
var upload=multer({storage:storage});
//for get request
router.get('/',async(req,res) => {
    try{
           const idcheck = await IDcheck.find()
           res.json(form16)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const idcheck = await IDcheck.findById(req.params.id)
           res.json(form16)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const idcheck = await IDcheck.findById(req.params.id) 
        form16.name = req.body.name
        const a1 = await form16.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for image upload

//for post request :
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file)
	const idcheck = new IDcheck({
         clientid: req.body.clientid,
		 candidatename: req.body.candidatename,
		 Fname: req.body.Fname,
         gender: req.body.gender,  
		 address: req.body.address,
         card:req.body.card,
         pincode: req.body.pincode,
		 city:req.body.city,
         DOB: req.body.DOB,  
         contactnumber:req.body.contactnumber
        // image:req.file.path
		


	});
    

	idcheck
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
//http://localhost:3000/gapcheck

module.exports = router;