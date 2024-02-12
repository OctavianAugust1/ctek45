<?php

namespace App\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DevelopmentsCategoryCollection;
use App\Models\DevelopmentsCategory;

class DevelopmentsCategoryController extends Controller
{
    public function create()
    {
    }

    public function read()
    {
        return new DevelopmentsCategoryCollection(DevelopmentsCategory::all());
    }

    public function update()
    {
    }

    public function delete()
    {
    }
}
