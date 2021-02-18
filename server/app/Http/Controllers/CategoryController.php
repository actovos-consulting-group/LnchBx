<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }
}
