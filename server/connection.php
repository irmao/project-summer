<?php
  error_reporting( E_ALL );
  
  require('strings.php');

  function start_connection() {
    $servername = getServername();
    $username = getUsername();
    $password = getPassword();
    $database = getDatabase();
    $conn = mysqli_connect($servername, $username, $password, $database) or die('Could not connect: ' . mysql_error().'<br/>');

    return $conn;
  }

  function close_connection($conn) {
    mysqli_close($conn);
  }

  function execute_query($conn, $query) {
    $result = mysqli_query($conn, $query);

    if ($result === false ) {
      printf("error: %s\n", mysqli_error($conn));
    }

    return $result;
  }

  function get_num_rows($result) {
    return mysqli_num_rows($result);
  }

  function fetch_assoc($result) {
    return mysqli_fetch_assoc($result);
  }
?>