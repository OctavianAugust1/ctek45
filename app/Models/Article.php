<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'id',
        'title',
        'text',
    ];

    protected $casts = [
        'id' => 'integer',
        'title' => 'string',
        'text' => 'string',
    ];
}
