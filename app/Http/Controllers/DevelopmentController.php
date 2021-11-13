<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Development;
use App\Category;
use App\Http\Requests\DevelopmentValidation;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class DevelopmentController extends Controller
{
    public function upload_development(DevelopmentValidation $request)
    {
        $path_section = 'development';
        $nameImage = Str::random(20);
        list($pathImageBig, $pathImageSmall) = $this->imageIntervention(
            $path_section,
            $nameImage,
            $request->file('image_development'),
            500,
            300
        );

        if ($request->description) {
            $description = $request->description;
        } else {
            $description = '';
        }

        $dev = Development::create([
            'name' => $request->name,
            'description' => $description,
            'category' => $request->category,
        ]);
        $devId = $dev->id;
        DB::table('development_preview')->insert([
            ['development_id' => $devId, 'type' => 'big', 'path' => $pathImageBig],
            ['development_id' => $devId, 'type' => 'small', 'path' => $pathImageSmall]
        ]);

        // images_development
        if ($request->hasFile('images_development')) {
            foreach ($request->file('images_development') as $file) {
                $path_section = 'development_images';
                $nameImage = Str::random(20);
                Storage::makeDirectory('public/' . $path_section . '/big/' . $devId . '/');
                Storage::makeDirectory('public/' . $path_section . '/small/' . $devId . '/');
                list($pathImageBig, $pathImageSmall) = $this->imageIntervention(
                    $path_section,
                    $nameImage,
                    $file,
                    300,
                    200,
                    $devId . '/'
                );
                DB::table('development_images')->insert([
                    ['development_id' => $devId, 'type' => 'small', 'path' => $pathImageSmall],
                    ['development_id' => $devId, 'type' => 'big', 'path' => $pathImageBig]
                ]);
            }
        }

        return response()->json([
            'message' => 'success',
            'development' => [
                'id' => $devId,
                'name' => $request->name,
                'categories' => Category::distinct()->pluck('category'),
                'category' => Category::where('rotating_id', $request->category)->value('category'),
                'development_preview_small' => DB::table('development_preview')->where([
                    ['development_id', $devId],
                    ['type', 'small']
                ])->value('path'),
                'development_preview_big' => DB::table('development_preview')->where([
                    ['development_id', $devId],
                    ['type', 'big']
                ])->value('path'),
            ]
        ]);
    }

    public function change_category(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'category' => 'required|string|max:255',
        ]);

        $id = Category::where('category', $request->category)->value('rotating_id');
        Development::where('id', $request->id)->update(['category' => $id]);

        return response()->json([
            'message' => 'success',
            'id' => $id
        ]);
    }

    public function delete_development(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);
        // удаление превью
        $images_preview = DB::table('development_preview')->where('development_id', $request->id)->get();
        foreach ($images_preview as $image) {
            DB::table('development_preview')->where('id', $image->id)->delete();
            $image_path = str_ireplace('public/storage', 'public', $image->path);
            Storage::delete($image_path);
        }

        // удаление вложенных изображений
        $images_development = DB::table('development_images')->where('development_id', $request->id)->get();
        foreach ($images_development as $image) {
            DB::table('development_images')->where('id', $image->id)->delete();
            $image_path = str_ireplace('public/storage', 'public', $image->path);
            Storage::delete($image_path);
        }

        // удаление записи в бд
        Development::where('id', $request->id)->delete();
        return response()->json([
            'message' => 'success',
        ]);
    }

    public function change_development_preview_image(Request $request)
    {
        $request->validate([
            'preview_development' => 'required|image'
        ]);

        // удаление картинок превью
        $images = DB::table('development_preview')->where('development_id', $request->id)->get();
        foreach ($images as $image) {
            $image_path = str_ireplace('public/storage', 'public', $image->path);
            Storage::delete($image_path);
        }

        // добавление новой картинки в двух версиях
        $path_section = 'development';
        $nameImage = Str::random(20);
        list($pathImageBig, $pathImageSmall) = $this->imageIntervention(
            $path_section,
            $nameImage,
            $request->file('preview_development'),
            500,
            300
        );

        // обновление записей в бд
        DB::table('development_preview')->where([
            ['development_id', $request->id],
            ['type', 'big']
        ])->update(['path' => $pathImageBig]);
        DB::table('development_preview')->where([
            ['development_id', $request->id],
            ['type', 'small']
        ])->update(['path' => $pathImageSmall]);

        return response()->json([
            'message' => 'success',
            'development' => [
                'id' => $request->id,
                'development_preview_big' => DB::table('development_preview')->where([
                    ['development_id', $request->id],
                    ['type', 'big']
                ])->value('path'),
                'development_preview_small' => DB::table('development_preview')->where([
                    ['development_id', $request->id],
                    ['type', 'small']
                ])->value('path'),
            ]
        ]);
    }

    public function add_development_image(Request $request)
    {
        $request->validate([
            'development_id' => 'required|integer',
            'images_development' => 'required|array',
            'images_development.*' => 'required|image',
        ]);

        // images_development
        $devId = $request->development_id;
        $dev_big_images_response = [];
        $dev_small_images_response = [];
        foreach ($request->file('images_development') as $file) {
            $path_section = 'development_images';
            $nameImage = Str::random(20);
            Storage::makeDirectory('public/' . $path_section . '/big/' . $devId . '/');
            Storage::makeDirectory('public/' . $path_section . '/small/' . $devId . '/');
            list($pathImageBig, $pathImageSmall) = $this->imageIntervention(
                $path_section,
                $nameImage,
                $file,
                300,
                200,
                $devId . '/'
            );

            $dev_big_images_response[] = $pathImageBig;
            $dev_small_images_response[] = $pathImageSmall;

            DB::table('development_images')->insert([
                ['development_id' => $devId, 'type' => 'small', 'path' => $pathImageSmall],
                ['development_id' => $devId, 'type' => 'big', 'path' => $pathImageBig]
            ]);
        }
        $arr = [];
        for ($i = 0; $i < count($dev_big_images_response); $i++) {
            $arr[$i + 1] = [
                'development_preview_big' => $dev_big_images_response[$i],
                'development_preview_small' => $dev_small_images_response[$i],
            ];
        }
        return response()->json([
            'message' => 'success',
            'development_images' => $arr,
        ]);
    }

    public function change_information_development(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        if ($request->description) $description = $request->description;
        else $description = '';
        Development::where('id', $request->id)->update(['name' => $request->name, 'description' => $description]);
        return response()->json([
            'message' => 'success',
            'development_information' => [
                'name' => $request->name,
                'description' => $description,
            ],
        ]);
    }

    public function delete_image_development(Request $request)
    {
        $request->validate([
            'path' => 'required|string|max:255'
        ]);
        $image_path_small_original = $request->path;
        $image_path_big_original = str_ireplace('/small/', '/big/', $image_path_small_original);
        $image_path_big_original = str_ireplace('_small.webp', '.webp', $image_path_big_original);

        $image_path_small = str_ireplace('public/storage', 'public', $request->path);
        Storage::delete($image_path_small);
        $image_path_big = str_ireplace('public/storage', 'public', $request->path);
        $image_path_big = str_ireplace('/small/', '/big/', $image_path_big);
        $image_path_big = str_ireplace('_small.webp', '.webp', $image_path_big);
        Storage::delete($image_path_big);

        DB::table('development_images')->where('path', $image_path_small_original)->delete();
        DB::table('development_images')->where('path', $image_path_big_original)->delete();
        return response()->json([
            'message' => 'success',
            '$image_path_small_original' => $image_path_small_original,
            '$image_path_big_original' => $image_path_big_original,
        ]);
    }
}
