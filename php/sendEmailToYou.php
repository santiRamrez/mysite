<?php

	//Check for POST variable adn decode JSON data from HTML frontend retrive to this php file using AJAX
	$data = "";

	if(isset($_POST['data'])) {
		$data = json_decode($_POST['data'], false);
	}

	//Object notation in PHP
	$name = $data->name;
	$email = $data->email;
	$message = $data->message;

	echo "$name \n$email \n$message";
	
	if(isset($name) && isset($email) && isset($message)) {
	
			// Data To Send to me
			$toEmail = 'contacto@tecnolatam.cl';
			$subject1 = 'Mensaje Tecnolatam Portfolio - Contact Form';
			$body = "<h4>Nombre: <span>$name</span></h4>
							 <h4>Email: <span>$email</span></h4>
							 <h4>Mensaje:</h4><p>$message</p>";
			
			// Email Headers
				$headers = "MIME-Version: 1.0\r\n";
				//The charset=ISO-8859-1 makes CSS available using like this: 
				//<h1 style="font-size: 16px; color: #fff;">My Title</h1>
				
				$headers .="Content-Type:text/html; charset=ISO-8859-1\r\n";
				$headers .= "From: " .$name. "<".$email.">". "\r\n";

				if(mail($toEmail, $subject1, $body, $headers)) {
					// Email Sent
					echo "Mensaje enviado correctamente!\n";

				}else {
					// Failed
					echo "Sending message has failed";
				}
				
		}
	
?>