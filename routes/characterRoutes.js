const express = require('express');
const router  = express.Router();
const Character = require('../models/characterSchema');


/* GET home page */
router.get('/characters', (req, res, next) => {
  Character.find()
.then((list)=>{
  res.json(list);
})
.catch((error)=>{
  res.json(error)
})
});

module.exports = router;