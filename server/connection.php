<?php
  error_reporting( E_ALL );
  
  require_once('connection_config.php');

  function start_connection() {
    return _start_connection();
  }

  function close_connection($conn) {
    _close_connection($conn);
  }

  function execute_query($conn, $query) {
    return _execute_query($conn, $query);
  }

  function has_rows($result) {
    return _has_rows($result);
  }

  function fetch_assoc($result) {
    return _fetch_assoc($result);
  }

  function insert_id($conn, $result) {
    return _insert_id($conn, $result);
  }
?>