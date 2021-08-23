<?php

class UsersGateway
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function find($id)
    {
        $stmt = "SELECT * FROM users WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
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
        $stmt = "INSERT INTO users (nick, email, password) VALUES (:nick, :email, :password);";

        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'nick' => $input['nick'],
                'email' => $input['email'],
                'password' => $input['password']
            ));
            return $stmt->rowCount();
        } catch(PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function update($id, Array $input)
    {
        $stmt = "UPDATE users SET edits = :edits WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'id' => $input['id'],
                'edits' => $input['edits']
            ));
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function updateEdits($id)
    {
        $stmt = "UPDATE users SET edits = edits+1 WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'id' => $id
            ));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function delete($id)
    {
        $stmt = "DELETE FROM users WHERE id = :id;";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function findUserByLoging($input)
    {
        $stmt = "SELECT * FROM users WHERE email = :email AND password = :password";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('email' => $input['email'], 'password' => $input['password']));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

}