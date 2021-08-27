<?php

class CommentsGateway
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function find($id)
    {
        $stmt = "SELECT * FROM comments WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function findAll($memeId)
    {
        $stmt = "SELECT * FROM comments WHERE meme_id = :meme_id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('meme_id' => $memeId));
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function insert(Array $input)
    {
        $stmt = "INSERT INTO comments (author_id, added_at, likes, content, meme_id) VALUES (:author_id, NOW(), 0, :content, :meme_id)";

        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'author_id' => $input['author_id'],
                'content' => $input['content'],
                'meme_id' => $input['meme_id']
            ));
            return $stmt->rowCount();
        } catch(PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function updateContent(Array $input)
    {
        $stmt = "UPDATE comments SET content = :content, added_at = NOW() WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array(
                'id' => $input['id'],
                'content' => $input['content']
            ));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function delete($id)
    {
        $stmt = "DELETE FROM comments WHERE id = :id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('id' => $id));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function deleteByMemeId($meme_id)
    {
        $stmt = "DELETE FROM comments WHERE meme_id = :meme_id";
        try {
            $stmt = $this->db->prepare($stmt);
            $stmt->execute(array('meme_id' => $meme_id));
            return $stmt->rowCount();
        } catch (PDOException $e) {
            exit($e->getMessage());
        }
    }

}