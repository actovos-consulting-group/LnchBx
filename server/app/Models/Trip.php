<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Trip extends Model
{
    protected $fillable = [
        'creator_id',
        'name',
        'restaurant_name',
        'restaurant_id'
    ];

    protected $casts = [
        'created_at' => 'datetime: d/M/y'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'trips_users');
    }

    public function tripFriends()
    {
        $friends = DB::table('trips_users')
            ->where('trip_id', $this->id)
            ->get();
        return $friends;
    }
}
