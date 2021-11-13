<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    public function add_article(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'text' => 'required|string',
        ]);
        $article = Article::create([
            'name' => $request->name,
            'text' => $request->text
        ]);
        return response()->json([
            'message' => 'success',
            'id' => $article->id,
            'name' => $article->name,
            'text' => $article->text,
        ]);
    }

    public function change_article(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'name' => 'required|string|max:255',
            'text' => 'required|string',
        ]);
        Article::where('id', $request->id)->update(['name' => $request->name, 'text' => $request->text]);
        return response()->json([
            'message' => 'success',
            'name' => $request->name,
            'text' => $request->text,
        ]);
    }

    public function delete_article(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
        ]);
        Article::where('id', $request->id)->delete();
        return response()->json([
            'message' => 'success',
        ]);
    }
}
