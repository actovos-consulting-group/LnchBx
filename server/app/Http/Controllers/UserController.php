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

    public function getMe($id)
    {
        //TODO: do this dynamically based off logged in user
        return User::where('id', $id)->with('categories')->get();
    }
}
