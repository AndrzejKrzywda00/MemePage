<?php

include("UsersGateway.php");

class UserController
{
    private $requestMethod;
    private $resourceId;
    private $usersGateway;

    private $problemReason;

    public function __construct($db, $requestMethod, $resourceId)
    {
        $this->requestMethod = $requestMethod;
        $this->resourceId = $resourceId;

        $this->usersGateway = new UsersGateway($db);
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if($this->resourceId) {
                    $response = $this->getUser($this->resourceId);
                }
                else {
                    $response = $this->getAllUsers();
                }
                break;
            case 'POST':
                $response = $this->createUserFromRequest();
                break;
            case 'PUT':
                $response = $this->updateUserFromRequest($this->resourceId);
                break;
            case 'DELETE':
                $response = $this->deleteUser($this->resourceId);
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

    private function getAllUsers(): array
    {
        $result = $this->usersGateway->findAll();
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function getUser($id): array
    {
        $result = $this->usersGateway->find($id);
        if(!$result) {
            return $this->notFoundResponse();
        }

        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function createUserFromRequest(): array
    {
        $input = (array) json_decode(file_get_contents("php://input"), TRUE);

        if(!$this->validateUser($input)) {
            return $this->unprocessableEntityResponse();
        }

        $this->usersGateway->insert($input);
        $response['status_code_header'] = 'HTTP/1.1 201 Created';
        $response['body'] = null;
        return $response;
    }

    private function updateUserFromRequest($id): array
    {
        $result = $this->usersGateway->find($id);
        if(!$result) {
            return $this->notFoundResponse();
        }

        $this->usersGateway->updateEdits($id);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;
        return $response;
    }

    private function deleteUser($id): array
    {
        $result = $this->usersGateway->find($id);
        if(!$result) {
            return $this->notFoundResponse();
        }

        $this->usersGateway->delete($id);
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = null;
        return $response;
    }

    private function validateUser($input): bool
    {
        if(!isset($input['nick'])) {
            $this->problemReason = "nick_is_null";
            return false;
        }
        if(!isset($input['email'])) {
            $this->problemReason = "email_is_null";
            return false;
        }
        if(isset($input['email']) && !preg_match('/^[a-zA-Z0-9\-\_\.]+\@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z]{2,5}$/D', $input['email'])) {
            $this->problemReason = "email_not_match_regex";
            return false;
        }
        if(!isset($input['password'])) {
            $this->problemReason = "password_is_null";
            return false;
        }
        return true;
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

}