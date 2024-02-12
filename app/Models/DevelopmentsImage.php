<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DevelopmentsImage extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'development_id',
        'path',
    ];

    protected $casts = [
        'development_id' => 'integer',
        'path' => 'string',
    ];
}
