const mongodb = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017";

mongodb.connect(db_url,(err,db)=>{

    const dbo = db.db("employee");

    const query = {location:"Avudaiyanoor"};
    const update_data = {$set:{location:"Bangalore"}};


    const mathan_query = {first_name:"Mathan"};
    const mathan_update_data = {$set:{location:"Whitefield"}};

    dbo.collection("employee").find({}).toArray((err,res)=>{
        console.log(res);
    });

    // Update many
    dbo.collection("employee").updateMany(query,update_data,(err,res)=>{
        console.log(res.modifiedCount);
    });

    // Update only one
    dbo.collection("employee").updateOne(mathan_query,mathan_update_data,(err,res)=>{
        console.log(res.modifiedCount);
    });

    dbo.collection("employee").find({}).toArray((err,res)=>{
        console.log(res);
    });

    db.close();
});