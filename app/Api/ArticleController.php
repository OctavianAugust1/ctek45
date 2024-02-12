<?php

namespace App\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleCollection;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ArticleController extends Controller
{
    public function create()
    {
    }

    public function read(int $id = null): JsonResource|ResourceCollection|null
    {
        if ($id && Article::where('id', $id)->count()) {
            return new ArticleResource(Article::where('id', $id)->first());
        } elseif (Article::all()->count()) {
            return new ArticleCollection(Article::all());
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
