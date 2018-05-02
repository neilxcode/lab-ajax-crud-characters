const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Character = require('../models/characterSchema');



mongoose.connect('mongodb://localhost/lab-ajax-crud-characters', {useMongoClient: true})



  const characters = [
    {
      id: 1,
      name: "Han Solo",
      occupation: "Smuggler",
      weapon: "Blaster Pistol",
      cartoon: true
    },
    {
      id: 2,
      name: "Luke Skywalker",
      occupation: "Jedi Knight",
      weapon: "Lightsaber",
      cartoon: false
    },
    {
      id: 3,
      name: "SpongeBob",
      occupation: "Live under the sea",
      weapon: "Crabby Patty",
      cartoon: true
    }
  ]

  Character.create(characters)
   .then(res =>{
     console.log("ok")
   })
   .catch(err =>{
     console.log(err)
   })

