<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use GuzzleHttp\Client;
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
    public function googleSSO(Request $request)
    {
        // http_origin
        dd($request);
        //take request data and send to google
        // return $request->token;

        $payload = [
            "code" => trim($request->token, '"'),
            "client_id" => env('GOOGLE_CLIENT_ID'),
            "client_secret" => env('GOOGLE_CLIENT_SECRET'),
            "grant_type" => "authorization_code",
            "redirect_uri" => $request->url()
        ];

        $client = new Client();
        $response = $client->post('https://oauth2.googleapis.com/token', [
            \GuzzleHttp\RequestOptions::JSON => $payload
        ]);

        $resData = json_decode($response->getBody());
        //decode the token from google
        $userData = json_decode(
            base64_decode(
                str_replace(
                    '_',
                    '/',
                    str_replace('-', '+', explode('.', $resData->id_token)[1])
                )
            )
        );

        $user = User::firstOrCreate(
            ['email' => $userData->email],
            ['name' => $userData->given_name . ' ' . $userData->family_name],
            [
                'email_verified_at' => $userData->email_verified
                    ? Carbon::now()
                    : null
            ]
        );

        Auth::login($user);

        return $user;

        // take response and pass through JWT token parser
        // get back data
        // find or create user
        // update data just in case
        // log user in with Authenticatable
        // send session back to FE
        //
    }
}
