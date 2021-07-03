// use mountains

db.himalayas.insert({name: 'Dhauldhar range', height: '4000 mtrs'});

db.himalayas.insertMany([{name: 'a range', height: '4000 mtrs'},{name: 'range2', height: '4000 mtrs'},{name: 'range 3', height: '4000 mtrs'}])


db.himalayas.find()

db.himalayas.find({name:'range2'})