<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title',
        'content',
        'seo_description',
    ];

    protected $casts = [
        'title' => 'string',
        'content' => 'json',
        'seo_description' => 'string',
    ];
}
