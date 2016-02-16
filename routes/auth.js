var express = require('express');
var auth    = require('auth/auth');
var router  = express.Router();
var crypto = require('crypto');
var Auth = new auth();

/* GET home page. */
router.post('/login', function(req, res, next) {
	// datos del formulario
    var dataUser = {email:req.body.user, password:req.body.password}; 

    // validando credenciales del usuario
	Auth.check(dataUser, function(resp){

		if(resp.length == 0){
            res.redirect("/"); 
		}else{

           // variable de session 
           var name = resp[0].name;
           var email = resp[0].email;
           var id = resp[0].id;

           // creando variable de sesion
           var sess = crypto.createHmac('sha1', name).update(email).digest('hex');
           
           req.session.name = name;
           req.session.iduser = id;
           req.session.has = sess;

           

           // registramos el inicio de sesion en la base de datos
		   Auth.registerSession(id, sess, function(result){

		       if(result.affectedRows > 0){
		       	   // redireccion a pagina protegida
		           res.redirect("/dashboard");	
		       }	

		   });	

		         	
		}
        
	});
	  
        
});


router.get('/logout', function(req, res, next){
    
    // eliminando sesion de la base de datos
    
    Auth.destroySession(req.session.iduser, function(result){

        if(result.affectedRows > 0){
        	delete req.session.iduser;
          delete req.session.has;
          res.redirect("/");
        }
    });
    

});

module.exports = router;