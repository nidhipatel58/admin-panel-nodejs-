let mongoose=require("mongoose");

function dbConnect(){
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Database connected success!");
    })
    .catch((err)=>{
        console.log(err,"error");
    })
}

module.exports=dbConnect;