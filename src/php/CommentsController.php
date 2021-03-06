<?php

include("CommentsGateway.php");

class CommentsController
{
    private $requestMethod;
    private $commentsGateway;
    private $problemReason;
    private $commentId;
    private $memeId;

    public function __construct($db, $requestMethod, $memeId, $commentId)
    {
        $this->requestMethod = $requestMethod;
        $this->commentId = $commentId;
        $this->memeId = $memeId;
        $this->commentsGateway = new CommentsGateway($db);
    }

    public function processRequest()
    {
        switch($this->requestMethod) {
            case 'GET':
                if($this->commentId != null) {
                    $response = $this->getComment($this->commentId);
                }
                else {
                    $response = $this->getCommentsFromMeme();
                }
                break;
            case 'POST':
                $response = $this->createCommentFromRequest();
                break;
            case 'PUT':
                $response = $this->updateCommentFromRequest();
                break;
            case 'DELETE':
                if($this->commentId != null ) {
                    $response = $this->deleteComment();
                }
                else {
                    $response = $this->deleteComments();
                }
                break;
            case 'OPTIONS':
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
                break;
            default:
                $response = $this->notFoundResponse();
                break;
        }
        header($response['status_code_header']);
        if($response['body']) {
            echo $response['body'];
        }
    }

    private function getComment($id): array
    {
        $result = $this->commentsGateway->find($id);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function getCommentsFromMeme(): array
    {
        $result = $this->commentsGateway->findAll($this->memeId);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function createCommentFromRequest(): array
    {
        $input = (array) json_decode(file_get_contents("php://input"), TRUE);

        if(!$this->validateInsertComment($input)) {
            return $this->unprocessableEntityResponse();
        }
        $this->commentsGateway->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;
        return $response;
    }

    private function deleteComments(): array
    {
        $this->commentsGateway->deleteByMemeId($this->memeId);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;
        return $response;
    }

    private function deleteComment() : array
    {
        $this->commentsGateway->delete($this->commentId);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;
        return $response;
    }

    private function updateCommentFromRequest(): array
    {
        $input = (array) json_decode(file_get_contents("php://input"), TRUE);

        if(!$this->validateUpdateComment($input)) {
            return $this->unprocessableEntityResponse();
        }
        $this->commentsGateway->updateContent($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;
        return $response;
    }

    private function unprocessableEntityResponse(): array
    {
        $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
        $response['body'] = json_encode([
            'error' => 'Invalid input',
            'reason' => $this->problemReason
        ]);
        return $response;
    }

    private function notFoundResponse(): array
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;
        return $response;
    }

    private function validateInsertComment(array $input): bool
    {
        if(!isset($input['content'])) {
            $this->problemReason = 'no_content_provided';
            return false;
        }
        if(isset($input['content']) && (mb_strlen($input['content']) < 25 || mb_strlen($input['content']) > 5000)) {
            $this->problemReason = 'content_wrong_length';
            return false;
        }
        if(!isset($input['author_id'])) {
            $this->problemReason = 'no_author_provided';
            return false;
        }
        if(!isset($input['meme_id'])) {
            $this->problemReason = 'no_meme_id';
            return false;
        }
        return true;
    }

    private function validateUpdateComment($input)
    {
        if(!isset($input['content'])) {
            $this->problemReason = 'no_content_provided';
            return false;
        }
        if(isset($input['content']) && (mb_strlen($input['content']) < 25 || mb_strlen($input['content']) > 5000)) {
            $this->problemReason = 'content_wrong_length';
            return false;
        }
        return true;
    }

}