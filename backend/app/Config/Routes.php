<?php

use CodeIgniter\Router\RouteCollection;

/** @var RouteCollection $routes */
$routes->get('/', 'Home::index');
$routes->get('/users', 'UserController::index');
$routes->post('/register', 'UserController::register');
$routes->post('/login', 'UserController::login');
