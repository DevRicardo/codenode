var express = require('express');
var DB = require('database/database');
var router = express.Router();
var auth    = require('auth/auth');
var Auth = new auth();
var Database = new DB();

/* GET home page. */
router.get('/', Auth.guest , function(req, res, next) {
	
    var users = null;
     Database.getSingleData('jose', function(resp){
         
         res.render('dashboard', { title: '.:Monitoring:.', users:resp });
     });

     

    
});

module.exports = router;