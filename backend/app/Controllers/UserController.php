<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\UserModel;

class UserController extends BaseController
{
    public function index()
    {
        $model = new UserModel();

        return $this->response->setJSON(
            $model->findAll()
        );
    }
    
    public function register()
    {
        $model = new UserModel();

        $data = $this->request->getJSON(true);

        $model->insert([
            'nom' => $data['nom'],
            'prenom' => $data['prenom'],
            'email' => $data['email'],
            'password' => password_hash(
                $data['password'],
                PASSWORD_DEFAULT
            )
        ]);

        return $this->response->setJSON([
            'message' => 'Utilisateur créé'
        ]);
    }

    public function login()
    {
        $model = new UserModel();

        $data = $this->request->getJSON(true);

        $user = $model
            ->where('email', $data['email'])
            ->first();

        if (!$user) {
            return $this->response->setStatusCode(401)
                ->setJSON([
                    'message' => 'Utilisateur introuvable'
                ]);
        }

        if (
            !password_verify(
                $data['password'],
                $user['password']
            )
        ) {
            return $this->response->setStatusCode(401)
                ->setJSON([
                    'message' => 'Mot de passe incorrect'
                ]);
        }

        return $this->response->setJSON([
            'message' => 'Connexion réussie'
        ]);
    }
}
