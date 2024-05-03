<?php
// Get form data
$name = $_POST['name'] ?? '';
$position = $_POST['position'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';

// Validate form data (you can add more validation if needed)

// Create data array
$data = [
    'name' => $name,
    'position' => $position,
    'email' => $email,
    'phone' => $phone,
];

// Convert data to JSON
$jsonData = json_encode($data);

// Save data to file
$filePath = __DIR__ . '/../public/form_data.json';
file_put_contents($filePath, $jsonData . PHP_EOL, FILE_APPEND);

// Respond with success message
header('Content-Type: application/json');
echo json_encode(['message' => 'Form submitted successfully']);