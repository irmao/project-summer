<?php
  error_reporting( E_ALL );
  
  function _start_connection() {
    $servername = getServername();
    $username = getUsername();
    $password = getPassword();
    $database = getDatabase();
    $conn = mysqli_connect($servername, $username, $password, $database) or die('Could not connect: ' . mysql_error().'<br/>');

    return $conn;
  }

  function _close_connection($conn) {
    mysqli_close($conn);
  }

  function _execute_query($conn, $query) {
    $result = mysqli_query($conn, $query);

    if ($result === false ) {
      printf("error: %s\n", mysqli_error($conn));
    }

    return $result;
  }

  function _has_rows($result) {
    return mysqli_num_rows($result) > 0;
  }

  function _fetch_assoc($result) {
    return mysqli_fetch_assoc($result);
  }

  function _insert_id($conn, $result) {
    return mysqli_insert_id($conn);
  }
?>