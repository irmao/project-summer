<?php
  error_reporting( E_ALL );
  require_once('connection.php');
  require_once('rest.php');

  function findAllExercises() {
     $query = "SELECT exercise.id, exercise.name, exercise.suggested_load, exercise.is_exercise, metric.unit ". 
      "FROM ps_exercise AS exercise, ps_metric AS metric ". 
      "WHERE exercise.metric_id = metric.id AND exercise.is_exercise = 1";

      return buildExerciseListFromQuery($query);
  }

  function findExercisesByExerciseSetId($exerciseSetId) {
      $query = "SELECT exercise.id, exercise.name, exercise.suggested_load, exercise.is_exercise, metric.unit ". 
        "FROM ps_exercise AS exercise, ps_metric AS metric, ps_exercise_group AS exercisegroup ". 
        "WHERE exercise.metric_id = metric.id AND exercise.id = exercisegroup.exercise_id AND ".
        "exercisegroup.parent_exercise_id = $exerciseSetId ORDER BY exercisegroup.order_in_group";

      return buildExerciseListFromQuery($query);
  }

  function findAllExerciseSets() {
    $query = "SELECT exercise.id, exercise.name, exercise.suggested_load, exercise.is_exercise, metric.unit ". 
        "FROM ps_exercise AS exercise, ps_metric AS metric ". 
        "WHERE exercise.metric_id = metric.id AND exercise.is_exercise = 0";

      return buildExerciseListFromQuery($query);
  }

  function buildJSONExerciseListFromObjectList($exerciseList) {
     $result_json = '[';

     foreach ($exerciseList as $row) {
       $result_json = $result_json 
          .'{"id":'.$row['id'].','
          .'"name":"'.$row['name'].'",'
          .'"metrics":'.'{"unit":"'.$row['unit'].'"},'
          .'"load":'.$row['suggested_load'].','
          .'"isExercise":'. ($row['is_exercise'] ? 'true' : 'false')
          .'},';
     }

     // removes the extra ',' char
     $result_json = substr($result_json, 0, -1);
     $result_json = $result_json . ']';

     return $result_json;
  }

  function buildExerciseListFromQuery($query) {
    $conn = start_connection();
    $result = execute_query($conn, $query);

    if (has_rows($result) > 0) {
      $list = array();
      
      while ($row = fetch_assoc($result)) {
        $object = array(
          'id' => $row['id'],
          'name' => $row['name'],
          'unit' => $row['unit'],
          'suggested_load' => $row['suggested_load'],
          'is_exercise' => $row['is_exercise'] 
        );

        array_push($list, $object);
      }

      close_connection($conn);

      return $list;
    } else {
      // 404
      close_connection($conn);
    }
  }

  // find all exercises
  if (isset($_GET['findAllExercises'])) {
    $exercises = buildJSONExerciseListFromObjectList(findAllExercises());
    send_response($exercises);
  }

  // find an exercises of an exercise set with the given id
  else if (isset($_GET['findExercisesByExerciseSetId'])) {
    $exerciseSetId = $_GET['exerciseSetId'];
    $exercises = buildJSONExerciseListFromObjectList(findExercisesByExerciseSetId($exerciseSetId));
    send_response($exercises);
  }

  // find all exercise sets
  else if (isset($_GET['findAllExerciseSets'])) {
    $exerciseSets = buildJSONExerciseListFromObjectList(findAllExerciseSets());
    send_response($exerciseSets);
  } 
?>
