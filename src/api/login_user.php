<?php
require "./db_connection.php";

if (isset($_POST)) {
    $username;
    $password;

    $response = ['error' => []];
    if (isset($_POST['username'])) {
        $username = $_POST['username'];
    } else {
        $response['error'][] = 'nedostaje username';
    }

    if (isset($_POST['password'])) {
        $password = $_POST['password'];
    } else {
        $response['error'][] = 'nedostaje password';
    }

    if (!$statement = $conn->prepare("SELECT * FROM user WHERE username=? AND password=?")) {
        $response['error'][] = 'greska prilikom prepared statement';
    } else {
        $statement->bind_param("ss", $username, $password);
        if ($statement->execute()) {
            $result = $statement->get_result();
            if ($result->num_rows > 0) {
                $response['status'] = 'uspesno';
            } else {
                $response['error'] = 'pogresna sifra ili username';
            }
        } else {
            $response['error'][] = 'greska prilikom izvrsavanja statementa';
        }
    }

    echo json_encode($response);
}
