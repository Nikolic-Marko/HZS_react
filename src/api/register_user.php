<?php
require './db_connection.php';

if (isset($_POST)) {
    $username;
    $password;
    $datum_rodjenja;
    $datum_registrovanja;
    $email;

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


    if (isset($_POST['datum_rodjenja'])) {
        $datum_rodjenja = $_POST['datum_rodjenja'];
    } else {
        $response['error'][] = 'nedostaje datum_rodjenja';
    }

    if (isset($_POST['email'])) {
        $email = $_POST['email'];
    } else {
        $response['error'][] = 'nedostaje email';
    }


    if (count($response['error']) > 0) {
    } else {

        //provera da li vec postoji sa tim username-om
        if (!$statement = $conn->prepare("SELECT * FROM user WHERE username=?")) {
            $response['error'][] = 'greska prilikom prepared statement';
        } else {
            $statement->bind_param("s", $username);
            if ($statement->execute()) {
                $result = $statement->get_result();
                if ($result->num_rows > 0) {
                    $response['error'][] = "korisnik " . $username . " je vec registrovan";
                } else {
                    //ovo znaci da takav user ne postoji
                    if (!$statement = $conn->prepare("INSERT INTO user(username,password,datum_rodjenja,datum_registrovanja,email) VALUES(?,?,?,NOW(),?)")) {
                        $response['error'][] = 'greska prilikom prepared statement';
                    } else {
                        $statement->bind_param("ssss", $username, $password, $datum_rodjenja, $email);
                        if ($statement->execute()) {
                            $response['status'] = 'uspesno';
                        } else {
                            $response['error'][] = 'greska priliom izvrsavanja statementa';
                        };
                    }
                }
            } else {
                $response['error'][] = 'greska priliom izvrsavanja statementa';
            }
        }
    }

    echo json_encode($response);
}
