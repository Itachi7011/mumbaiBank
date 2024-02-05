const mongoose = require("mongoose");
const mongodbaddr = process.env.mongodbAddress;

mongoose.set('strictQuery', false);
mongoose.connect(mongodbaddr,
                    {useNewUrlParser:true,
                    useUnifiedTopology:true
                }).then(()=>{
                    console.log("Connection With Database is Successfull")
                }).catch((err)=>{console.log(err)});

