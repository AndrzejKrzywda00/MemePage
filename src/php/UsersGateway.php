<?php


class UserGateway
{
    // TODO -- remove exit() in exception and make appropriate HTTP responses
    private $db = null;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function findAll()
    {
        $stmt = "SELECT * FROM users";
        try {
            $stmt = $this->db->query($stmt);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function insert(Array $input)
    {
        $stmt = "INSERT INTO users (id, nick, email, password, created, edits) VALUES (:id, :nick, :email, :password, :created, :edits);";

        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->excute(array(
                'id' => $input['id'],
                'nick' => $input['nick'],
                'email' => $input['email'],
                'password' => $input['password'],
                'created' => $input['created'],
                'edits' => 0
            ));
            return $stmt->rowCount();
        } catch(PDOException $e) {
            exit($e->getMessage());
        }
    }

    


}