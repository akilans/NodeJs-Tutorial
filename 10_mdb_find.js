const mongodb = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017";

mongodb.connect(db_url,(err,db)=>{

    if(err) throw err;

    const dbo = db.db("employee");

    // Find one by field name

    dbo.collection("employee").findOne({first_name:"Akilan"},(err,res)=>{
        if(err) throw err;
        console.log("Name - "+res.first_name+" "+res.last_name);
    });

    // Find all the entries in the row [ Document ]

    dbo.collection("employee").find({}).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
    });

     // Find all the entries in the row with specified field name [ Document ]

    dbo.collection("employee").find({first_name:"Akilan"}).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
    });

    // Find all the entries in the row with specified field name [ Document ]

    // Ignore id, last_name column in query result
    dbo.collection("employee").find({}).project({_id:0,first_name:1,location:1}).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
    });

    //const query = {name:"Akilan"};
    const query = {first_name:/^A/};

    // Find by query & regular expression
    dbo.collection("employee").find(query).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
    });

    const new_query = {location:"Bangalore"};
    const mySort = { first_name:-1 };

    // Find by query & sort by first_name
    dbo.collection("employee").find(new_query).sort(mySort).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
    });

    db.close();

})