import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app= express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database is connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error)=>console.log(error))

const EcolesSchema = new mongoose.Schema({
    rentree_scolaire : Number,
    departement : String,
    code_postal : String,
    nombre_total_eleves : String,
    commune : String,
    secteur : String 
})

const DepSchema = new mongoose.Schema({
    num_dep : String,
    dep_name : String,
    region_name : String,
})

const EcoleModel = mongoose.model("ecoles", EcolesSchema)
app.get("/getEcoles", async (req, res ) => {
   const ecoleData = await EcoleModel.find();
   res.json(ecoleData);
}) 

 app.get("/getEcoles/annee=:annee", async (req, res ) => {
    let annee = parseInt(req.params.annee);
    const ecoleData = await EcoleModel.find({rentree_scolaire : annee});
    res.json(ecoleData);
 })

 app.get("/getEcoles/commune=:commune", async (req, res ) => {
    const commune = req.params.commune.toUpperCase();
    const ecoleData = await EcoleModel.find({commune : commune});
    res.json(ecoleData);
 })
 
 app.get("/getEcoles/secteur=:secteur", async (req, res ) => {
    const secteur = req.params.secteur;
    const ecoleData = await EcoleModel.find({secteur : secteur});
    res.json(ecoleData);
 })

// const DepModel = mongoose.model("departements", DepSchema)
// app.get("/getEcoles/departement=:departement", async (req, res ) => {
//     const departement = capitalizeWords(req.params.departement);
//     const depData = await DepModel.find({ dep_name: departement});
//     res.json(depData);
//  })  

//  function capitalizeWords(str) {
//     return str
//         .split('-') // Séparer la chaîne par les tirets
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliser la première lettre de chaque mot
//         .join('-'); // Rejoindre les mots avec des tirets
// }