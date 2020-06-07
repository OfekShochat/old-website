<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailfrom = "o@shoch.at"
    $mailto = "o@shoch.at";
    $headers = "From (website): ".$email;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailto, $txt, $headers);
}