<?php

include "ImageGateway.php";

class ImageProcessor
{
    private $name;
    private $tmp_name;
    private $position;
    private $fileExtension;
    private $memeId;

    private $requestMethod;
    private $reasonProblem;

    private $imageGateway;

    public function __construct($db, $requestMethod, $memeId)
    {
        $this->requestMethod = $requestMethod;
        $this->imageGateway = new ImageGateway($db);
        $this->memeId = $memeId;

        if($requestMethod == "POST") {
            $this->name = $_FILES["file"]["name"];
            $this->tmp_name = $_FILES["file"]["tmp_name"];
            $this->position = strpos($this->name,".");
            $this->fileExtension = substr($this->name, $this->position+1);
            $this->fileExtension = strtolower($this->fileExtension);
        }
    }

    public function process()
    {

        if($this->requestMethod == 'POST') {
            $upload = $this->upload();
            if($upload) {
                $response['status_code_header'] = 'HTTP/1.1 201 Created';
                $response['body'] = null;
            }
            else {
                $response = $this->unprocessableEntityResponse();
            }
        }

        // TODO -- make this work
        if($this->requestMethod == 'DELETE') {
            if($name = $this->getFileName()) {
                if($this->imageGateway->find($name)) {
                    $filePointer = 'Uploads/images/' . $this->getFileName();
                    if(file_exists($filePointer)) {
                        $DBdelete = $this->delete();
                        $fileDelete = unlink($filePointer);
                        $response['status_code_header'] = 'HTTP/1.1 200 OK';
                        $response['body'] = null;
                    }
                    else {
                        $this->reasonProblem = 'no_file_in_system';
                        return $this->unprocessableEntityResponse();
                    }
                }
                else {
                    $this->reasonProblem = 'no_file_in_db';
                    return $this->unprocessableEntityResponse();
                }
            }
            else {
                $this->reasonProblem = 'no_file_name';
                return $this->unprocessableEntityResponse();
            }
        }

        if($this->requestMethod == 'GET') {
            if(is_numeric($this->memeId)) {
                if($this->imageGateway->find($memeId)) {
                    $name = $this->imageGateway->findName($memeId);
                    $path = 'Uploads/images/' . $name;
                    header('Content-Type: image/png');
                    header('Content-Disposition: inline; filename="' . $name . '"');
                    readfile($path);
                }
            }
        }

        if($this->requestMethod != 'POST' && $this->requestMethod != 'DELETE' && $this->requestMethod != 'GET') {
            $response = $this->methodNotAllowed();
        }

        header($response['status_code_header']);
        if($response['body']) {
            echo $response['body'];
        }
    }

    private function upload(): bool
    {
        if(isset($this->name)) {
            $path = 'Uploads/images/';
            if(empty($this->name)) {
                $this->reasonProblem = 'filename_is_null';
                return false;
            }
            if(!empty($this->name)) {
                if(($this->fileExtension !== "jpg") && ($this->fileExtension !== "jpeg") && ($this->fileExtension !== "png") && ($this->fileExtension !== "bmp")) {
                    $this->reasonProblem = 'wrong_extension';
                    return false;
                }
            }
            if(($this->fileExtension == "jpg") || ($this->fileExtension == "jpeg") || ($this->fileExtension == "png") || ($this->fileExtension == "bmp")) {
                $input['uri'] = $this->name;
                $input['meme_id'] = $this->memeId;
                $imageFound = $this->imageGateway->findDuplicate($input);
                if(!$imageFound) {
                    if(move_uploaded_file($this->tmp_name, $path . $this->name)) {
                        $data['uri'] = $this->name;
                        $data['meme_id'] = $this->memeId;
                        $this->imageGateway->insert($data);
                        return true;
                    }
                }
                else {
                    $this->reasonProblem = 'image_name_taken';
                    return false;
                }
            }
            return false;
        }
        return false;
    }

    private function delete()
    {
        $input = json_decode(file_get_contents("php://input"), TRUE);
        if(isset($input['name'])) {
            $name = $input['name'];
            if($this->imageGateway->find($name)) {
                return $this->imageGateway->delete($name);
            }
            else {
                $this->reasonProblem = 'no_image_found';
                return false;
            }
        }
        $this->reasonProblem = 'no_file_name';
        return false;
    }

    private function getFileName()
    {
        $input = json_decode(file_get_contents("php://input"), TRUE);
        if(isset($input['name'])) {
            return $input['name'];
        }
    }

    private function unprocessableEntityResponse(): array
    {
        $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
        $response['body'] = json_encode([
            'error' => 'Invalid input',
            'reason' => $this->reasonProblem
        ]);
        return $response;
    }

    private function methodNotAllowed(): array
    {
        $response['status_code_header'] = 'HTTP/1.1 405 Method Not Allowed';
        $response['body'] = json_encode([
            'method_not_allowed' => $this->requestMethod
        ]);
        return $response;
    }

}
