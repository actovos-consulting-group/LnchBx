<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Friend extends User
{
    protected $fillable = [
        'user_id',
        'friend_id',
        'invite_sent',
        'friends_since'
    ];
}
