var socket = io.connect('/');
    socket.on('event_from_server', function( data ){
        console.log(data.message);
    });




    socket.on('users', function( data ){        
        var content = "<ul>";
        $.each(data.message, function( index, value ) {
            content += "<li>"+value.id+")"+value.name+"</li>" ;
        });
        content += "<ul>";

        $("#dispaly").html(content)
    });


    $("#send").on('click', function(){
    	socket.emit('message_client',{msj:"jose"});
    });


/*********************************************
*                                            *
*          ALMACENAMIENTO LOCAL              *
*                                            * 
**********************************************/

function setSession(session)
{
    if(!sessionStorage.session && sessionStorage.session == ""){
        sessionStorage.session = session;
    }
    alert(sessionStorage.session);
    
}


function getSession()
{
    if(sessionStorage.session && sessionStorage.session != ""){
        return sessionStorage.session;    
    }else{
        return null
    }
}


$(document).on('ready',function(){

    var has = $("#has").val();
   
    setSession(has);

});

