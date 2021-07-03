writeCode

Write code to:-

- create a database named `sports`.
use sports
- list all databases present in local mongod server.
show dbs
- create 3 collections named `cricket`, `football`, `TT` in sports databse.
["cricket","football","TT].forEach(sport => db.createCollection(sport))

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
> db.football.insertMany([{name:"cr",age:25,email:"abc.gmail.com",bid_price:"150 million"},{name:"y",age:26,email:"xyz@gmail.com",bid_price:"2cr"}])

> db.cricket.insertMany([{name:"cr",age:25,email:"abc.gmail.com",bid_price:"150 million"},{name:"y",age:26,email:"xyz@gmail.com",bid_price:"2cr"}])

> db.TT.insertMany([{name:"cr",age:25,email:"abc.gmail.com",bid_price:"150 million"},{name:"y",age:26,email:"xyz@gmail.com",bid_price:"2cr"}])

- list all collections in sports database.
show collections
- rename `TT` collection to `tennis`.
db.TT.renameColection("tennis);
- create a capped collection called `khokho` which should have max 3 documents.
> db.createCollection("khokho",{size:1024,capped:true,max:3})
  Try inserting more than 3 and see what happens?
  > db.khokho.insertMany([{player:"a"},{player:"b"},{player:"c"},{player:"d"},{player:"e"}])
last 3 , or latest 3 gets stored and rest discarded.
- check whether a collection is capped or not?
> db.khokho.isCapped() //true
- drop all documents from `football` collection.
db.football.remove({})
- delete cricket collection completely.
db.cricket.drop()
- delete sports database.
db // sports
db.dropDatabase()
- check which database you are connected to ?
db
- connect to test database
use test