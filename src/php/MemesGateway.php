<?php

class MemesGateway
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function find($id)
    {
        $stmt = "SELECT * FROM memes WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function findRandom()
    {
        $stmt = "SELECT * FROM memes ORDER BY RAND() LIMIT 1";
        try {
            $stmt = $this->db->query($stmt);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function findAll()
    {
        $stmt = "SELECT * FROM memes ORDER BY likes DESC";
        try {
            $stmt = $this->db->query($stmt);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function insert(Array $input)
    {
        $stmt = "INSERT INTO memes (title, description, year, added_at, views, likes, added_by) VALUES (:title, :description, :year, NOW(), 1, 0, :added_by)";

        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'title' => $input['title'],
                'description' => $input['description'],
                'year' => $input['year'],
                'added_by' => $input['added_by']
            ));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function updateAll($id, $input)
    {
        $stmt = "UPDATE memes SET title = :title, description = :description, year = :year WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'id' => $id,
                'title' => $input['title'],
                'description' => $input['description'],
                'year' => $input['year']
            ));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function addLike($id)
    {
        $stmt = "UPDATE memes SET likes = likes+1 WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function removeLike($id)
    {
        $stmt = "UPDATE memes SET likes = likes-1 WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function updateViews($id) {
        $stmt = "UPDATE memes SET views = views+1 WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function delete($id)
    {
        $stmt = "DELETE FROM memes WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function lastInsertId()
    {
        $stmt = "SELECT MAX(id) FROM memes";
        try {
            $stmt = $this->db->query($stmt);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return null;
        }
    }
}