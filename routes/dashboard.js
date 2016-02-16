var express = require('express');
var DB = require('database/database');
var router = express.Router();
var auth    = require('auth/auth');
var Auth = new auth();
var Database = new DB();

/* GET home page. */
router.get('/', Auth.guest , function(req, res, next) {
       
     res.render('dashboard', 
     	{ 
     		title: '.:Monitoring:.',
     		has:req.session.has,
     		name:req.session.name
     	});
    
});

module.exports = router;