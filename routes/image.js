const express = require("express");
const router = express.Router();
const Image = require("../modles/Image");
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
        cb(null,file.fieldname,Date.now()+file.originalname)
    }
})

const fileFilter = (req,file,cb)=> {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype ==="image/pdf"){
    cb(null,true);
}
 else {
cb(null,false);
}
};
var upload=multer({storage:storage,
limits:{
    //fileSize:
},
fileFilter:fileFilter
});
//for get request
router.get('/',async(req,res) => {
    try{
           const image = await Image.find()
           res.json(image)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const image = await Image.findById(req.params.id)
           res.json(image)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const image = await Image.findById(req.params.id) 
        image.imgname = req.body.imgname
        const a1 = await image.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for delete request
router.delete("/:id",async(req,res)=>{
    try{
        const image=await Image.findByIdAndDelete(req.params.id);
        res.json(image)
    }catch(err){
        res.send("error",err)
    }
})

//for post request :
router.post("/",upload.single('packageimage'), (req, res) => {
    console.log(req.file)
	const image = new Image({
         imgname:req.body.imgname,
        packageimage:req.file.originalname
		


	});
    

	image
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