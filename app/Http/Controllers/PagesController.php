<?php

namespace App\Http\Controllers;

use App\Patent;
use App\Development;
use App\Category;
use App\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PagesController extends Controller
{
    public function index()
    {
        $mainInf = DB::table('main_page')->pluck('text');
        return view('pages.index', compact('mainInf'));
    }

    public function login()
    {
        return view('pages.login');
    }

    public function contacts()
    {
        $contacts = DB::table('contacts')->pluck('contact');
        return view('pages.contacts', compact('contacts'));
    }

    public function articles()
    {
        $articles = Article::get();
        return view('pages.articles', compact('articles'));
    }

    public function article($id)
    {
        $article = Article::where('id', $id)->first();
        return view('pages.article', ['id' => $id], compact('article'));
    }

    public function patents()
    {
        $patents = Patent::paginate(12);
        return view('pages.patents', compact('patents'));
    }

    public function developments()
    {
        $developments = Development::orderBy('category', 'asc')->paginate(12);
        $developmentsCategories = Category::get();
        return view('pages.developments', compact(['developments', 'developmentsCategories']));
    }

    public function development($id)
    {
        $development = Development::where('id', $id)->first();
        $development_images = DB::table('development_images')->where([
            ['development_id', $id],
            ['type', 'small']
        ])->get();
        return view('pages.development', ['id' => $id], compact(['development', 'development_images']));
    }

    public function about_us()
    {
        $about_us = DB::table('about_us')->value('text');
        return view('pages.about_us', compact('about_us'));
    }

    public function feedback()
    {
        return view('pages.feedback');
    }

    public function admin()
    {
        $first_category = Category::orderBy('rotating_id', 'asc')->value('rotating_id');
        $latest_category = Category::orderBy('rotating_id', 'desc')->value('rotating_id');
        $categories_count = Category::count();
        $categories = Category::orderBy('rotating_id', 'asc')->get();
        return view('pages.admin', compact(['categories', 'categories_count', 'first_category', 'latest_category']));
    }
}
