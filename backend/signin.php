<?php
session_start();
require_once('connection.php');
$login = $_POST['signin_login'];
$pass = $_POST['signin_pass'];
$error_fields = [];

if($login === ''){
    $error_fields[] = 'signin_login';
}

if($pass === ''){
    $error_fields[] = 'signin_pass';
}
if(!empty($error_fields)){
    $response = [
        "status" => false,
        "type" => 1,
        "message" => "Проверьте правильность полей",
        "fields" => $error_fields
    ];

    echo json_encode($response);

    die();
}

$query = 'select * from users where login = ? and password = ?';
$stmt = $connection->prepare($query);
$stmt->execute([$login,md5($pass)]);
$res = $stmt->fetch();
if($stmt->rowCount() > 0){
    $_SESSION['user']['login'] = $login;
    $_SESSION['user']['ID'] = $res['User_ID'];
    $_SESSION['user']['avatar'] = $res['Avatar'];
    $response = [
        "status" => true
    ];
    echo json_encode($response);
} else {
    $response = [
        "status" => false,
        "message" => "Неправильные данные",
    ];

    echo json_encode($response);

    die();
}