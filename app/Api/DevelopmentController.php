<?php

namespace App\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DevelopmentCollection;
use App\Http\Resources\DevelopmentResource;
use App\Models\Development;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Request;

class DevelopmentController extends Controller
{
    public function create()
    {
    }

    public function read(Request $request, int $id = null): JsonResource|ResourceCollection|null
    {
        $request->validate(['withImages' => 'nullable|boolean']);
        if ($id && Development::where('id', $id)->count()) {
            $withImages = (bool)$request->input('withImages', false);
            $development = $withImages ? Development::with('images:development_id,path') : new Development;
            $development = $development->where('id', $id)->first();
            return new DevelopmentResource($development);
        } elseif (Development::all()->count()) {
            return new DevelopmentCollection(Development::all());
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
