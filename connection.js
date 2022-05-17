const mongoose = require('mongoose');


const url = "mongodb+srv://Abhishek123:1234@cluster0.zht1g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// asynchronous function
// return Promise
mongoose.connect(url)
.then( () => {
    console.log("succesfully connected")
})//When result is successfull
.catch( (err) => {
    console.error(err);
})//when There is some error

module.exports = mongoose;