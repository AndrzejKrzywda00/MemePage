<?php
    session_start();
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    //require '/home/s401454/vendor/autoload.php';

    include("meta_functions.php");
    include("DatabaseConnector.php");
    include("UserController.php");
    include("config.inc.php");
    include("MemesController.php");
    include("CommentsController.php");
    include("ImageProcessor.php");

    //header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $uri = parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
    $uri = explode('/', $uri);

    $endpoints = ['users','memes','comments','images','login'];

    if(!in_array($uri[1], $endpoints)) {
        header("HTTP/1.1 404 Not Found");
        exit();
    }

    $headers = apache_request_headers();
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $dbConnection = (new DatabaseConnector())->getConnection();

    // TODO -- build authorization for this api

    $endpoint = $uri[1];
    switch ($endpoint) {
        case 'users':
            $action = null;
            if(isset($uri[2])) {
                $action = $uri[2];
            }
            $controller = new UserController($dbConnection, $requestMethod, $action);
            $controller->processRequest();
            break;
        case 'memes':
            $memeId = null;
            if(isset($uri[2])) {
                $memeId = $uri[2];
            }
            $controller = new MemesController($dbConnection, $requestMethod, $memeId);
            $controller->processRequest();
            break;
        case 'comments':
            $controller = new CommentsController($dbConnection, $requestMethod);
            $controller->processRequest();
            break;
        case 'images':
            $imageId = null;
            if(isset($uri[2])) {
                $imageId = $uri[2];
            }
            $handler = new ImageProcessor($dbConnection, $requestMethod, $imageId);
            $handler->process();
    }
