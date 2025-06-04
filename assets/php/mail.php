<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your@email.com"; // Replace with your email

    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "Please fill in all required fields.";
        exit;
    }

    $email_content = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message\n";
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Your message has been sent successfully!";
    } else {
        http_response_code(500);
        echo "There was an error sending your message.";
    }
} else {
    http_response_code(403);
    echo "Invalid request method.";
}
?>
