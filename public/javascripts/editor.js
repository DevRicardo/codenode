
/************************************
*            FUNCIONES ACE          *
*                                   *
************************************/


// Obtiene el contenido del editor
        //editor.getValue()
        // modifica el contenido del editor
        //editor.setValue("hola mundo")

        // inserta el texto en la pósicion indicada
        // #insert({row, column}, String text)  Object


 var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/javascript");
    editor.$blockScrolling = Infinity;

    // eventos de la sesion
    editor.session.on('change', function(e){       
        
        
    });

    // eventos del editor
    editor.on('copy', function(e){
        console.log(e);
    });

    // Detectar cambios en el modo del editor
    $(".mdl-radio__button").on('change', function(){
        editor.session.setMode("ace/mode/"+this.value);	
    });

    // detectar cuando se preciona una tecla
    $("#editor").on('keyup',function(){
          
          socket.emit('change_client',{code:editor.getSession().getValue()});
    });



/************************************
*            FUNCIONES socket.io    *
*                                   *
************************************/

socket.on('change_editor', function( data ){    


    editor.getSession().setValue(data.code)   
     
        
});
socket.on('online_user', function( data ){

});
