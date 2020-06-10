<?php
session_start();
require_once('connection.php');
$id = $_SESSION['user']['ID'];
$id1 = $_GET['id1'];
$ph_id = $_GET['Ph_ID'];

$query = 'delete from likes where Photo_ID = ? and User_ID = ?';
$stmt = $connection->prepare($query);
$stmt->execute([$ph_id,$id]);
$location = 'Location:../this_photo.php?Photo_ID='.$ph_id.'&User_ID='.$id1;
header($location);