writeCode

Write command to

- List collections from a database.
```js
use india;
show collections;
```
- create a new collection in your country database which you created recently.

Write code to:-

- crate a database named `weather`
use weather
- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
> db.createCollection('temperature',{size:1024,capped:true,max:3})
> db.temperature.insertMany([{mumbai:32},{delhi:35},{chandigarh:32},{goa:55}])
- create a simple collection named `humidity`
> db.createCollection('humidity')
- check whether `temperature` collection is capped or not ?
> db.temperature.isCapped()
- Delete `humidity` collection and then the entire database(weather).
> db.humidity.drop()
