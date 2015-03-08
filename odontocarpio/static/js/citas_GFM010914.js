//-----------------------------------------------------
function fillDayByDoctor(doctor) {
    var day = "";
    if (doctor === "ruesta") {
        day = "<option>Lunes</option>" +
                "<option>Martes</option>" +
                "<option>Jueves</option>" +
                "<option>Sábado</option>";
    } else if (doctor === "carpio") {
        day = "<option>Lunes</option>" +
                "<option>Martes</option>" +
                "<option>Miercoles</option>" +
                "<option>Jueves</option>" +
                "<option>Viernes</option>";
    } else if (doctor === "bernal") {
        day = "<option>Martes</option>" +
                "<option>Jueves</option>";
    } else if (doctor === "bustamante") {
        day = "<option>Miercoles</option>" +
                "<option>Viernes</option>" +
                "<option>Sábado</option>";
    }
    $("#day").html(day);
}
//-----------------------------------------------------
function fillHourByDayAndDoctor(doctor, day) {
    var hour = "";
    if (doctor === "ruesta") {
        if (day === "Lunes") {
            hour = "<option>9:00</option>" +
                    "<option>10:00</option>" +
                    "<option>11:00</option>" +
                    "<option>12:00</option>" +
                    "<option>13:00</option>" +
                    "<option>14:00</option>" +
                    "<option>15:00</option>" +
                    "<option>16:00</option>" +
                    "<option>17:00</option>";
        } else if (day === "Martes") {
            hour = "<option>13:00</option>" +
                    "<option>14:00</option>" +
                    "<option>15:00</option>" +
                    "<option>16:00</option>" +
                    "<option>17:00</option>";
        } else if (day === "Jueves") {
            hour = "<option>13:00</option>" +
                    "<option>14:00</option>" +
                    "<option>15:00</option>" +
                    "<option>16:00</option>" +
                    "<option>17:00</option>" +
                    "<option>18:00</option>" +
                    "<option>19:00</option>";
        } else if (day === "Sábado") {
            hour = "<option>14:00</option>" +
                    "<option>15:00</option>" +
                    "<option>16:00</option>" +
                    "<option>17:00</option>" +
                    "<option>18:00</option>" +
                    "<option>19:00</option>" +
                    "<option>20:00</option>" +
                    "<option>21:00</option>";
        }

    } else if (doctor === "carpio") {
        if (day === "Lunes" || day === "Martes" || day === "Miercoles" || day === "Viernes") {
            hour = "<option>17:00</option>" +
                    "<option>18:00</option>" +
                    "<option>19:00</option>" +
                    "<option>20:00</option>" +
                    "<option>21:00</option>";
        } else if (day === "Jueves") {
            hour = "<option>19:00</option>" +
                    "<option>20:00</option>" +
                    "<option>21:00</option>";

        }

    } else if (doctor === "bernal") {
        if (day === "Martes" || day === "Jueves")
            hour = "<option>9:00</option>" +
                    "<option>10:00</option>" +
                    "<option>11:00</option>" +
                    "<option>12:00</option>" +
                    "<option>13:00</option>";
    } else if (doctor === "bustamante") {
        if (day === "Miercoles" || day === "Viernes") {
            hour = "<option>9:00</option>" +
                    "<option>10:00</option>" +
                    "<option>11:00</option>" +
                    "<option>12:00</option>" +
                    "<option>13:00</option>" +
                    "<option>14:00</option>" +
                    "<option>15:00</option>" +
                    "<option>16:00</option>" +
                    "<option>17:00</option>";
        } else if (day === "Sábado") {
            hour = "<option>9:00</option>" +
                    "<option>10:00</option>" +
                    "<option>11:00</option>" +
                    "<option>12:00</option>" +
                    "<option>13:00</option>" +
                    "<option>14:00</option>" +
                    "<option>15:00</option>" +
                    "<option>16:00</option>" +
                    "<option>17:00</option>" +
                    "<option>18:00</option>" +
                    "<option>19:00</option>" +
                    "<option>20:00</option>" +
                    "<option>21:00</option>";
        }
    }
    $("#hour").html(hour);
}
//-----------------------------------------------------
function solicitarCita() {
    $.ajax({
        type: "POST",
        url: "http://odontocarpioperu.com/mail.php",
        data: {from: $("#e-mail").val(),
            subject: "[SOLICITUD CITA] Dr." + $("#doctor option:selected").text(),
            message: "[CORREO AUTOGENERADO DESDE LA WEB]\n" + $("#name").val() + " ha solicitado una cita con el(la) doctor(a) " + $("#doctor option:selected").text() + " el dia " + $("#day option:selected").text() + " a las " + $("#hour option:selected").text() + " horas\nTelefono: "+ $("#telephone").val() +"\nMotivo:\n" + $("#message").val()
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
        },
        error: function(html) {

            alert("Ha ocurrido un error por favor vuelva a intentar");
        }


    });
}