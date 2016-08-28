<?php
  error_reporting( E_ALL );
  require_once('exercise.php');
  require_once('connection.php');
  require_once('rest.php');

  function findAllEventsByUserId($userId) {
    $query = "SELECT event.id, event_type.name, event.event_date ".
      "FROM ps_event event, ps_event_type event_type ".
      "WHERE event.event_type_id = event_type.id AND event.user_id = $userId";

    return buildEventListFromQuery($query);
  }

  function findExercisesByEventDateAndUserId($eventDate, $userId) {
    $query = "SELECT exercise.id, exercise.name, exercise.is_exercise, metric.unit, ".
      "event_exercise.exercise_load, event_type.name AS event_type_name ". 
      "FROM ps_exercise AS exercise, ps_metric AS metric, ps_event_exercise event_exercise, ps_event evnt, ps_event_type event_type ".
      "WHERE exercise.metric_id = metric.id AND exercise.is_exercise = 1 AND exercise.id = event_exercise.exercise_id AND ".
      "evnt.id = event_exercise.event_id AND evnt.event_type_id = event_type.id AND evnt.event_date = '".$eventDate."' AND ".
      "evnt.user_id = $userId ORDER BY event_exercise.id";
      
      return buildEventExerciseListFromQuery($query);
  }

  function findExercisesByEventDateUserIdAndEventTypeId($eventDate, $userId, $eventTypeId) {
    $query = "SELECT exercise.id, exercise.name, exercise.is_exercise, metric.unit, ".
      "event_exercise.exercise_load, event_type.name AS event_type_name ". 
      "FROM ps_exercise AS exercise, ps_metric AS metric, ps_event_exercise event_exercise, ps_event evnt, ps_event_type event_type ".
      "WHERE exercise.metric_id = metric.id AND exercise.is_exercise = 1 AND exercise.id = event_exercise.exercise_id AND ".
      "evnt.id = event_exercise.event_id AND evnt.event_type_id = event_type.id AND evnt.event_date = '".$eventDate."' AND ".
      "evnt.user_id = $userId AND event_type.id = $eventTypeId ORDER BY event_exercise.id";
      
      return buildEventExerciseListFromQuery($query);
  }

  function deleteEventExercises($eventTypeId, $userId, $eventDate) {
    $query = "DELETE ps_event FROM ps_event LEFT JOIN ps_event_exercise ON ".
      "ps_event.id = ps_event_exercise.event_id WHERE ps_event.user_id = $userId AND ". 
      "ps_event.event_type_id = $eventTypeId AND ps_event.event_date = '".$eventDate."'";

    $conn = start_connection();
    execute_query($conn, $query);
    close_connection($conn);
  }

  function insertExerciseSetEvent($eventTypeId, $userId, $eventDate, $exerciseSetId, $exerciseSetLoad) {
    $exerciseList = findExercisesByExerciseSetId($exerciseSetId);

    if (count($exerciseList) > 0) {
      $exerciseIdListAsString = '';
      $exerciseLoadListAsString = '';

      foreach ($exerciseList as $exercise) {
        $exerciseIdListAsString = $exerciseIdListAsString . $exercise['id'] . ',';
        $exerciseLoadListAsString = $exerciseLoadListAsString . ($exercise['suggested_load'] * $exerciseSetLoad) . ',';
      }

      // removes the extra ',' char
      $exerciseIdListAsString = substr($exerciseIdListAsString, 0, -1);
      $exerciseLoadListAsString = substr($exerciseLoadListAsString, 0, -1);

      insertExerciseEventList($eventTypeId, $userId, $eventDate, $exerciseIdListAsString, $exerciseLoadListAsString);
    } 
  }

  // checks the database for exercises with the same parameters as the given arguments given in this 
  // method (event type id, user id, event date and exercise id). If there are exercises in the database, deletes them and sums
  // their load in the exercise load array. Returns the new exercise load array
  // This method does nothing if the eventType corresponds to PLANNED EXERCISE
  function collapseExercises($conn, $eventTypeId, $userId, $eventDate, $exerciseIdListAsString, $exerciseLoadListAsString) {
    // DO NOT COLLAPSE PLANNED EXERCISES
    if ($eventTypeId == 2) {
      return explode(',', $exerciseLoadListAsString);
    }

    $query = "SELECT ee.exercise_id AS exercise_id, ee.exercise_load AS exercise_load, ee.id AS event_exercise_id, e.id AS event_id ".
      "FROM ps_event e, ps_event_exercise ee WHERE e.event_type_id = $eventTypeId AND e.user_id = $userId AND e.event_date = ".
      "'".$eventDate."' AND ee.exercise_id IN ($exerciseIdListAsString) AND ee.event_id = e.id";

    $exerciseIdList = explode(',', $exerciseIdListAsString);
    $exerciseLoadList = explode(',', $exerciseLoadListAsString);

    $result = execute_query($conn, $query);

    // sums the exercise load and creates a list of the exercises to be deleted
    $idsToBeDeleted = '';
    $foundExercises = false;
    $eventIds = '';

    while ($row = fetch_assoc($result)) {
      $foundExercises = true;
      $index = array_search($row['exercise_id'], $exerciseIdList);
      $exerciseLoadList[$index] += $row['exercise_load'];
      $idsToBeDeleted = $idsToBeDeleted . $row['event_exercise_id'] . ',';
      $eventIds = $eventIds . $row['event_id'] . ',';
    }

    if ($foundExercises) {
      // removes the extra ',' char
      $idsToBeDeleted = substr($idsToBeDeleted, 0, -1);
      $eventIds = substr($eventIds, 0, -1);

      // deletes the event which load is updated in the exerciseLoadList
      $query = "DELETE FROM ps_event_exercise WHERE ps_event_exercise.id IN ($idsToBeDeleted)";
      execute_query($conn, $query);

      // removes all events that don't have associated event_exercises anymore
      $query = "DELETE FROM ps_event WHERE ps_event.id NOT IN (SELECT ee.event_id FROM ps_event_exercise ee)";
      execute_query($conn, $query);
    }

    return $exerciseLoadList;
  }

  function insertExerciseEventList($eventTypeId, $userId, $eventDate, $exerciseIdListAsString, $exerciseLoadListAsString) {
    $exerciseIdList = explode(',', $exerciseIdListAsString);
    $exerciseLoadList = explode(',', $exerciseLoadListAsString);

    if (count($exerciseIdList) < 1) {
      return;
    }

    if (count($exerciseIdList) != count($exerciseLoadList)) {
      return;
    }

    $conn = start_connection();
    
    // looks for events on that day. If the is already that exercises, sum the loads
    $exerciseLoadList = collapseExercises($conn, $eventTypeId, $userId, $eventDate, $exerciseIdListAsString, $exerciseLoadListAsString);

    $query = "INSERT INTO ps_event(event_type_id, user_id, event_date) VALUES ($eventTypeId, $userId, '$eventDate')";
    
    $result = execute_query($conn, $query);
    $eventId = insert_id($conn, $result);

    if ($result) {
      $query = "INSERT INTO ps_event_exercise(event_id, exercise_id, exercise_load) VALUES ";

      for ($i=0; $i < count($exerciseIdList); $i++) {
        $query = $query
        ."($eventId,"
        .$exerciseIdList[$i].","
        .$exerciseLoadList[$i]."),";
      }
      
      // removes the extra ',' char
      $query = substr($query, 0, -1);
      $result = execute_query($conn, $query);

    } else {
      echo "Error creating event";
    }

    close_connection($conn);
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

  } 

  // find all exercises in an event (the event date is given),
  // an user id, and the event type id.  
  else if (isset($_GET['findExercisesByEventDateUserIdAndEventTypeId'])) {
    $eventDate = $_GET['eventDate'];
    $userId = $_GET['userId'];
    $eventTypeId = $_GET['eventTypeId'];
    $eventExercises = findExercisesByEventDateUserIdAndEventTypeId($eventDate, $userId, $eventTypeId);
    send_response($eventExercises);

  } 
  
  else if (isset($_GET['insertExerciseSetEvent'])) {
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

    insertExerciseSetEvent($eventTypeId, $userId, $eventDate, $exerciseSetId, $exerciseSetLoad);
  }

  else if (isset($_GET['insertExerciseEventList'])) {
    if (!isset($_GET['eventTypeId'])) die();
    if (!isset($_GET['userId'])) die();
    if (!isset($_GET['eventDate'])) die();
    if (!isset($_GET['exerciseIdList'])) die();
    if (!isset($_GET['exerciseLoadList'])) die();

    $eventTypeId = $_GET['eventTypeId'];
    $userId = $_GET['userId'];
    $eventDate = $_GET['eventDate'];
    $exerciseIdListAsString = $_GET['exerciseIdList'];
    $exerciseLoadListAsString = $_GET['exerciseLoadList'];

    insertExerciseEventList($eventTypeId, $userId, $eventDate, $exerciseIdListAsString, $exerciseLoadListAsString);
  }

  else if (isset($_GET['deleteEventExercises'])) {
    if (!isset($_GET['eventTypeId'])) die();
    if (!isset($_GET['userId'])) die();
    if (!isset($_GET['eventDate'])) die();

    $eventTypeId = $_GET['eventTypeId'];
    $userId = $_GET['userId'];
    $eventDate = $_GET['eventDate'];
    
    deleteEventExercises($eventTypeId, $userId, $eventDate);
  }
?>
