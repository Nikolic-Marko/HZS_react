<?php
require './db_connection.php';

if (isset($_POST)) {
    date_default_timezone_set('Europe/Belgrade');
    $naslov;
    $text;
    $autor;
    $kategorija;

    $response = ['error' => []];
    if (isset($_POST['naslov'])) {
        $naslov = $_POST['naslov'];
    } else {
        $response['error'][] = 'nedostaje naslov';
    }

    if (isset($_POST['text'])) {
        $text = $_POST['text'];
    } else {
        $response['error'][] = 'nedostaje text';
    }

    if (isset($_POST['autor'])) {
        $autor = $_POST['autor'];
    } else {
        $response['error'][] = 'nedostaje autor';
    }

    if (isset($_POST['kategorija'])) {
        $kategorija = $_POST['kategorija'];
    } else {
        $response['error'][] = 'nedostaje kategorija';
    }

    if (count($response['error']) > 0) {
    } else {
        if (!$statement = $conn->prepare("INSERT INTO post(text,naslov,datum_kreiranja,kategorija,autor) VALUES(?,?,NOW(),?,?)")) {
            $response['error'][] = 'greska prilikom prepared statement';
        } else {
            $statement->bind_param("ssss", $naslov, $text, $kategorija, $autor);
            if ($statement->execute()) {
                $response['status'] = 'uspesno';
            } else {
                $response['error'][] = 'greska priliom izvrsavanja statementa';
            };
        }
    }

    echo json_encode($response);
}
