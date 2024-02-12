<?php

namespace App\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Development;
use App\Models\DevelopmentsCategory;
use App\Models\DevelopmentsImage;
use App\Models\Page;
use App\Models\Patent;
use DB;
use Storage;
use Str;

class ImportController extends Controller
{
    public static function patents()
    {
        $patents = DB::connection('ctek_old')
            ->select('select * from patents');
        foreach ($patents as $patent) {
            $patentImage = Str::replace('public/', '', DB::connection('ctek_old')
                ->select('select path from patent_preview where type = "big" and patent_id = '.$patent->id)[0]->path);
            Patent::create([
                'name' => $patent->name,
                'cover' => $patentImage,
                'created_at' => $patent->created_at,
                'updated_at' => $patent->updated_at
            ]);
        }
    }

    public static function articles()
    {
        $articles = DB::connection('ctek_old')
            ->select('select * from articles');
        foreach ($articles as $article) {
            $articleText = Str::of($article->text)->replace('public/storage', 'storage');
            Article::create([
                'id' => $article->id,
                'title' => $article->name,
                'text' => $articleText,
            ]);
        }
    }

    public static function developmentsCategories()
    {
        $categories = DB::connection('ctek_old')
            ->select('select * from categories');
        foreach ($categories as $category) {
            DevelopmentsCategory::create([
                'id' => $category->id,
                'rotation' => $category->rotating_id,
                'title' => $category->category,
            ]);
        }
    }

    public static function developmentsImage()
    {
        $images = DB::connection('ctek_old')
            ->select('select * from development_images where type = "big"');
        foreach ($images as $image) {
            $developmentImage = Str::replace(
                'public/', '',
                DB::connection('ctek_old')
                    ->select(
                        'select *
                            from development_images
                            where id = ' . $image->id . '
                            and development_id = ' . $image->development_id
                    )[0]->path
            );

            $newPath = null;
            if (Str::of($developmentImage)->contains('big') && Str::of($developmentImage)->contains('small')) {
                $newPath = Str::of($developmentImage)->replace('_small', '');
                Storage::move(
                    Str::of($developmentImage)->replace('storage/', ''),
                    Str::of($newPath)->replace('storage/', '')
                );
            }
            DevelopmentsImage::create([
                'development_id' => $image->development_id,
                'path' => $newPath ?: $developmentImage,
            ]);
        }
    }

    public static function developments()
    {
        $developments = DB::connection('ctek_old')
            ->select('select * from developments');
        foreach ($developments as $development) {
            $developmentPreview = Str::replace('public/', '', DB::connection('ctek_old')
                ->select('select * from development_preview where type = "big" and development_id = ' . $development->id)[0]->path);
            Development::create([
                'id' => $development->id,
                'category_id' => $development->category,
                'name' => $development->name,
                'description' => $development->description,
                'cover' => $developmentPreview,
                'created_at' => $development->created_at,
                'updated_at' => $development->updated_at,
            ]);
        }
    }

    public static function pages()
    {
        $mainPageTexts = DB::connection('ctek_old')
            ->select('select text from main_page');
        $mainPageText = collect($mainPageTexts)->toJson();
        Page::create([
            'title' => 'main_page',
            'content' => $mainPageText,
            'seo_description' => '',
        ]);

        $aboutUsTexts = DB::connection('ctek_old')
            ->select('select text from about_us');
        $aboutUsText = collect($aboutUsTexts)->toJson();
        Page::create([
            'title' => 'about_us',
            'content' => $aboutUsText,
            'seo_description' => '',
        ]);

        $contactsTexts = DB::connection('ctek_old')
            ->select('select contact as text from contacts');
        $contactsText = collect($contactsTexts)->toJson();
        Page::create([
            'title' => 'contacts',
            'content' => $contactsText,
            'seo_description' => '',
        ]);
    }
}
