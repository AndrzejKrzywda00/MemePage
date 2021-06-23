<?php

$accessTokenRepository = new AccessTokenRepository();
$publicKeyPath = 'file://path/to/public.key';
$server = new \League\OAuth2\Server\ResourceServer($accessTokenRepository, $publicKeyPath);

