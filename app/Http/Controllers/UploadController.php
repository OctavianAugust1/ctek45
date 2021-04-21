<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Patent;
use App\Development;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function upload_patent(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image_patent' => 'required|image|between:0,10000'
        ]);


        $path_section = 'patent';
        $nameImage = Str::random(20);
        $extensionImage = $request->file('image_patent')->extension();

        $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'_small.webp';
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($request->file('image_patent'))->save($path_preview_big, 80);
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(350, 500)->save($path_preview_small, 70);
        $path_preview_big = 'public/'.$path_preview_big;
        $path_preview_small = 'public/'.$path_preview_small;
        

        Patent::create([
            'name' => $request->name
        ]);
        $maxId = DB::table('patents')->max('id');
        DB::table('patent_preview')->insert([
            ['patent_id' => $maxId, 'type' => 'big', 'path' => $path_preview_big],
            ['patent_id' => $maxId, 'type' => 'small', 'path' => $path_preview_small]
        ]);
        return redirect()->back();
    }
    public function delete_patent(Request $request)
    {
        $images = DB::table('patent_preview')->where('patent_id', $request->id)->get();
        foreach ($images as $image) {
            $image_path = str_ireplace('public/storage', 'public', $image->path);
            Storage::delete($image_path);
        }
        DB::table('patent_preview')->where('patent_id', $request->id)->delete();

        DB::table('patents')->where('id', $request->id)->delete();
        return redirect()->back();
    }
    public function change_patent(Request $request)
    {
        $request->validate([
            'image_patent' => 'required|image|between:0,10000'
        ]);
        $images = DB::table('patent_preview')->where('patent_id', $request->id)->get();
        foreach ($images as $image) {
            $image_path = str_ireplace('public/storage', 'public', $image->path);
            Storage::delete($image_path);
        }
            
        $path_section = 'patent';
        $nameImage = Str::random(20);
        $extensionImage = $request->file('image_patent')->extension();

        $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'.webp';
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($request->file('preview_development'))->save($path_preview_big, 80);
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(350, 500)->save($path_preview_small, 70);
        $path_preview_big = 'public/'.$path_preview_big;
        $path_preview_small = 'public/'.$path_preview_small;


        DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'big']])->update(['path' => $path_preview_big]);
        DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'small']])->update(['path' => $path_preview_small]);
        return redirect()->back();
    }
    public function change_information_patent(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);
        DB::table('patents')->where('id', $request->id)->update(['name' => $request->name]);
        return redirect()->back();
    }

    public function upload_development(Request $request)
    {
        // $developments = DB::table('patent_preview')->where('type', 'big')->get();
        // foreach ($developments as $development) {
        //     $nameImage = $development->path;
        //     $nameImage = explode('/', $nameImage);
        //     $nameImage = end($nameImage);
        //     $nameImage = explode('.', $nameImage);
        //     $nameImage = reset($nameImage);

        //     $extensionImage = $development->path;
        //     $extensionImage = explode('.', $extensionImage);
        //     $extensionImage = end($extensionImage);
            
        //     $path_section = 'patent';
        //     $path_preview_big_original = 'storage/'.$path_section.'/big/'.$nameImage.'.'.$extensionImage;
        //     $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'.webp';
            
        //     \Intervention\Image\Facades\Image::make($path_preview_big_original)->save($path_preview_big, 80);
        //     Storage::delete(str_ireplace('storage', 'public', $path_preview_big_original));
        //     $path_preview_big = 'public/'.$path_preview_big;

        //     DB::table('patent_preview')->where('id', $development->id)->update(['path' => $path_preview_big]);
        // }
        // --------------------------------------------------------------------------
        // $developments = DB::table('development_preview')->where('type', 'big')->get();
        // foreach ($developments as $development) {
        //     $nameImage = $development->path;
        //     $nameImage = explode('/', $nameImage);
        //     $nameImage = end($nameImage);
        //     $nameImage = explode('.', $nameImage);
        //     $nameImage = reset($nameImage);

        //     $extensionImage = $development->path;
        //     $extensionImage = explode('.', $extensionImage);
        //     $extensionImage = end($extensionImage);
            
        //     $path_section = 'development';
        //     $path_preview_big_original = 'storage/'.$path_section.'/big/'.$nameImage.'.'.$extensionImage;
        //     $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'.webp';
            
        //     \Intervention\Image\Facades\Image::make($path_preview_big_original)->save($path_preview_big, 80);
        //     Storage::delete(str_ireplace('storage', 'public', $path_preview_big_original));
        //     $path_preview_big = 'public/'.$path_preview_big;

        //     DB::table('development_preview')->where('id', $development->id)->update(['path' => $path_preview_big]);
        // }
        // --------------------------------------------------------------------------
        // $developments = DB::table('development_images')->get();
        // foreach ($developments as $development) {
        //     $nameImage = $development->development_image;
        //     $nameImage = explode('/', $nameImage);
        //     $nameImage = end($nameImage);
        //     $nameImage = explode('.', $nameImage);
        //     $nameImage = reset($nameImage);

        //     $extensionImage = $development->development_image;
        //     $extensionImage = explode('.', $extensionImage);
        //     $extensionImage = end($extensionImage);
            
        //     $path_section = 'development_images';
        //     // $path_preview_big = $patent->image_patent->storeAs('public/'.$path_section.'/big', $nameImage.'.'.$extensionImage);
        //     Storage::move(str_ireplace('public/storage', 'public', $development->development_image), 'public/'.$path_section.'/big/'.$development->development_id.'/'.$nameImage.'.'.$extensionImage);
        //     $path_preview_big_original = 'storage/'.$path_section.'/big/'.$development->development_id.'/'.$nameImage.'.'.$extensionImage;
        //     $path_preview_big = 'storage/'.$path_section.'/big/'.$development->development_id.'/'.$nameImage.'.webp';
        //     // return $path_preview_big;
        //     $path_preview_small = 'storage/'.$path_section.'/small/'.$development->development_id.'/'.$nameImage.'_small.webp';
        //     Storage::makeDirectory('public/development_images/small/'.$development->development_id.'/');
        //     \Intervention\Image\Facades\Image::make($path_preview_big_original)->save($path_preview_big, 80);
        //     Storage::delete(str_ireplace('storage', 'public', $path_preview_big_original));
        //     \Intervention\Image\Facades\Image::make($path_preview_big)->fit(300, 200)->save($path_preview_small, 70);
        //     $path_preview_small = 'public/'.$path_preview_small;
        //     $path_preview_big = 'public/'.$path_preview_big;
        //     Storage::delete(str_ireplace('public/storage', 'public', $development->development_image));

        //     DB::table('development_images')->insert([
        //         'development_id' => $development->development_id,
        //         'type' => 'small',
        //         'development_image' => $path_preview_small
        //     ]);
        //     DB::table('development_images')->insert([
        //         'development_id' => $development->development_id,
        //         'type' => 'big',
        //         'development_image' => $path_preview_big
        //     ]);
        //     DB::table('development_images')->where('id', $development->id)->delete();
        // }
        // return redirect()->back();

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string',
            'image_development' => 'required|image',
            'images_development.*' => 'required|image'
        ]);
        
        $path_section = 'development';
        $nameImage = Str::random(20);
        $extensionImage = $request->file('image_development')->extension();

        $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'.webp';
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($request->file('image_development'))->save($path_preview_big, 80);
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(500, 300)->save($path_preview_small, 70);
        $path_preview_big = str_ireplace('storage', 'public/storage', $path_preview_big);
        $path_preview_small = 'public/'.$path_preview_small;
        

        Development::create([
            'name' => $request->name,
            'description' => $request->description
        ]);
        $maxId = DB::table('developments')->max('id');
        DB::table('development_preview')->insert([
            ['development_id' => $maxId, 'type' => 'big', 'path' => $path_preview_big],
            ['development_id' => $maxId, 'type' => 'small', 'path' => $path_preview_small]
        ]);

        // images_development
        foreach ($request->file('images_development') as $file) {
            $path_section = 'development_images';
            $nameImage = Str::random(20);
            $extensionImage = $file->extension();
    
            $path_image_big = 'storage/'.$path_section.'/big/'.$maxId.'/'.$nameImage.'.webp';
            $path_image_small = 'storage/'.$path_section.'/small/'.$maxId.'/'.$nameImage.'_small.webp';
            \Intervention\Image\Facades\Image::make($file)->save($path_image_big, 80);
            \Intervention\Image\Facades\Image::make($path_image_big)->fit(500, 300)->save($path_image_small, 70);
            $path_image_big = 'public/'.$path_image_big;
            $path_image_small = 'public/'.$path_image_small;
            
            DB::table('development_images')->insert([
                ['development_id' => $maxId, 'type' => 'small', 'path' => $path_image_small],
                ['development_id' => $maxId, 'type' => 'big', 'path' => $path_image_big]
            ]);
        }
        return redirect()->back();
    }
    public function delete_development(Request $request)
    {
        // удаление превью
        $images_preview = DB::table('development_preview')->where('development_id', $request->id)->get();
        foreach ($images_preview as $image) {
            DB::table('development_preview')->where('id', $image->id)->delete();
            $image_path = str_ireplace('public/storage', 'public', $image->path);
            Storage::delete($image_path);
        }

        // удаление вложенных изображений
        $images_development = DB::table('development_images')->where('id', $request->id)->get();
        foreach ($images_development as $image) {
            DB::table('development_images')->where('development_id', $image->id)->delete();
            $image_path = str_ireplace('public/storage', 'public', $image->development_image);
            Storage::delete($image_path);
        }

        // удаление записи в бд
        DB::table('developments')->where('id', $request->id)->delete();
        return redirect()->route('developments');
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
        $extensionImage = $request->file('preview_development')->extension();

        $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'.webp';
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($request->file('preview_development'))->save($path_preview_big, 80);
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(500, 300)->save($path_preview_small, 70);
        $path_preview_big = str_ireplace('storage', 'public/storage', $path_preview_big);
        $path_preview_small = 'public/'.$path_preview_small;
        
        // обновление записей в бд
        DB::table('development_preview')->where([['development_id', $request->id], ['type', 'big']])->update(['path' => $path_preview_big]);
        DB::table('development_preview')->where([['development_id', $request->id], ['type', 'small']])->update(['path' => $path_preview_small]);
        return redirect()->back();
    }
    public function add_development_image(Request $request)
    {
        $request->validate([
            'images_development.*' => 'required|image'
        ]);

        // images_development
        foreach ($request->file('images_development') as $file) {
            $maxId = DB::table('developments')->max('id');

            $path_section = 'development_images';
            $nameImage = Str::random(20);
            $extensionImage = $file->extension();
    
            $path_image_big = 'storage/'.$path_section.'/big/'.$maxId.'/'.$nameImage.'.webp';
            $path_image_small = 'storage/'.$path_section.'/small/'.$maxId.'/'.$nameImage.'_small.webp';
            \Intervention\Image\Facades\Image::make($file)->save($path_image_big, 80);
            \Intervention\Image\Facades\Image::make($path_image_big)->fit(500, 300)->save($path_image_small, 70);
            $path_image_big = 'public/'.$path_image_big;
            $path_image_small = 'public/'.$path_image_small;
            
            DB::table('development_images')->insert([
                ['development_id' => $request->development_id, 'type' => 'small', 'path' => $path_image_small],
                ['development_id' => $maxId, 'type' => 'big', 'path' => $path_image_big]
            ]);
        }
        return redirect()->back();
    }
    public function change_information_development(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string'
        ]);
        
        DB::table('developments')->where('id', $request->id)
        ->update(['name' => $request->name, 'description' => $request->description]);
        return redirect()->back();
    }
    public function delete_image_development(Request $request)
    {
        $image_path = str_ireplace('public/storage', 'public', $request->path);
        Storage::delete($image_path);

        DB::table('development_images')->where('path', $request->path)->delete();
        return redirect()->back();
    }
}
