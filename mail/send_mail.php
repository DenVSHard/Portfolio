<?php

########### CONFIG ###############

$recipient = 'contact@denis-weinhardt.com'; # Empfänger-E-Mail
$redirect = 'success.html';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

########### CONFIG END ###########

// Preflight-Request für CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Prüfe, ob es sich um eine POST-Anfrage handelt
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(["error" => "Nur POST-Anfragen erlaubt."]));
}

// Überprüfung der Eingaben
if (!isset($_POST['name']) || empty(trim($_POST['name']))) {
    die(json_encode(["error" => "Name fehlt."]));
}

if (!isset($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    die(json_encode(["error" => "Ungültige E-Mail-Adresse."]));
}

if (!isset($_POST['message']) || empty(trim($_POST['message']))) {
    die(json_encode(["error" => "Nachricht fehlt."]));
}

// E-Mail-Daten
$subject = "Contact From " . $_POST['name'];
$message = "Neue Nachricht von denis-weinhardt.com:\r\n\r\n";
$message .= "Name: " . $_POST['name'] . "\r\n";
$message .= "Email: " . $_POST['email'] . "\r\n";
$message .= "Message: " . $_POST['message'] . "\r\n\r\n";
$message .= "Bitte antworten Sie so bald wie möglich.\r\n";

// E-Mail-Header
$headers = "From: " . $_POST['name'] . " <" . $_POST['email'] . ">\r\n";
$headers .= "Reply-To: " . $_POST['email'] . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// E-Mail senden
if (mail($recipient, $subject, $message, $headers)) {
    echo json_encode(["success" => "E-Mail erfolgreich gesendet."]);
} else {
    die(json_encode(["error" => "Fehler beim Senden der E-Mail."]));
}
exit;
