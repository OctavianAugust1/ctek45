<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SeoController extends Controller
{
    public function sitemap()
    {
        return 'sitemap';
    }
    public function robots()
    {
        return 'seo';
    }
}
