// Connect to MongoDB & create employee database

var mongodb = require('mongodb').MongoClient;
var db_url = "mongodb://localhost:27017/employee"

mongodb.connect(db_url,(err,db)=>{
    if(err){
        throw err;
    }else{
        console.log("Connection Successful & DB created!!");
    }
    db.close();
});

