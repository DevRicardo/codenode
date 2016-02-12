var express = require('express');
var auth    = require('auth/auth');
var router  = express.Router();
var Auth = new auth();

/* GET home page. */
router.post('/login', function(req, res, next) {

    var dataUser = {email:req.body.user, password:req.body.password}; 
    
	Auth.check(dataUser, function(resp){
		if(resp.length == 0){
            res.redirect("/"); 
		}else{

		   res.redirect("/dashboard");      	
		}
        
	});
	  
        
});

module.exports = router;