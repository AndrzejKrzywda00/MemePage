<?php

class ImageGateway
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function findDuplicate($input)
    {
        $stmt = "SELECT * FROM images WHERE meme_id = :meme_id AND uri = :uri";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'meme_id' => $input['meme_id'],
                'uri' => $input['uri']
            ));
            return $stmt-fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return false;
        }
    }

    public function find($meme_id)
    {
        $stmt = "SELECT * FROM images WHERE meme_id = :meme_id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('meme_id' => $meme_id));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return false;
        }
    }

    public function findOneNameRandom($meme_id)
    {
        $stmt = "SELECT uri FROM images WHERE meme_id = :meme_id ORDER BY RAND() LIMIT 1";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('meme_id' => $meme_id));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function findNames($meme_id)
    {
        $stmt = "SELECT uri FROM images WHERE meme_id = :meme_id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('meme_id' => $meme_id));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function insert($input)
    {
        $stmt = "INSERT INTO images (meme_id, uri) VALUES (:meme_id, :uri)";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'meme_id' => $input['meme_id'],
                'uri' => $input['uri']));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            return false;
        }
    }

    public function delete($id)
    {
        $stmt = "DELETE FROM images WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            return false;
        }
    }

    public function deleteAllByMeme($memeId)
    {
        $stmt = "DELETE FROM images WHERE meme_id = :meme_id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('meme_id' => $memeId));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            return false;
        }
    }

}