<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patent extends Model
{
    protected $fillable = [
        'name', 'image_patent'
    ];
}
