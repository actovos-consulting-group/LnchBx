<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Friend extends Model
{
    protected $fillable = [
        'user_id',
        'friend_id',
        'invite_sent',
        'friends_since'
    ];
}
