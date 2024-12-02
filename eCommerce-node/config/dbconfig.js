const mongoose = require('mongoose');



async function dbConnect() {
      await mongoose.connect('mongodb://localhost:27017/ecommerce', {
        }).then(()=>{
            console.log("Connected to MongoDB");
        }).catch((err)=>{
            console.log(err);
        });
   
  }

module.exports = dbConnect;