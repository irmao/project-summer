<?php
  error_reporting( E_ALL );
  require('connection.php');
  require('rest.php');

  function findAllEventsByUserId($userId) {
    $query = "SELECT event.id, event_type.name, event.event_date ".
      "FROM ps_event event, ps_event_type event_type ".
      "WHERE event.event_type_id = event_type.id AND event.user_id = $userId";

    return buildEventListFromQuery($query);
  }

  function findExercisesByEventDateAndUserId($eventDate, $userId) {
    $query = "SELECT event_exercise.id, exercise.name, exercise.is_exercise, metric.unit, ".
      "event_exercise.exercise_load, event_type.name AS event_type_name ". 
      "FROM ps_exercise AS exercise, ps_metric AS metric, ps_event_exercise event_exercise, ps_event evnt, ps_event_type event_type ".
      "WHERE exercise.metric_id = metric.id AND exercise.is_exercise = 1 AND exercise.id = event_exercise.exercise_id AND ".
      "evnt.id = event_exercise.event_id AND evnt.event_type_id = event_type.id AND evnt.event_date = '".$eventDate."' AND ".
      "evnt.user_id = $userId";
      
      return buildEventExerciseListFromQuery($query);
  }

  function buildEventListFromQuery($query) {
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

  function buildEventExerciseListFromQuery($query) {
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
          .'"isExercise":'. ($row['is_exercise'] ? 'true' : 'false').','
          .'"load":'.$row['exercise_load'].','
          .'"metrics":'.'{"unit":"'.$row['unit'].'"},'
          .'"eventType":"'.$row['event_type_name'].'"'
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
    $userId = $_GET['userId'];
    $events = findAllEventsByUserId($userId);
    send_response($events);
  }

  // find all exercises in an event (the event date is given)
  // and an user id. Each exercise contains a flag informing if it 
  // is planned, goal or done
  else if (isset($_GET['findExercisesByEventDateAndUserId'])) {
    $eventDate = $_GET['eventDate'];
    $userId = $_GET['userId'];
    $eventExercises = findExercisesByEventDateAndUserId($eventDate, $userId);
    send_response($eventExercises);

  } else if (isset($_GET['insertExerciseSetEvent'])) {
    if (!isset($_GET['eventTypeId'])) die();
    if (!isset($_GET['userId'])) die();
    if (!isset($_GET['eventDate'])) die();
    if (!isset($_GET['exerciseSetId'])) die();
    if (!isset($_GET['exerciseSetLoad'])) die();

    $eventTypeId = $_GET['eventTypeId'];
    $userId = $_GET['userId'];
    $eventDate = $_GET['eventDate'];
    $exerciseSetId = $_GET['exerciseSetId'];
    $exerciseSetLoad = $_GET['exerciseSetLoad'];
  }
?>
