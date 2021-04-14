<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Development extends Model
{
    protected $fillable = [
        'name', 'description', 'preview_development'
    ];
}
