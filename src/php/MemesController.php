<?php

include("MemesGateway.php");

class MemesController
{
    private $requestMethod;
    private $memeId;
    private $problemReason;

    private $memesGateway;
    private $usersGateway;

    public function __construct($db, $requestMethod, $memeId)
    {
        $this->requestMethod = $requestMethod;
        $this->memeId = $memeId;

        $this->memesGateway = new MemesGateway($db);
        $this->usersGateway = new UsersGateway($db);
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if($this->memeId) {
                    if(is_numeric($this->memeId)) {
                        $response = $this->getMeme($this->memeId);
                    }
                    else if($this->memeId == "random") {
                        $response = $this->getRandomMeme();
                    }
                }
                else {
                    $response = $this->getAllMemes();
                }
                break;
            case 'POST':
                $response = $this->createMemeFromRequest();
                break;
            case 'PUT':
                $response = $this->updateMemeFromRequest($this->memeId);
                break;
            case 'DELETE':
                $response = $this->deleteMeme($this->memeId);
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

    private function getMeme($id): array
    {
        $result = $this->memesGateway->find($id);
        if(!$result) {
            return $this->notFoundResponse();
        }
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function getAllMemes(): array
    {
        $result = $this->memesGateway->findAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function getRandomMeme(): array
    {
        $result = $this->memesGateway->findRandom();
        if(!$result) {
            return $this->notFoundResponse();
        }
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function updateMemeFromRequest($id): array
    {
        $result = $this->memesGateway->find($id);
        if(!$result) {
            return $this->notFoundResponse();
        }

        $input = (array) json_decode(file_get_contents("php://input"), TRUE);

        if($input['update_type'] == 'add_like') {
            $this->memesGateway->addLike($id);
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = null;
        }

        if($input['update_type'] == 'remove_like') {
            $this->memesGateway->removeLike($id);
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = null;
        }

        if($input['update_type'] == 'views') {
            $this->memesGateway->updateViews($id);
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = null;
        }

        if($input["update_type"] == "general") {
            $this->memesGateway->updateAll($id, $input);
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = null;
        }

        return $response;
    }

    private function createMemeFromRequest(): array
    {
        $input = (array) json_decode(file_get_contents("php://input"), TRUE);
        if(!$this->validateMeme($input)) {
            return $this->unprocessableEntityResponse();
        }
        $this->memesGateway->insert($input);
        $lastId = $this->memesGateway->lastInsertId();
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $returnLastId = $lastId[0]['MAX(id)'];
        $returnarray = ['last_id' => $returnLastId];
        $response['body'] = json_encode($returnarray);
        return $response;
    }

    private function deleteMeme($id): array
    {
        $result = $this->memesGateway->find($id);
        if(!$result) {
            return $this->notFoundResponse();
        }

        $this->memesGateway->delete($id);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;
        return $response;
    }

    private function validateMeme($input): bool
    {
        if(!isset($input['title'])) {
            $this->problemReason = 'title_is_null';
            return false;
        }
        if(isset($input['title']) && (mb_strlen($input['title']) < 5 || mb_strlen($input['title']) > 255)) {
            $this->problemReason = 'title_wrong_length';
            return false;
        }
        if(!isset($input['description'])) {
            $this->problemReason = 'description_is_null';
            return false;
        }
        if(isset($input['description']) && (mb_strlen($input['description']) < 25 || mb_strlen($input['title']) > 500)) {
            $this->problemReason = 'description_wrong_length';
            return false;
        }
        if(!isset($input['year'])) {
            $this->problemReason = 'year_is_null';
            return false;
        }
        if(!isset($input['added_by'])) {
            $this->problemReason = 'no_author_provided';
        }
        if(isset($input['added_by'])) {
            if(!$this->usersGateway->find($input['added_by'])) {
                $this->problemReason = 'author_doesnt_exist_in_db';
                return false;
            }
        }
        return true;
    }


    private function validateMemeUpdate($input)
    {
        if(isset($input['title']) && isset($input['description'])) {
            // TODO -- finish idea of updating
        }
    }

    private function notFoundResponse(): array
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
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

}