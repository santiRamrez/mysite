<?php

  //Confirmation Message
  $emailUser = $_POST['email'];
	echo "$emailUser";
	
  if (isset($emailUser)) { 
			
			$subjectUser = 'Mensaje Enviado Tecnolatam - Contact Form';
			$bodyUser = "<html>
					<body style=\"background-color: #bbb; padding-top: 20px; height: 100vh;\">
 
						<div style=\"margin: auto; background-color: #fff; width: 95%; max-width: 500px; height: 500px; border: 2px dashed #212121; line-height: 30px; font-family: Calibri;\">
							<h4 style=\"font-size: 20px; padding-left: 16px; padding-right: 16px;\">Gracias por contactarme! / Thanks for contact me!</h4>

							<div style=\"height: 60px; line-height: 25px; padding-left: 16px; margin-top: 16px;\">
								<p style=\"margin: 0; padding: 0;\">I'll check it out your message later</p>
								<p style=\"margin: 0; padding: 0;\">Revisar&eacute; tu mensaje m&aacute;s tarde</p>
							</div>
					

							<div style=\"height: 100px; line-height: 25px; padding-left: 16px; margin-top: 16px;\">
								<p style=\"margin: 0; padding: 0;\">Saludos cordiales / Kind Regards</p>
								<p style=\"font-size: 16px; margin: 0; padding: 0;\"><strong>Santiago Ram&iacute;rez</strong></p>
								<p style=\"margin: 0; padding: 0;\">contacto@tecnolatam.cl</p>
								<p style=\"margin: 0; padding: 0;\">+56 9 6259 9662</p>
							</div>

							<p style=\"font-style: italic; font-size: 14px; margin: 0; padding: 0; padding-left: 16px; margin-top: 16px;\">
								Favor no responder al correo de or&iacute;gen!
							</p>
							<p style=\"font-style: italic; font-size: 14px; margin: 0; padding: 0; padding-left: 16px;\">
								Please do not reply to this email!
							</p>

							<a style=\"display: block; width: 150px; height: 30px; text-align: center; margin: 0 auto; font-family: Calibri; text-decoration: none; padding: 5px 7px; color: #fff; border: 2px solid #fff; background-color: #003a4d; margin-top: 24px;\" href=\"https://tecnolatam.cl\">Visit my website!</a>

						</div>
					</body>
			</html>";
			
			// Email to USER Headers
				$headersToUsers = "MIME-Version: 1.0\r\n";
				$headersToUsers .="Content-Type:text/html; charset=ISO-8859-1\r\n";
				$headersToUsers .= "From: Tecnolatam" ."<contacto@tecnolatam.cl>". "\r\n";
				
			
				if(mail($emailUser, $subjectUser, $bodyUser, $headersToUsers)) {
					// Email Sent
						echo "Mensaje de confirmacion enviado correctamente!";
				} else {
					// Failed
					echo "Sending message has failed";
				}
				
  }

?>