import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyparser from 'body-parser';

const app= express();
dotenv.config();

app.use(bodyparser.json());
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

const EcoleModel = mongoose.model("ecoles", EcolesSchema)

app.get("/ecoles", async (req, res ) => {
   const ecoleData = await EcoleModel.find();
   res.json(ecoleData);
})  

 app.get("/ecoles/annee/:annee", async (req, res ) => {
  console.log("eza");
    let annee = parseInt(req.params.annee);
    const ecoleData = await EcoleModel.find({rentree_scolaire : annee});
    res.json(ecoleData);
 })

 app.get("/ecoles/commune/:commune", async (req, res ) => {
    const commune = req.params.commune.toUpperCase();
    const ecoleData = await EcoleModel.find({commune : commune});
    res.json(ecoleData);
 })
 
 app.get("/ecoles/secteur/:secteur", async (req, res ) => {
    const secteur = req.params.secteur;
    const ecoleData = await EcoleModel.find({secteur : secteur});
    res.json(ecoleData);
 })

 app.delete('/delete/ecole/:id', async (req, res) => {
  try {
    const ecole = await EcoleModel.findByIdAndDelete(req.params.id);
    if (!ecole) {
      return res.status(404).json({ message: 'Ecole non trouvé' });
    }
    res.status(200).json({ message: 'Ecole supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

app.patch('/update/ecole/:id', async (req, res) => {
   const updates = req.body;
  console.log(updates);
  try {
    const ecole = await EcoleModel.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!ecole) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.status(200).json(updates);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});
 