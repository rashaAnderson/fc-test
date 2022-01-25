<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NutrientsController extends Controller
{
    private $privateApiUrl;

    public function __construct()
    {
        $this->privateApiUrl = env('PRIVATE_API_URL');
        $this->errorMesage = 'Internal Error, please try again later';
        $this->genericErrorStatusCode = 500;
    }

    public function show(int $id)
    {
        $response = Http::get("{$this->privateApiUrl}/nutrientsDetails/{$id}");
        if ($response->ok()) {
            return $response->json();
        } else {
            return response($this->errorMesage, $this->genericErrorStatusCode);
        }
    }


}
