<?php
/**
 * File Name: form-handler.php
 *
 * Process contact form to send mail
 *
 */
if ( isset( $_POST['action'] ) ):

    $name = filter_var( $_POST['username'], FILTER_SANITIZE_STRING );
    $from_email = filter_var( $_POST['email'], FILTER_SANITIZE_EMAIL );
    $phone = filter_var( $_POST['phone'], FILTER_SANITIZE_STRING );
	$message = filter_var( $_POST['message'], FILTER_SANITIZE_STRING );
	

    $to_email = "contacto@miguelsureda.com";    // To email address
    $to_name = "A la atención de Muebles Miguel Sureda";

    $email_subject = 'Has recibido un nuevo email de la web de Muebles Miguel Sureda' . $name . '.';

    if ( ! empty( $name ) ) {
        $email_subject = $name . '.';
    }

    $email_body = "Has recibido un nuevo mensaje desde la web de Miguel Sureda : " . $name . " <br/>";
	
	$email_body .= "Asunto: " . $phone . " <br/>";

    $email_content = nl2br( $message ) . " <br/><br/>";

    $email_reply = 	"Puedes contactarlo " . $name . " via este email, " . $from_email ;

    $prepared_message = $email_body . $email_content . $email_reply;

    // You can consult https://github.com/eoghanobrien/php-simple-mail for more details
    require 'class.simple_mail.php';

    /* @var SimpleMail $mail */
    $mail = new SimpleMail();
    $mail->setTo( $to_email, $to_name )
        ->setSubject( $email_subject )
        ->setFrom( $from_email, $name )
        ->addMailHeader( 'Reply-To', $from_email, $name )
        ->addGenericHeader( 'X-Mailer', 'PHP/' . phpversion() )
        ->addGenericHeader( 'Content-Type', 'text/html; charset="utf-8"' )
        ->setMessage( $prepared_message );


    $sent = $mail->send();

    //echo $mail->debug();

    if( $sent ) {
        echo json_encode(array(
            'success' => true,
            'message' => "¡Mensaje enviado Correctamente! En breve nos pondremos en contacto con usted."
        ));
    } else {

        echo json_encode(array(
                'success' => false,
                'message' => "Server Error:  ¡Ups algo a fallado! Contáctenos más abajo por email o por télefono. "
            )
        );
    }

else:

    echo json_encode(array(
            'success' => false,
            'message' => "Invalid Request !"
        )
    );
endif;

die;
