<?php
require './db_connection.php';

// /api/read_posts.php?id=2
if (isset($_GET['id'])) {

    if ($statement = $conn->prepare("SELECT * FROM post WHERE id=? ORDER BY id DESC")) {
        $statement->bind_param('i', $_GET['id']);
        if ($statement->execute()) {
            $results = $statement->get_result();
            fetchResults($results, $conn);
        }
    } else {
        $response = ['error' => 'greska prilikom prepared statement'];
        echo json_encode($response);
    }

    // /api/read_posts.php?kategorija=razno
} else if (isset($_GET['kategorija'])) {
    if ($statement = $conn->prepare("SELECT * FROM post WHERE kategorija=? ORDER BY id DESC")) {
        $statement->bind_param('s', $_GET['kategorija']);
        if ($statement->execute()) {
            $results = $statement->get_result();
            fetchResults($results, $conn);
        }
    } else {
        $response = ['error' => 'greska prilikom prepared statement'];
        echo json_encode($response);
    }
} else if (isset($_GET)) {
    if ($statement = $conn->prepare("SELECT * FROM post  ORDER BY id DESC")) {
        if ($statement->execute()) {
            $results = $statement->get_result();
            fetchResults($results, $conn);
        }
    } else {
        $response = ['error' => 'greska prilikom prepared statement'];
        echo json_encode($response);
    }
}

function fetchResults($results, $conn)
{
    $response = $results->fetch_all(MYSQLI_ASSOC);

    $i = 0;
    $n = count($response);
    for ($i; $i < $n; $i++) {
        $id = $response[$i]['id'];

        //uzimanje komentara
        if ($statement = $conn->prepare("SELECT * FROM komentar WHERE post_id = ?")) {
            $statement->bind_param('i', $id);
            if ($statement->execute()) {
                $results2 = $statement->get_result();
                $response[$i]['komentari'] = $results2->fetch_all(MYSQLI_ASSOC);
            }
        } else {
            $response = ['error' => 'greska prilikom prepared statement'];
            echo json_encode($response);
        }
    }
    echo json_encode($response);
}
