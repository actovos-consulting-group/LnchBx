<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class FriendController extends Controller
{
    public function getFriends($userID)
    {
        $user = User::where('id', $userID)
            ->with('friends.categories')
            ->first();

        return $user->friends;
    }
}
