const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  `mongodb://localhost/userlist`
);

const userSeed = [
  {
    name: "Jim Jones",
    email: "jimjones@email.com" ,
    age: 50,
    role: "admin"
  },
  {
    name: "Kelly Johnson",
    email: "kellysmitch@email.com" ,
    age: 25,
    role: "user"
  },
  {
    name: "John Smith",
    email: "greencarslove@email.com" ,
    age: 40,
    role: "user"
  },
  {
    name: "Bill Johnson",
    email: "johnbill@email.com" ,
    age: 46,
    role: "user"
  },
  {
    name: "Sandy Sample",
    email: "sandysample@email.com" ,
    age: 33,
    role: "user"
  },
  {
    name: "Drew Olsen",
    email: "drewolsen@email.com" ,
    age: 38,
    role: "user"
  },
  {
    name: "Zoey Sho",
    email: "zoeysho@email.com" ,
    age: 24,
    role: "user"
  },
  {
    name: "Walter Wiggins",
    email: "walterhotboi@email.com" ,
    age: 67,
    role: "user"
  },
  {
    name: "Lance Armstrong",
    email: "iwinicheat@email.com" ,
    age: 53,
    role: "user"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
