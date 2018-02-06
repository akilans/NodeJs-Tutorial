# MongoDB Commands
  Popular NoSql Database
  
# RDBMS vs NoSql

  * Table => Collection
  * Row => Document
  * Column => Field
  * Join => Embedded documents, linking

# Commands

  * DB data default location - /var/lib/mongodb/
  * Log file default location - /var/log/mongodb/mongod.log
  * sudo service mongod start
  * show dbs - shows databases
  * use employee - switch to employee database
  * db - shows the current working database
  * Create user for that database
          db.createUser({
            user: "akilan",
            pwd: "akilan@123",
            roles : ["readWrite","dbAdmin"]
          });
   * Create collection - db.createCollection("employee"); // compare with table in RDBMS
   * Create collection with important options
   
            db.createCollection("mycol", { capped : true, autoIndexId : true, size : 
   6142800, max : 10000 } );

   * Drop a collction
        
        db.employees.drop(); - Drop collection

   * To insert data into collections 
   
          db.employee.insert({
            first_name : "Akilan",
            last_name : "Subramanian",
          });
        
   * View all entries in collections - db.employee.find();  // select * from employee;
   * Insert multiple entries
   
             db.employee.insert([
                  {
                      first_name : "Gayatri",
                      last_name : "Bhat",
                  },
                  {
                      first_name : "Karunakar",
                      last_name : "Reddy",
                      location : "hyderabad",
                  },
            ]);
   * db.employee.find().pretty() - To preety print all the entries in the collection
   * db.employee.find({first_name:"Akilan"}).pretty() - T0 preety print selected entries in the collection
   * To print more than one selected rows,
   
                db.employee.find(
                {
                    $or:[
                            {first_name:"Gayatri"},
                            {first_name:"Saravanan"}
                        ]
                    }
            ).pretty();
   * Less than & Greater than filter
   
            db.employee.find({age:{$lt:30}});
            
   * sorting of rows
   
          db.employee.find().sort({first_name:1});
   
   * count 
   
          db.employee.find().count();
          
   * Limit,
   
           db.employee.find().limit(1)

            
   * Update employee
    
                  db.employee.update(
                      {
                          first_name : "Gayatri"
                      },
                      {
                          first_name : "Gayatri",
                          last_name : "Bhat",
                          location : "Pune",
                      }
                   );

    * Update a specific key & value
     
                    db.employee.update(
                        {
                            first_name:"Akilan"
                        },
                        {
                            $set:{
                                location:"Bangalore"
                            }
                        }
                    );
        
    * Increment integer value by some value
      
                    db.employee.update(
                            {
                                first_name:"Akilan"
                            },
                            {
                                $set:{
                                    age:29
                                }
                            }
                       );
    * Decrement add minus value
      
                  db.employee.update(
                        {
                            first_name:"Akilan"
                        },
                        {
                            $inc:{
                                age:1
                            }
                        }
                    );
    * Unset field ,
      
                  db.employee.update(
                      {
                          first_name:"Akilan"
                      },
                      {
                          $unset:{
                              age: ""
                          }
                      }

                 );
                 
    * Updating non existing row & enable upsert to true to insert if not found
      
                db.employee.update(
                    {
                        first_name:"Saravanan"
                    },
                    {
                        first_name:"Saravanan",
                        last_name:"Sampath",
                        location:"Bangalore",
                    },
                    {
                        upsert : true
                    }
               );
               
    * Rename field name,
       
                 db.employee.update(
                    {
                        first_name:"Akilan"
                    },
                    {
                        $rename:{
                            "location":"DC"
                        }
                    }
                );
                
    * Remove entry from collection, Enable justOne to make sure that it delete only one row
       
                  db.employee.remove(
                      {
                          first_name:"Akilan"
                      },
                      {
                          justOne:true
                      }
                  );
                  
       * 
