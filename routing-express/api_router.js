const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send({message : 'Hello  API Router'});
})

module.exports = router;