const mongodb = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017";

mongodb.connect(db_url, (err, db) => {

    if (err) throw err;

    const dbo = db.db("employee");

    const newEmplpoyee = { first_name: "Akilan", last_name: "Subramanian", location: "Bangalore" }

    dbo.collection("employee").insertOne(newEmplpoyee, (err,res) => {

        if(err) throw err;

        console.log("Data inserted!!!");
        db.close();

    });


})