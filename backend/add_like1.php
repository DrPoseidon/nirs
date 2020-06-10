<?php
session_start();
require_once('connection.php');
$id = $_SESSION['user']['ID'];
$id1 = $_GET['id1'];
$ph_id = $_GET['Ph_ID'];

$query = 'insert into likes(like_id, photo_id, user_id) VALUES (?,?,?)';
$stmt = $connection->prepare($query);
$stmt->execute([rand(0,1000000),$ph_id,$id]);
$location = 'Location:../this_photo.php?Photo_ID='.$ph_id.'&User_ID='.$id1;
header($location);
