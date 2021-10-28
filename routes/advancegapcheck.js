const express = require("express");
const router = express.Router();
const Advancegapcheck = require("../modles/Advancegapcheck");

//for get request
router.get('/',async(req,res) => {
    try{
           const advancegapcheck = await Advancegapcheck.find()
           res.json(advancegapcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const advancegapcheck = await Advancegapcheck.findById(req.params.id)
           res.json(advancegapcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const advancegapcheck = await Advancegapcheck.findById(req.params.id) 
        //const result=await Addresscheck.findByIdAndDelete(id);
        advancegapcheck.name = req.body.name
        const a1 = await advancegapcheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }


})
//delete req
router.delete('/:id',async(req,res)=> {
    try{
       // const addresscheck = await Addresscheck.findById(req.params.id) 
        const advancegapcheck =await Advancegapcheck.findByIdAndDelete(req.params.id);

      
        res.json(advancegapcheck)   
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
	const advancegapcheck = new Advancegapcheck({
        candidatename:req.body.candidatename,
        Fcompany:req.body.Fcompany,
        Seccompany:req.body.Seccompany,
        Dufirst:req.body.Dufirst,
        Dusec:req.body.Dusec,
        reasonofgap:req.body.reasonofgap,
		contactnumber: req.body.contactnumber,
		

	});

	advancegapcheck
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;

