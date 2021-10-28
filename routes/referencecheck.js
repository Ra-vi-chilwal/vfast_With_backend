const express = require("express");
const router = express.Router();
const Referencecheck = require("../modles/Referencecheck");
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
           const referencecheck = await Referencecheck.find()
           res.json(employementcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const referencecheck = await Referencecheck.findById(req.params.id)
           res.json(referencecheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const referencecheck=await Referencecheck.findByIdAndDelete(req.params.id);

      
        res.json(referencecheck)   
    }catch(err){ 
        res.send('Error',err)
    }


})
//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const referencecheck = await Referencecheck.findById(req.params.id) 
        referencecheck.name = req.body.name
        const a1 = await referencecheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for image upload

//for post request :
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file)
	const referencecheck = new Referencecheck({
        clientid:req.body.clientid,
         candidatename: req.body.candidatename,
		 candidatecontactnumber: req.body.candidatecontactnumber,
         candidateaddress: req.body.candidateaddress,
		 referencenumber: req.body.referencenumber,
         referencename: req.body.referencename,
		 referenceaddress: req.body.referenceaddress,
        //  image:req.file.filename
        
		


	});
    

	referencecheck
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