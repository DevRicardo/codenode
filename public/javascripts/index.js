/*********************************************
*                                            *
*          ALMACENAMIENTO LOCAL              *
*                                            * 
**********************************************/

function setSession(session)
{
    if(sessionStorage.session){

        if(sessionStorage.session == ""){

            sessionStorage.session = session;
        }        
    }else{
        sessionStorage.session = session;
    }
    
    
}


function getSession()
{
    if(sessionStorage.session && sessionStorage.session != ""){
        return sessionStorage.session;    
    }else{
        return null
    }
}


function setName(user)
{
    if(sessionStorage.user){

        if(sessionStorage.user == ""){

            sessionStorage.user = user;
        }        
    }else{
        sessionStorage.user = user;
    }
    
    
}


function getName()
{
    if(sessionStorage.user && sessionStorage.user != ""){
        return sessionStorage.user;    
    }else{
        return null
    }
}



