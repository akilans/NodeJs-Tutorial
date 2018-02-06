const mongodb = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017";

mongodb.connect(db_url,(err,db)=>{
    if(err) throw err;

    const dbo = db.db("employee");

    // List all the collections
    dbo.listCollections().toArray((err,collections)=>{
        console.log(collections);
    });

    dbo.createCollection("Akilan",(err,res)=>{
        if(err) throw err;
        console.log("Added collection");
        db.close();
    })

    dbo.dropCollection("TestCollection",()=>{
        console.log("Droped collection");
    });


    

    /*
    // It shows an Error Need to check
    dbo.createCollection("DummyCollections",(err,res)=>{
        if(err) throw err;
        console.log("Created Collections");
    });
    */

    /*
    dbo.dropCollection("TestCollection",(err,res)=>{
        //if(err) throw err;
        console.log("Collection Dropped");
    })
    */

    /*
    //  //if(err) throw err; is not working. Need to check
    dbo.collection("TestCollection").drop((err,delOk)=>{
        console.log("Collection Dropped");
    });
    */

    // List all the collections
    dbo.listCollections().toArray((err,collections)=>{
        console.log(collections);
    });

    db.close();
    
});