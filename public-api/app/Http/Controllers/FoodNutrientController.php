<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FoodNutrientController extends Controller
{
    private $privateApiUrl;

    public function __construct()
    {
        $this->privateApiUrl = env('PRIVATE_API_URL');
        $this->errorMesage = 'Internal Error, please try again later';
        $this->genericErrorStatusCode = 500;
    }

    public function show(int $foodId)
    {
        $response = Http::get("{$this->privateApiUrl}/foodNutrients/{$foodId}");
        if ($response->ok()) {
            return $response->json();
        } else {
            return response($this->errorMesage, $this->genericErrorStatusCode);
        }
    }

    
    public function index(Request $request)
    {
        $limit = $request->get('limit');
        $page = $request->get('page');

        $response = Http::get("{$this->privateApiUrl}/foodNutrients", [
            'query' => [
                'page' => $page,
                'limit' => $limit,
            ]
        ]);
        if ($response->ok()) {
            return $response->json();
        } else {
            return response($this->errorMesage, $this->genericErrorStatusCode);
        }
    }

    
}
