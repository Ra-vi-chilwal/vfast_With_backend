const express = require("express");
const router = express.Router();
const ClientregLogin = require("../modles/ClientregLogin");

//for get request
router.get('/',async(req,res) => {
    try{
           const clientreglogin = await ClientregLogin.find()
           res.json(clientreglogin)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const clientreglogin = await ClientregLogin.findById(req.params.id)
           res.json(clientreglogin)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const clientreglogin = await ClientregLogin.findById(req.params.id) 
        //const result=await Addresscheck.findByIdAndDelete(id);
    clientreglogin.name = req.body.name
        const a1 = await clientreglogin.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }


})
//delete req
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const clientreglogin =await ClientregLogin.findByIdAndDelete(req.params.id);

      
        res.json(clientreglogin)   
    }catch(err){ 
        res.send('Error',err)
    }


})

// router.delete("/:id",async(req,res)=>{
//     const id = req.params.id;
//     try{
//         const result=await Addresscheck.findByIdAndDelete(id);

//         res.send(result)
//     }catch(error){
//         console.log(error.message)
//     }
// })

//for post request :
router.post("/", (req, res) => {
	const clientreglogin = new ClientregLogin({
       username:req.body.username,
       email:req.body.email,
       password:req.body.password,
       contact:req.body.contact,
       confirmpassword:req.body.confirmpassword

	});

	clientreglogin
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;

