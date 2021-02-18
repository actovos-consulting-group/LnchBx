<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')->group(function () {
    Route::post('login', 'LoginController@authenticate');
    Route::post('logout', 'LoginController@logout');
});

Route::get('friends/{id}', 'FriendController@getFriends');
Route::get('me/{id}', 'UserController@getMe');
Route::get('categories', 'CategoryController@index');
Route::post('sso-verify', 'LoginController@googleSSO');
Route::post('trips', 'TripsController@store');
Route::get('trips/{id}', 'TripsController@index');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
