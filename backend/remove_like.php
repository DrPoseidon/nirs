<?php
session_start();
require_once('connection.php');
$id = $_SESSION['user']['ID'];
$ph_id = $_GET['Ph_ID'];

$query = 'delete from likes where Photo_ID = ? and User_ID = ?';
$stmt = $connection->prepare($query);
$stmt->execute([$ph_id,$id]);
header('Location:../feed.php');