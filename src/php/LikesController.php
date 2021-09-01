<?php

include("LikesGateway.php");

class LikesController
{
    private $requestMethod;
    private $problemReason;
    private $input;

    private $likesGateway;

    public function __construct($db, $requestMethod, $input)
    {
        $this->requestMethod = $requestMethod;
        $this->input = $input;
        $this->likesGateway = new LikesGateway($db);
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                $response = $this->checkIfLiked($this->input);
                break;
            case 'POST':
                $response = $this->addLike();
                break;
            case 'DELETE':
                $response = $this->unlike();
                break;
            default:
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
                break;
        }
        header($response['status_code_header']);
        if($response['body']) {
            echo $response['body'];
        }
    }

    private function checkIfLiked($input): array
    {
        $result = $this->likesGateway->findLike($input['meme_id'],$input['user_id']);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function addLike(): array
    {
        $input = (array) json_decode(file_get_contents("php://input"), TRUE);
        $result = $this->likesGateway->insertLike($input['meme_id'],$input['user_id']);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function unlike() : array
    {
        $input = (array) json_decode(file_get_contents("php://input"), TRUE);
        if(isset($input['meme_id']) and !isset($input['user_id'])) {
            $result = $this->likesGateway->deleteLikeFromMeme($input['meme_id']);
        }
        else {
            $result = $this->likesGateway->deleteLike($input['meme_id'],$input['user_id']);
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

}