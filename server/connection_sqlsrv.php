<?php
  error_reporting( E_ALL );
  
  require('strings.php');

  function _start_connection() {
    $servername = getServername();
    $username = getUsername();
    $password = getPassword();
    $database = getDatabase();
    $port     = getPort(); 
    $connectionInfo = array( "Database"=>"$database", "UID"=>"$username", "PWD"=>"$password");
    
    $conn = sqlsrv_connect("$servername,$port", $connectionInfo) or die('Could not connect: ' . sqlsrv_error().'<br/>');

    return $conn;
  }

  function _close_connection($conn) {
    sqlsrv_close($conn);
  }

  function _execute_query($conn, $query) {
    $result = sqlsrv_query($conn, $query);

    if ($result === false ) {
      printf("error: %s\n", sqlsrv_error($conn));
    }

    return $result;
  }

  function _has_rows($result) {
    return sqlsrv_has_rows($result);
  }

  function _fetch_assoc($result) {
    return sqlsrv_fetch_assoc($result);
  }
?>