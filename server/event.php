<?php
  error_reporting( E_ALL );
  require('connection.php');
  require('rest.php');

  function getEvents($query) {
    $conn = start_connection();
    $result = execute_query($conn, $query);

    if (has_rows($result) > 0) {
      date_default_timezone_set('America/Sao_Paulo');
      // creates the json
      $result_json = '[';
      while ($row = fetch_assoc($result)) {
        $result_json = $result_json 
          .'{"id":'.$row['id'].','
          .'"name":"'.$row['name'].'",'
          .'"event_date":'.DateTime::createFromFormat('Y-m-d', $row['event_date'])->getTimestamp()*1000
          .'},';
      }

      // removes the extra ',' char
      $result_json = substr($result_json, 0, -1);
      $result_json = $result_json . ']';

      close_connection($conn);

      return $result_json;
    } else {
      // 404
      close_connection($conn);
    }
  }

  // find all events of a given user id
  if (isset($_GET['findAllEventsByUserId'])) {
    $userId = $_GET['findAllEventsByUserId'];
    $query = "SELECT event.id, event_type.name, event.event_date ".
      "FROM ps_event event, ps_event_type event_type ".
      "WHERE event.event_type_id = event_type.id AND event.user_id = $userId";

    $events = getEvents($query);
    send_response($events);
  }
?>
