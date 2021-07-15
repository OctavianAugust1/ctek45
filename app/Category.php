<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
	public $timestamps = false;
    protected $fillable = [
        'rotating_id', 'category'
    ];
}
