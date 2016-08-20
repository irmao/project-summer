<?php
  error_reporting( E_ALL );

  function send_response($response) {
    $callback = $_GET['callback'];
    header('Content-Type: application/json');

    if ($callback) {
      echo $callback.'('.$response.')';
    } else {
      echo $response;
    }
    
  }
?>