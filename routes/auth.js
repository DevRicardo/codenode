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
           // variable de session 
		   req.session.user = req.body.user;
		   req.session.email = req.body.email;	

		   res.redirect("/dashboard");      	
		}
        
	});
	  
        
});


router.get('/logout', function(req, res, next){
    
    delete req.session.user;
    delete req.session.email;
    res.redirect("/");

});

module.exports = router;