<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    private $privateApiUrl;

    public function __construct()
    {
        $this->privateApiUrl = env('PRIVATE_API_URL');
        $this->errorMesage = 'Internal Error, please try again later';
        $this->genericErrorStatusCode = 500;
    }

    public function index(Request $request)
    {
        $search = $request->input('search');
        
        $response = Http::get("{$this->privateApiUrl}/foods", [
            'search' => $search
         ]);
        if ($response->ok()) {
            return $response->json();
        } else {
            return response($this->errorMesage, $this->genericErrorStatusCode);
        }
    }

    public function show(int $foodId)
    {
        $response = Http::get("{$this->privateApiUrl}/foods/{$foodId}");
        if ($response->ok()) {
            return $response->json();
        } else {
            return response($this->errorMesage, $this->genericErrorStatusCode);
        }
    }
}
