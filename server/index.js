const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());

/*
* method to add a new material
* @param material object 
* @return: 200 status code for success 
*/
app.post("/material", async(req, res) =>{
    //await
    try{
        const { name } = req.body;
        const { volume } = req.body;
        const { delivery_date } = req.body;
        const { color } = req.body;
        const { cost } = req.body;
        const newMaterial = await pool.query(
            "INSERT INTO material (name, volume, delivery_date, color, cost) values($1, $2, $3, $4, $5) RETURNING *",
            [name, volume, delivery_date, color, cost]
        );
        res.json(newMaterial.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
});

/*
* method to get list of all materials
* @return: List of materials 
*/
app.get("/material", async(req,res) =>{
    try{
        const allMaterial = await pool.query("SELECT * FROM material ORDER BY id");
        res.json(allMaterial.rows);
    }
    catch(err){
        console.error(err.message);
    }
});

/*
* method to get material based on id
* @param material id 
* @return: material object 
*/
app.get("/material/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const material = await pool.query("SELECT * FROM material WHERE id = $1", [id]);
        res.json(material.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
});

/*
* method to update existing material
* @param material object 
* @return: 200 status code for success 
*/
app.put("/material/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const { name } = req.body;
        const { volume } = req.body;
        const { delivery_date } = req.body;
        const { color } = req.body;
        const { cost } = req.body;
        const updateMaterial = await pool.query(
            "UPDATE material SET name = $1, volume = $2, delivery_date = $3, color = $4, cost = $5  WHERE id = $6",
            [name, volume, delivery_date, color, cost, id]
        );
        res.json("Material was updated!");
    }
    catch(err){
        console.error(err.message);
    }
});

/*
* method to delete material based on id
* @param material id 
* @return: 200 status code for success 
*/
app.delete("/material/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const deleteMaterial = await pool.query("DELETE FROM material WHERE id = $1",[id]);
        res.json("Material was deleted!");
    }
    catch(err){
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("Server has started on port 5000");
});