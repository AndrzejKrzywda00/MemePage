<?php

class DatabaseConnector
{
    private $dbConnection;

    public function __construct()
    {
        $host = 'localhost';
        $db = 's108';
        $user = 's108';
        $pass = 'kxh76gzn';

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