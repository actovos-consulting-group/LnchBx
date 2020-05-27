<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'api_id',
        'name',
        'pluralName',
        'shortName',
        'icon'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
