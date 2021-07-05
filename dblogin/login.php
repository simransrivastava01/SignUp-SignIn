<?php
   require_once 'dbconfig.php';
   $umail = trim($_POST['txt_umail']);
   $upass = trim($_POST['txt_upass']); 
 
   if($umail=="") {
      $error[] = "provide email id !"; 
   }
   else if(!filter_var($umail, FILTER_VALIDATE_EMAIL)) {
      $error[] = 'Please enter a valid email address !';
   }
   else if($upass=="") {
      $error[] = "provide password !";
   }
   else if(strlen($upass) < 6){
      $error[] = "Password must be atleast 6 characters"; 
   }
   else
   {
      try
      {
        if($user->login($umail,$umail,$upass))
        {
            echo "logged in";
        } else {
            echo "invalid";
        }
    }
     catch(PDOException $e)
     {
        echo $e->getMessage();
     }
    }

?>