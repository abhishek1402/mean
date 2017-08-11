var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.send('sdjk');
});
router.get('/index',function(req,res,next){
    res.send('kdsl');
});

module.exports = router;