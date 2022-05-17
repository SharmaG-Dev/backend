//Importing Express
const express = require('express');

const UserRouter = require('./routers/UserRouter');
const utilRouter = require('./routers/util');
// Importing user router

// importing cors
const cors = require("cors");


// Initiize expess app

const app = express();

const port = 5000;

app.use(express.json());

app.use(cors({
    // allorwing the frontend to request
    origin : ["http://localhost:3000"],
}))

// Using Middleware
app.use("/user",UserRouter);
app.use("/util",utilRouter);

// End point route
// app.get("/",(req , res) => {
//     console.log("Request From client at home")
//     res.send("Chal Be Close kar Page ")
// })
app.get("/home",(req , res) => {
    console.log("Request From client at home")
    res.send("Abe Home Page a gya Chal Be Close kar Page ")
})
// app.get("/user",(req , res) => {
//     console.log("Request From client at home")
//     res.send("yeh user index hai galat jagah aaye ho")
// })
// start the server
app.listen(port ,() => {
    console.log("Server Started")
    // window.alert("server started")
})