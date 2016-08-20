<?php
  error_reporting( E_ALL );

  function send_response($response) {
    header('Content-Type: application/json');

    if (isset($_GET['callback'])) {
      echo $_GET['callback'].'('.$response.')';
    } else {
      echo $response;
    }
    
  }
?>