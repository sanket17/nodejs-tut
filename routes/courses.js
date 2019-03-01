const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.send('In courses routes..');
});

module.exports = router;