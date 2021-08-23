<?php

class DatabaseConnector
{
    private $dbConnection;

    public function __construct()
    {
        $host = 'localhost';
        $db = 's401454';
        $user = 's401454';
        $pass = 'm5xgb57mwkz6';

        // TODO -- solve this with usage of $config or env()

        try {
            $this->dbConnection = new PDO('mysql:host=' . $host . ';dbname=' . $db . ';charset=utf8mb4', $user, $pass);
            $this->dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function getConnection(): PDO
    {
        return $this->dbConnection;
    }
}