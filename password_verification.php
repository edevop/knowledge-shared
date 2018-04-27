

<?php
/*
# functions that we can use

*/

/*
# password_hash();
For hashing password we have to use password_hash(); function, the first parameter is a password and second parameter
used to specify the algorithn to hash password.
**/


     $password = "123456";
     $hash = password_hash($passwod, PASSWORD_DEFAULT);
     $hashed_password = "$2y$10$BBCpJxgPa8K.iw9ZporxzuW2Lt478RPUV/JFvKRHKzJhIwGhd1tpa";

     /*
     "123456" will become "$2y$10$BBCpJxgPa8K.iw9ZporxzuW2Lt478RPUV/JFvKRHKzJhIwGhd1tpa"
     */

?>

<?php
/*
# password_verify();
for checking passwords, we have to use password_verify function, which checks a password string with a
hashed password, then returns a boolean
**/

     $password = "123456";
     $hashed_password = "$2y$10$BBCpJxgPa8K.iw9ZporxzuW2Lt478RPUV/JFvKRHKzJhIwGhd1tpa";
     password_verify($password, $hashed_password);

     /*
      if the password match it will return true.
     */

?>
