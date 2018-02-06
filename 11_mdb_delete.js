const mongodb = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017";

mongodb.connect(db_url,(err,db)=>{

    if(err) throw err;

    const dbo = db.db("employee");

    
    const newEmplpoyee = { first_name: "Akilan", last_name: "Subramanian", location: "Chennai" };

    dbo.collection("employee").insertOne(newEmplpoyee,(err,res)=>{
        if(err) throw err;
        console.log("Akilan Record Added Successfully!!!");
        console.log("Number of Records inserted "+res.insertedCount);
    });



    // Delete only one record skip any first_name with Akilan
    dbo.collection("employee").deleteOne({first_name:"Akilan"},(err,res)=>{
        if(err) throw err;
        console.log("Akilan Record Deleted Successfully!!!");
        console.log("Number of Records deleted "+res.deletedCount);
    });


    // Delete only one record skip any first_name with Akilan
    dbo.collection("employee").deleteMany({location:"Bangalore"},(err,res)=>{
        if(err) throw err;
        console.log("All Bangalore location Records are Deleted Successfully!!!");
        console.log("Number of Records deleted "+res.deletedCount);
    });

    // Delete only one record skip any first_name with Akilan
    dbo.collection("employee").find({}).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
    });

    db.close();

})