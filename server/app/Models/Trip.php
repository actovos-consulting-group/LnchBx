<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    protected $fillable = [
        'creator_id',
        'name',
        'restaurant_name'
    ];
}
