<?php

$apiEndpoint = 'https://autotopup.gliders.dev/order/create';
$apiKey = 'YOUR_API_KEY';

$orderData = [
    'uid' => 2015215941,
    'order_type' => 'BD_TOPUP',
    'package' => 'weekly',
    'callback_url' => 'https://your-callback-url.com',
    'callback_key' => 'YourCallbackKey'
];

$options = [
    'http' => [
        'header'  => "Content-Type: application/json\r\n" .
                     "Authorization: Bearer $apiKey\r\n",
        'method'  => 'POST',
        'content' => json_encode($orderData),
    ],
];

$context  = stream_context_create($options);
$response = file_get_contents($apiEndpoint, false, $context);

if ($response === FALSE) {
    die('Failed to submit order.');
}

echo 'Order submitted successfully!';
echo 'Response: ' . $response;
?>