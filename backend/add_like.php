<?php
session_start();
require_once('connection.php');
$id = $_SESSION['user']['ID'];
$ph_id = $_GET['Ph_ID'];

$query = 'insert into likes(like_id, photo_id, user_id) VALUES (?,?,?)';
$stmt = $connection->prepare($query);
$stmt->execute([rand(0,1000000),$ph_id,$id]);
header('Location:../feed.php');
