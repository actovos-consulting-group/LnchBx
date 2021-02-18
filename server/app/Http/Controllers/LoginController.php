<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json([
                'user' => Auth::user()
            ]);
        } else {
            return response(['error' => 'incorrect credentials'], 401);
        }
    }

    public function logout(Request $request)
    {
        return Auth::logout();
    }
}
