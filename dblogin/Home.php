<?php
include_once 'dbconfig.php';
if(!$user->is_loggedin())
{
 $user->redirect('index.html');
}
$user_id = $_SESSION['user_session'];
$stmt = $DB_con->prepare("SELECT * FROM users WHERE user_id=:user_id");
$stmt->execute(array(":user_id"=>$user_id));
$userRow=$stmt->fetch(PDO::FETCH_ASSOC);
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style type="text/css">
        body{ font: 14px sans-serif; text-align: center; }
				.div1 {
  background-color: lightgrey;
  width: 600px;
  padding: 100px;
  margin: 150px;
}
    </style>
</head>
<body style="background-color:#262833">
     <center>
    <div class="div1">
	    <h1>Hi, <b><?php print($userRow['user_name']); ?>!</b></h1>
        <br> <h3>Welcome to our site.</h3><br>
    <p>
        <a href="logout.php?logout=true" class="btn btn-danger"><i class="glyphicon glyphicon-log-out"></i> logout</a>
    </p>
	</div>
	</center>

</body>
</html>