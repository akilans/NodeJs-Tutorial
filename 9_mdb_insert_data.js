const mongodb = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017";

mongodb.connect(db_url, (err, db) => {

    if (err) throw err;

    const dbo = db.db("employee");

    const newEmplpoyee = { first_name: "Akilan", last_name: "Subramanian", location: "Bangalore" };

    dbo.collection("employee").insertOne(newEmplpoyee, (err,res) => {

        if(err) throw err;

        console.log("Data inserted!!!");
        db.close();

    });

    const newEmplpoyees = [
        { first_name: "Mathan", last_name: "Raj", location: "Bangalore" },
        { first_name: "Selvam", last_name: "Ras", location: "Bangalore" }
    ];

    dbo.collection("employee").insertMany(newEmplpoyees, (err,res) => {

        if(err) throw err;

        console.log("Total number of Data inserted!!!"+res.insertedCount);
        db.close();

    });


})