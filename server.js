// import section 

const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config()

const port = 3000||process.env.PORT;  // import env file of port
const uri = process.env.URI;   // import env file of database

const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs")


// mongoose connect
const dbs = () => {
    try {
            mongoose.connect(uri, {
          useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        console.log("database connect successfully");
    } catch (err) {
        console.log("something went wrong ");
     }
    
}
dbs();

app.use(require("./router/index.js"));
app.use(require("./router/todo.js"));

app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`);
})