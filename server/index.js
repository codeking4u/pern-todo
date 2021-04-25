const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

//middleware
app.use(cors()); 

//access to request.body
app.use(express.json());

// ROUTES //

//create
app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        );

        res.json(newTodo.rows[0]);
        
    } catch (error) {
        console.log(error.message);
    }
})
//fetch

//update

//delete


app.listen(5000, () => {
    console.log('Server running');
})