<?php

class LikesGateway
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function deleteLike($memeId, $userId)
    {
        $stmt = "DELETE FROM likes WHERE meme_id = :meme_id AND user_id = :user_id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'meme_id' => $memeId,
                'user_id' => $userId
            ));
            return $stmt->rowCount(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return false;
        }
    }

    public function findLike($memeId, $userId)
    {
        $stmt = "SELECT * FROM likes WHERE meme_id = :meme_id AND user_id = :user_id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'meme_id' => $memeId,
                'user_id' => $userId
            ));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return false;
        }
    }

    public function insertLike($memeId, $userId)
    {
        $stmt = "INSERT INTO likes (meme_id,user_id) VALUES (:meme_id,:user_id)";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'meme_id' => $memeId,
                'user_id' => $userId
            ));
            return $stmt->rowCount(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return false;
        }
    }
}
