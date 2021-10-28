const express = require("express");
const router = express.Router();
const Cibilcheck = require("../modles/Cibilcheck");

//for get request
router.get('/',async(req,res) => {
    try{
           const cibilcheck = await Cibilcheck.find()
           res.json(cibilcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const cibilcheck = await Cibilcheck.findById(req.params.id)
           res.json(cibilcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const cibilcheck = await Cibilcheck.findById(req.params.id) 
        //const result=await Addresscheck.findByIdAndDelete(id);
        cibilcheck.name = req.body.name
        const a1 = await cibilcheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }


})
//delete req
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const cibilcheck =await Cibilcheck.findByIdAndDelete(req.params.id);

      
        res.json(cibilcheck)   
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
	const cibilcheck = new Cibilcheck({
        candidatename:req.body.candidatename,
        Fname:req.body.Fname,
        DOB:req.body.DOB,
        pancard:req.body.pancard,
        Address:req.body.Address,
        gender:req.body.gender,
		contactnumber: req.body.contactnumber,
		

	});

	cibilcheck
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;

