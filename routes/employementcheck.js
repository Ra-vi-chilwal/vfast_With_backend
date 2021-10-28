const express = require("express");
const router = express.Router();
const EmployementCheck = require("../modles/EmployementCheck");
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
           const employementcheck = await EmployementCheck.find()
           res.json(employementcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const employementcheck = await EmployementCheck.findById(req.params.id)
           res.json(employementcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const employementcheck=await EmployementCheck.findByIdAndDelete(req.params.id);

      
        res.json(employementcheck)   
    }catch(err){ 
        res.send('Error',err)
    }


})
//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const employementcheck = await employementcheck.findById(req.params.id) 
        employementcheck.name = req.body.name
        const a1 = await employementcheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for image upload

//for post request :
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file)
	const employementcheck = new EmployementCheck({
         candidatename: req.body.candidatename,
		 gender: req.body.gender,
         address: req.body.address,
		 DOB: req.body.DOB,
         Fname: req.body.Fname,
		 contactnumber: req.body.contactnumber,
        //  image:req.file.filename
        
		


	});
    

	employementcheck
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