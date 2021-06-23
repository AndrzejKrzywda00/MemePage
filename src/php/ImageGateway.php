<?php

class ImageGateway
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function find($name)
    {
        $stmt = "SELECT * FROM images WHERE name = :name";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('name' => $name));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            false;
        }
    }

    public function insert($input)
    {
        $stmt = "INSERT INTO images (meme_id, name) VALUES (:meme_id, :name)";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('meme_id' => $input['meme_id'],
                                 'name' => $input['name']));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            return false;
        }
    }

    public function delete($name)
    {
        $stmt = "DELETE FROM images WHERE name = :name";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('name' => $name));
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