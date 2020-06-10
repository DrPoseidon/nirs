<?php
$connection = new PDO('mysql:host=localhost;dbname=nirs_db_new', 'root', '');
if (!$connection) {
    die('Error connect to db!');
}