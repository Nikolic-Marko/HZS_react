<?php

$servername = "fonisrs_hzs_2021";
$db_username = "fonisrs_hzs";
$db_password = "yRcI)04K]K^s";
$db_name = "hzs2021_forum";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Content-Type: application/json; charset=utf-8');

$conn = new mysqli($servername, $db_username, $db_password, $db_name);

if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}
