function switchBy(divToFade, divToShow, arrayExtras){
    arrayExtras = arrayExtras || -1;
    if(arrayExtras !== -1){
        for(var i = 0; i < arrayExtras.length; i++){
            $(arrayExtras[i]).fadeOut(0);
        }
    }
    $(divToFade).css({"position":"absolute"});
    $(divToFade).fadeOut(0);
    $(divToShow).css({"position":"relative"});
    $(divToShow).fadeIn(500);
}

function popOut(){
    $("section[role='popup']").fadeOut(500);
}

function sendSuscribe() {
    $.ajax({
        type: "POST",
        url: "http://odontocarpioperu.com/mail.php",
        data: {from: $("#e-mail-suscribe").val(),
            subject: "[SUSCRIPCION] " + $("#name-suscribe").val(),
            message: "[CORREO AUTOGENERADO DESDE LA WEB]\n" + "DATOS:\nNombres y Apellidos:" +$("#name-suscribe").val() + "\nNumero de Telefono:" + $("#tel-suscribe").val() + "\nDireccion de Correo: " + $("#e-mail-suscribe").val(),
            to: "suscripcion@odontocarpioperu.com"
        },
        dataType: 'json',
        beforeSend: function() {

        },
        complete: function(html) {
            var obj = $.parseJSON(html.responseText);

            if (obj.result === 1) {
                alert("Se ha enviado su solicitud con exito");
            } else {
                alert("Por favor verifique que ha llenado todos los campos y que estos hayan sido escritos correctamente");
            }
            popOut();
        },
        error: function(html) {

            alert("Ha ocurrido un error por favor vuelva a intentar");
            popOut();
        }


    });
}

