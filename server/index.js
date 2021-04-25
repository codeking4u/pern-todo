const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(cors()); 

//access to request.body
app.use(express.json());

app.listen(5000, () => {
    console.log('Server running');
})