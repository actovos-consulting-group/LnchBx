<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers()
    {
        return User::all();
    }

    public function getMe()
    {
        //TODO: do this dynamically based off logged in user
        return User::where('id', 1)->with('categories')->get();
    }
}
