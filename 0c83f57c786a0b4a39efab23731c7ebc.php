<?php
  header('Access-Control-Allow-Origin: *');
  switch ($_POST['action']) {
    case '0c83f57c786a0b4a39efab23731c7ebc':
      sendEmail();
    break;
    default:
      echo json_encode('CommandNotRecognized');
    break;
  }
  function sendEmail(){
    $name = 'Nombre: ' . $_POST['name'] . '\n';
    $phone = $_POST['phone'] . '\n';
    $email = $_POST['email'] . '\n';
    $bodyMsg = $_POST['bodyMsg'] . '\n';
    $msg = $name . $phone . $email . $bodyMsg;
    $mail_status = mail("info@isidevelopment.com","Mensaje desde pagina web\n",$msg);
    if($mail_status)
      echo json_encode('Done');
    else
      echo json_encode('Error');
  }
?>
