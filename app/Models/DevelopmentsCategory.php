<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DevelopmentsCategory extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'id',
        'rotation',
        'title',
    ];

    protected $casts = [
        'id' => 'integer',
        'rotation' => 'integer',
        'title' => 'string',
    ];
}
