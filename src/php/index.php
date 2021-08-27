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
    include("LikesController.php");

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Content-Disposition");

    $uri = parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
    $uri = explode('/', $uri);

    $endpoints = ['users','memes','comments','images','likes'];

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
            $memeId = null;
            if(isset($uri[2]) and is_numeric($uri[2])) {
                $memeId = $uri[2];
            }
            $controller = new CommentsController($dbConnection, $requestMethod, $memeId);
            $controller->processRequest();
            break;
        case 'images':
            $memeId = null;
            if(isset($uri[2])) {
                $memeId = $uri[2];
            }
            $handler = new ImageProcessor($dbConnection, $requestMethod, $memeId);
            $handler->process();
            break;
        case 'likes':
            $input = null;
            if(isset($uri[2])) {
                $data = explode($uri[2],':');
                $input['meme_id'] = $data[0];
                $input['user_id'] = $data[1];
            }
            $controller = new LikesController($dbConnection, $requestMethod, $input);
            $controller->processRequest();
            break;
    }
