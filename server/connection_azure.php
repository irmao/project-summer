<?php
  error_reporting( E_ALL );
  
  require('strings.php');

  function start_connection() {
    $servername = getServername();
    $username = getUsername();
    $password = getPassword();
    $database = getDatabase();
    $port     = getPort();
    
    $connectionInfo = array( "Database"=>"$database", "UID"=>"$username", "PWD"=>"$password");
    
    $conn = sqlsrv_connect("$servername,$port", $connectionInfo) or die('Could not connect: ' . sqlsrv_error().'<br/>');

    return $conn;
  }

  function close_connection($conn) {
    sqlsrv_close($conn);
  }

  function execute_query($conn, $query) {
    $result = sqlsrv_query($conn, $query);

    if ($result === false ) {
      printf("error: %s\n", sqlsrv_error($conn));
    }

    return $result;
  }

  function get_num_rows($result) {
    return sqlsrv_num_rows($result);
  }

  function fetch_assoc($result) {
    return sqlsrv_fetch_assoc($result);
  }
?>