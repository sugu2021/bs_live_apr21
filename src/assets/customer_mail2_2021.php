<?php

header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$_POST = json_decode(file_get_contents('php://input'), true);


$option = $_POST['name'];

// $data = [ 'name' => $_POST['name'], 'email' =>$_POST['email'], 'phone' =>$_POST['phone'] ,'service' =>$_POST['service'], 'message' =>$_POST['message']];

header('Content-type: application/json');
// echo json_encode( $data );

    // $to = 'sugumar@brandstory.in';
    $to = $_POST['email'];
    $subject = "BSTY new lead General Enquiry";
    $message = "
    <html>
    <head>
    </head>
    <body>

      <img src='https://brandstory.in/assets/images/wp-content/uploads/2017/10/logo.png' alt='brandstory' >

      <br>

      <p>Hello ". $_POST['name'].",</p>

      <p>Thank you for reaching out to Brandstory. </p>

      <p>One of our team member would be reaching out to you as soon as possible.</p>


      <p> Meanwhile, you can click the below link to schedule a meeting with us at your convenience.  </p>


      <a href='https://calendly.com/brandstorydigital/30min'  target='_blank'>30 minutes</a>


      <p>Happy Progressing!</p>

      <br>
      <br>


      <p>Thanks,</p>

      <p>Client Success,</p>

      <p>BrandStory</p>

    </body>
    </html>
    ";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
    $headers .= 'From: <info@brandstory.in>' . "\r\n";


    // SEND MAIL
    mail($to,$subject,$message,$headers);

  //   if(mail($to,$subject,$message,$headers)) {
  //     print "<p class='success'>Mail Sent.</p>";
  // } else {
  //     print "<p class='Error'>Problem in Sending Mail.</p>";
  // }

  ?>
