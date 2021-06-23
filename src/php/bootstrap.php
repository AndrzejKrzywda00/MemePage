<?php
require 'vendor/autoload.php';
require 'DatabaseConnector.php';

$dbConnection = (new DatabaseConnector())->getConnection();

