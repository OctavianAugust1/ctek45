<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Development;
use App\Category;
use Illuminate\Support\Str;

class UploadController extends Controller
{
    public function change_contacts(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'contact' => 'required|string'
        ]);
        DB::table('contacts')->where('id', $request->id)->update(['contact' => $request->contact]);
        return response()->json([
            'message' => 'success'
        ], 200);
    }

    public function change_image(Request $request)
    {
        $request->validate([
            'path' => 'required|string',
            'image' => 'required|image',
        ]);
        $path = explode('/', $request->path);
        $path = array_slice($path, 1, -1);
        $path = implode('/', $path);
        $name = explode('/', $request->path);
        $name = end($name);
        $imageStorage = $request->file('image')->storeAs($path, $name, 'site_files');
        return response()->json([
            'message' => 'success',
            'path' => 'public/' . $imageStorage,
        ]);
    }

    public function change_main_page_inf(Request $request)
    {
        $request->validate([
            'text' => 'required|string'
        ]);
        DB::table('main_page')->where('id', $request->id)->update(['text' => $request->text]);
        return response()->json([
            'message' => 'success',
            'text' => [
                'id' => $request->id,
                'text' => DB::table('main_page')->where('id', $request->id)->value('text'),
            ]
        ]);
    }

    public function upload_ckfinder_image(Request $request)
    {
        $request->validate([
            'upload' => 'required|image',
            'ckCsrfToken' => 'required|string|max:40'
        ]);
        $nameImage = Str::random(20);
        $image = $request->file('upload')->storeAs(
            'public/articles', $nameImage . '.webp'
        );
        $image = str_ireplace('public/articles', 'public/storage/articles', $image);
        return response()->json([
            'message' => 'success',
            'fileName' => $nameImage . '.webp',
            'uploaded' => 1,
            'url' => asset($image),
        ]);
    }

    public function add_category(Request $request)
    {
        $request->validate([
            'category' => 'required|string|max:255'
        ]);
        $rotating_id = Category::max('rotating_id');
        $category = Category::create([
            'rotating_id' => $rotating_id + 1,
            'category' => $request->category,
        ]);
        return response()->json([
            'message' => 'success',
            'id' => $category->id,
            'rotating_id' => $category->rotating_id,
            'category' => $category->category,
        ]);
    }

    public function change_category_name(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'category' => 'required|string|max:255'
        ]);
        Category::where('id', $request->id)->update(['category' => $request->category]);
        return response()->json([
            'message' => 'success',
            'category' => $request->category
        ]);
    }

    public function delete_category(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);
        Development::where('category', $request->id)->update(['category' => 1]);
        Category::where('id', $request->id)->delete();
        return response()->json([
            'message' => 'success'
        ]);
    }

    public function up_rotate_category(Request $request)
    {
        $request->validate([
            'rotating_id' => 'required|integer',
            'category' => 'required|string|max:255',
        ]);
        $idCat = Category::where('category', $request->category)->value('id');
        $id = Category::where('rotating_id', '<', $request->rotating_id)
            ->orderBy('rotating_id', 'desc')
            ->value('rotating_id');
        $category_rotate = Category::where('rotating_id', $id)->value('category');
        Category::where('rotating_id', $id)->update(['rotating_id' => $request->rotating_id]);
        Category::where([
            ['rotating_id', $request->rotating_id],
            ['category', $request->category]
        ])->update(['rotating_id' => $id]);

        $dev_target_cat = Development::where('category', $request->rotating_id)->get();
        $dev_rotate_cat = Development::where('category', $id)->get();
        foreach ($dev_target_cat as $key) {
            Development::where('id', $key->id)->update(['category' => $id]);
        }
        foreach ($dev_rotate_cat as $key) {
            Development::where('id', $key->id)->update(['category' => $request->rotating_id]);
        }

        $maximalTarget = false;
        if ($request->rotating_id == Category::max('rotating_id')) {
            $maximalTarget = true;
        }
        $minimalTarget = false;
        if ($request->rotating_id == Category::min('rotating_id')) {
            $minimalTarget = true;
        }
        $max = false;
        if ($id == Category::max('rotating_id')) {
            $max = true;
        }
        $min = false;
        if ($id == Category::min('rotating_id')) {
            $min = true;
        }
        $without_category = false;
        if ($request->category == 'Без категории') {
            $without_category = true;
        }
        return response()->json([
            'message' => 'success',
            'id' => $idCat,
            'rotating_id' => $id,
            'rotate_id' => $request->rotating_id,
            'category_rotate' => $category_rotate,
            'category' => $request->category,
            'withoutCategory' => $without_category,
            'max' => $max,
            'min' => $min,
            'maximalTarget' => $maximalTarget,
            'minimalTarget' => $minimalTarget,
        ]);
    }

    public function down_rotate_category(Request $request)
    {
        $request->validate([
            'rotating_id' => 'required|integer',
            'category' => 'required|string|max:255',
        ]);
        $idCat = Category::where('category', $request->category)->value('id');
        $id = Category::where('rotating_id', '>', $request->rotating_id)
            ->orderBy('rotating_id', 'asc')
            ->value('rotating_id');
        $category_rotate = Category::where('rotating_id', $id)->value('category');
        Category::where('rotating_id', $id)->update(['rotating_id' => $request->rotating_id]);
        Category::where([
            ['rotating_id', $request->rotating_id],
            ['category', $request->category]
        ])->update(['rotating_id' => $id]);

        $dev_target_cat = Development::where('category', $request->rotating_id)->get();
        $dev_rotate_cat = Development::where('category', $id)->get();
        foreach ($dev_target_cat as $key) {
            Development::where('id', $key->id)->update(['category' => $id]);
        }
        foreach ($dev_rotate_cat as $key) {
            Development::where('id', $key->id)->update(['category' => $request->rotating_id]);
        }

        $maximalTarget = false;
        if ($request->rotating_id == Category::max('rotating_id')) {
            $maximalTarget = true;
        }
        $minimalTarget = false;
        if ($request->rotating_id == Category::min('rotating_id')) {
            $minimalTarget = true;
        }
        $max = false;
        if ($id == Category::max('rotating_id')) {
            $max = true;
        }
        $min = false;
        if ($id == Category::min('rotating_id')) {
            $min = true;
        }
        $without_category = false;
        if ($request->category == 'Без категории') {
            $without_category = true;
        }
        return response()->json([
            'message' => 'success',
            'id' => $idCat,
            'rotating_id' => $id,
            'rotate_id' => $request->rotating_id,
            'category_rotate' => $category_rotate,
            'category' => $request->category,
            'withoutCategory' => $without_category,
            'max' => $max,
            'min' => $min,
            'maximalTarget' => $maximalTarget,
            'minimalTarget' => $minimalTarget,
        ]);
    }

    public function about_us_change(Request $request)
    {
        $request->validate([
            'text' => 'required|string',
        ]);
        DB::table('about_us')->update(['text' => $request->text]);
        return response()->json([
            'message' => 'success',
        ]);
    }
}
