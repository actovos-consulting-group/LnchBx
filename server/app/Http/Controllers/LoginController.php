<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function googleSSO(Request $request)
    {
        //take request data and send to google
        dd($request->token);
        // take response and pass through JWT token parser
        // get back data
        // find or create user
        // update data just in case
        // log user in with Authenticatable
        // send session back to FE
        //
    }
}
