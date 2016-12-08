<?php 
$headers = "From: {$_POST['from']}" . "\r\n" . 
"Reply-To: {$_POST['from']}" . "\r\n" . 
"X-Mailer: PHP/" . phpversion(); 
mail( $_POST['to'], $_POST['subject'], $_POST['message'], $headers); 
echo("Successful!"); 
?> 