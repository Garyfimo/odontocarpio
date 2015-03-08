<?php

if (isset($_POST["from"])) {
    $to = "citas@odontocarpioperu.com";
    if(isset($_POST["to"])){
        $to = $_POST["to"];
    }
    $from = $_POST["from"]; // sender
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $message = wordwrap($message, 70);
    // send mail
    if (mail($to, $subject, $message, "From: $from\n")) {
        echo "{\"result\": 1}";
    }else{
       echo "{\"result\": 0}"; 
    }
}

