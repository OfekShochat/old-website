<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailfrom = $_POST['email'];
    $message = $_POST['message'];

    $mailto = "o@shoch.at";
    $headers = "From (website): ".$mailfrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailto, $txt, $headers);
}