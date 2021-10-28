const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const url = "mongodb://localhost/CRUDapi"
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"vFast","build")))
//Import Router
const addresscheckRoute = require("./routes/addresscheck");
const clientrelationshipRoute = require("./routes/clientrelationship");
const clientregistrationRoute = require("./routes/clientregistration");
const educationcheckRoute = require("./routes/educationcheck");
const employementcheckRoute = require("./routes/employementcheck");
const singlecheckRoute = require("./routes/singlecheck");
const package1Route = require("./routes/package1");
const package2Route = require("./routes/package2");
const package3Route = require("./routes/package3");
const imageRoute = require("./routes/image");
const companycheckRoute = require("./routes/companycheck");
const vendorinitRoute = require("./routes/vendorinit")
const vendercasehistoryRoute = require("./routes/vendercasehistory")
const cibilcheckRoute = require("./routes/cibilcheck")
const databasecheckRoute = require("./routes/databasecheck")
const form16Route = require("./routes/form16")
const referencecheckRoute = require("./routes/referencecheck")
const idcheckRoute = require("./routes/idcheck");
const criminalcheckRoute = require("./routes/criminalcheck");
const advancegapcheckRoute = require("./routes/advancegapcheck");
const criminallawRoute = require("./routes/criminallaw");
const vendercasestatusRoute=require("./routes/vendercasestatus");
const auditcasestatusRoute=require("./routes/auditcasestatus");
const riderRoute=require("./routes/rider");
const employeregistrationRoute=require("./routes/employeregistration");
const empauditRoute=require("./routes/empaudit");
const emplegalRoute=require("./routes/emplegal")
const empoperationRoute=require("./routes/empoperation")
const clientregloginRoute=require("./routes/clientreglogin")
//const image22Route=require("./routes/image22")
//appuse
app.use("/clientreglogin", clientregloginRoute);
app.use("/addresscheck", addresscheckRoute);
app.use("/clientrelationship", clientrelationshipRoute);
app.use("/clientregistration", clientregistrationRoute);
app.use("/educationcheck", educationcheckRoute);
app.use("/employementcheck", employementcheckRoute);
app.use("/singlecheck", singlecheckRoute);
app.use("/package1", package1Route);
app.use("/package2", package2Route);
app.use("/package3", package3Route);
app.use("/image", imageRoute);
app.use("/companycheck", companycheckRoute);
app.use("/vendorinit", vendorinitRoute)
app.use("/vendercasehistory", vendercasehistoryRoute);
app.use("/vendercasestatus", vendercasestatusRoute)
app.use("/cibilcheck",cibilcheckRoute)
app.use("/databasecheck",databasecheckRoute)
app.use("/form16",form16Route)
app.use("/referencecheck",referencecheckRoute)
app.use("/idcheck",idcheckRoute)
app.use("/criminalcheck",criminalcheckRoute)
app.use("/advancegapcheck",advancegapcheckRoute)
app.use("/criminallaw",criminallawRoute)
app.use("/auditcasestatus",auditcasestatusRoute)
app.use("/employeregistration",employeregistrationRoute)
app.use("/rider",riderRoute)
app.use("/empaudit",empauditRoute)
app.use("/emplegal",emplegalRoute )
app.use("/empoperation",empoperationRoute)
//app.use("/image22",image22Route)
//for image

app.use('/profile', express.static('upload/images'));

//userdefine

//for image upload

app.get("/posts", (req, res) => {
	res.send("we are on posts page ");
});
//connect to DB
mongoose.connect(url, { useNewUrlParser: true }, () => {
	console.log("Hi ! Welcome We You are  connected 😀 😄 ");
});
app.listen(5000);
