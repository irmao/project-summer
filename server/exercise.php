<?php
  error_reporting( E_ALL );
  require('connection.php');
  require('rest.php');

  function getExercises($query) {
    $conn = start_connection();
    $result = execute_query($conn, $query);

    if (has_rows($result) > 0) {
      // creates the json
      $result_json = '[';
      while ($row = fetch_assoc($result)) {
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

      close_connection($conn);

      return $result_json;
    } else {
      // 404
      close_connection($conn);
    }
  }

  // find all exercises
  if (isset($_GET['findAllExercises'])) {
    $query = "SELECT exercise.id, exercise.name, exercise.suggested_load, exercise.is_exercise, metric.unit ". 
      "FROM ps_exercise AS exercise, ps_metric AS metric ". 
      "WHERE exercise.metric_id = metric.id AND exercise.is_exercise = 1";

    $exercises = getExercises($query);
    send_response($exercises);
  }

  // find an exercises of an exercise set with the given id
  else if (isset($_GET['findExercisesByExerciseSetId'])) {
    $id = $_GET['findExercisesByExerciseSetId'];

    $query = "SELECT exercise.id, exercise.name, exercise.suggested_load, exercise.is_exercise, metric.unit ". 
      "FROM ps_exercise AS exercise, ps_metric AS metric, ps_exercise_group AS exercisegroup ". 
      "WHERE exercise.metric_id = metric.id AND exercise.id = exercisegroup.exercise_id AND ".
      "exercisegroup.parent_exercise_id = $id ORDER BY exercisegroup.order_in_group";
    $exercises = getExercises($query);
    send_response($exercises);
  }

  // find all exercise sets
  else if (isset($_GET['findAllExerciseSets'])) {
    $query = "SELECT exercise.id, exercise.name, exercise.suggested_load, exercise.is_exercise, metric.unit ". 
      "FROM ps_exercise AS exercise, ps_metric AS metric ". 
      "WHERE exercise.metric_id = metric.id AND exercise.is_exercise = 0";

    $exerciseSets = getExercises($query);
    send_response($exerciseSets);
  } 
?>
