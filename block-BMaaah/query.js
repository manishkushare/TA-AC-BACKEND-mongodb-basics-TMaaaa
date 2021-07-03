// use blog;

var arrayOfArticles = [
    {
        title:"a",
        createdAt : "2021-1-1",
        details : 'Hey I am a',
        author : {
            name : "abc",
            email:"abc@gmail.com",
            age : 20,
        },
        tags: ['html','css','web']
    },
    {
        title:"d",
        createdAt :"2021-1-1",
        details : 'Hey I am d',
        author : {
            name : "def",
            email:"def@gmail.com",
            age : 25,
        },
        tags: ['express','node','web']
    },
    {
        title:"x",
        createdAt : "2021-1-1",
        details : 'Hey I am x',
        author : {
            name : "xyz",
            email:"xyz@gmail.com",
            age : 20,
        },
        tags: ['hof','closure','javascript']
    }
]

db.articles.insertMany(arrayOfArticles);
db.articles.find();
db.articles.find({"_id" : ObjectId("60e06740ba39e2e58abb7e8a")})
db.articles.find( {title :"d"})
db.articles.find({tags :"web"});
db.articles.update({ "_id" : ObjectId("60e06740ba39e2e58abb7e8a")},{$set: {title : "html and css"}})
db.articles.update({title :"d"},{$set: {"author.name" : "suraj"}})
db.articles.updateMany({},{$rename : {"details":"description"}});
db.articles.update({title : "d"},{$push : {tags : "express"}})
db.articles.update({title : "d"},{$set : {"title":'node in detail'}})
db.articles.update({title : "x"},{"title":'advance function in details in detail'})
// The difference between  with $set and without &set
/*
with $set particular feild is updated and rest others are preserved
without $set, particular field is updated and preserved, while rest are discarded.
*/
// db.articles.update({title:'node in detail'},{
//     $add: {
//         "author.age" : `${author.age}+5`   
//     }
// })
db.COLLECTION_NAME.remove({"_id" : ObjectId("60e06740ba39e2e58abb7e8c")});


 db.users.find({gender:'Male',sports:{$all: ["cricket"]}}).pretty()

 db.users.update({name :"Steve Ortega"},{$push :{sports : "golf"}});

 db.users.find({$or: [{sports : 'cricket'},{sports : 'football'}]})
