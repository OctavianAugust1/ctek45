<?php

namespace App\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PatentCollection;
use App\Http\Resources\PatentResource;
use App\Models\Patent;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PatentController extends Controller
{
    public function create()
    {
    }

    public function read(int $id = null): JsonResource|ResourceCollection|null
    {
        if ($id && Patent::where('id', $id)->count()) {
            return new PatentResource(Patent::where('id', $id)->first());
        } elseif (Patent::all()->count()) {
            return new PatentCollection(Patent::all());
        }

        return null;
    }

    public function update()
    {
    }

    public function delete()
    {
    }
}
