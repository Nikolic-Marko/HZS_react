<?php
require "./db_connection.php";

if (isset($_POST)) {
    $post_id;
    $autor;
    $text;

    $response = ['error' => []];
    if (isset($_POST['autor'])) {
        $autor = $_POST['autor'];
    } else {
        $response['error'][] = 'nedostaje autor';
    }

    if (isset($_POST['text'])) {
        $text = $_POST['text'];
    } else {
        $response['error'][] = 'nedostaje text';
    }

    if (isset($_POST['post_id'])) {
        $post_id = $_POST['post_id'];
    } else {
        $response['error'][] = 'nedostaje post_id';
    }

    if (count($response['error']) > 0) {
    } else {
        if (!$statement = $conn->prepare("INSERT INTO komentar(autor,datum,text,post_id) VALUES(?,NOW(),?,?)")) {
            $response['error'][] = 'greska prilikom prepared statement';
        } else {
            $statement->bind_param("ssi", $autor, $text, $post_id);
            if ($statement->execute()) {
                $response['status'] = 'uspesno';
            } else {
                $response['error'][] = 'greska prilikom izvrsavanja statementa';
            }
        }
    }

    echo json_encode($response);
}
