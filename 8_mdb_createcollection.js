const mongodb = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017";

mongodb.connect(db_url,(err,db)=>{
    if(err){
        throw err;
    }else{
        const dbo = db.db("employee");
        dbo.createCollection("employees",()=>{
            if(err){
                throw err;
            }else{
                console.log("Collection Created");
            }
        });

    }
})