<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Development extends Model
{
    protected $fillable = [
        'name', 'description', 'category', 'preview_development', 'images_development'
    ];
}
