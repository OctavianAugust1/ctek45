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
        $nameImage = Str::random(20);
        $extensionImage = $request->file('image_patent')->getClientOriginalExtension();
        $path_section = 'patent';
        $path_preview_big = $request->file('image_patent')->storeAs('public/'.$path_section.'/big/', $nameImage.'.'.$extensionImage);
        $path_preview_big = str_ireplace('public', 'storage', $path_preview_big);
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(350, 500)->save($path_preview_small, 70);
        $path_preview_small = 'public/'.$path_preview_small;
        

        Patent::create([
            'name' => $request->name
        ]);
        DB::table('patent_preview')->insert([
            'patent_id' => DB::table('patents')->max('id'),
            'type' => 'big',
            'path' => str_ireplace('storage', 'public/storage', $path_preview_big)
        ]);
        DB::table('patent_preview')->insert([
            'patent_id' => DB::table('patents')->max('id'),
            'type' => 'small',
            'path' => $path_preview_small
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
        DB::table('patent_preview')->where('patent_id', $request->id)->delete();
            
        $nameImage = Str::random(20);
        $extensionImage = $request->file('image_patent')->getClientOriginalExtension();
        $path_section = 'patent';
        $path_preview_big = $request->file('image_patent')->storeAs('public/'.$path_section.'/big/', $nameImage.'.'.$extensionImage);
        $path_preview_big = str_ireplace('public', 'storage', $path_preview_big);
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(350, 500)->save($path_preview_small, 70);
        $path_preview_small = 'public/'.$path_preview_small;

        // $path = $request->file('image_patent')->store('public');
        // $path = str_ireplace('public', 'public/storage', $path);

        DB::table('patent_preview')->insert([
            'patent_id' => $request->id,
            'type' => 'big',
            'path' => str_ireplace('storage', 'public/storage', $path_preview_big)
        ]);
        DB::table('patent_preview')->insert([
            'patent_id' => $request->id,
            'type' => 'small',
            'path' => $path_preview_small
        ]);
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
        // $developments = DB::table('developments')->select('id', 'preview_development')->get();
        // foreach ($developments as $development) {
        //     $nameImage = $development->preview_development;
        //     $nameImage = explode('/', $nameImage);
        //     $nameImage = end($nameImage);
        //     $nameImage = explode('.', $nameImage);
        //     $nameImage = reset($nameImage);

        //     $extensionImage = $development->preview_development;
        //     $extensionImage = explode('.', $extensionImage);
        //     $extensionImage = end($extensionImage);
            
        //     $path_section = 'development';
        //     // $path_preview_big = $patent->image_patent->storeAs('public/'.$path_section.'/big', $nameImage.'.'.$extensionImage);
        //     Storage::move(str_ireplace('public/storage', 'public', $development->preview_development), 'public/'.$path_section.'/big/'.$nameImage.'.'.$extensionImage);
        //     $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'.'.$extensionImage;
        //     // return $path_preview_big;
        //     $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        //     \Intervention\Image\Facades\Image::make($path_preview_big)->fit(500, 300)->save($path_preview_small, 70);
        //     $path_preview_small = 'public/'.$path_preview_small;
        //     Storage::delete(str_ireplace('public/storage', 'public', $development->preview_development));

        //     DB::table('developments')->where('id', $development->id)->update(['preview_development' => $path_preview_small]);
        // }
        
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string',
            'image_development' => 'required|image',
            'images_development.*' => 'required|image'
        ]);
        $nameImage = Str::random(20);
        $extensionImage = $request->file('image_development')->getClientOriginalExtension();
        $path_section = 'development';
        $path_preview_big = $request->file('image_development')->storeAs('public/'.$path_section.'/big/', $nameImage.'.'.$extensionImage);
        $path_preview_big = str_ireplace('public', 'storage', $path_preview_big);
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(500, 300)->save($path_preview_small, 70);
        $path_preview_small = 'public/'.$path_preview_small;
        

        Development::create([
            'name' => $request->name,
            'description' => $request->description
        ]);
        DB::table('development_preview')->insert([
            'development_id' => DB::table('developments')->max('id'),
            'type' => 'big',
            'path' => str_ireplace('storage', 'public/storage', $path_preview_big)
        ]);
        DB::table('development_preview')->insert([
            'development_id' => DB::table('developments')->max('id'),
            'type' => 'small',
            'path' => $path_preview_small
        ]);

        // images_development
        foreach ($request->file('images_development') as $file) {
            $path1 = $file->store('public');
            $path1 = str_ireplace('public', 'public/storage', $path1);
            DB::table('development_images')->insert([
                'development_id' => DB::table('developments')->max('id'),
                'development_image' => $path1
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
        DB::table('development_preview')->where('development_id', $request->id)->delete();

        // добавление новой картинки в двух версиях
        $nameImage = Str::random(20);
        $extensionImage = $request->file('preview_development')->getClientOriginalExtension();
        $path_section = 'development';
        $path_preview_big = $request->file('preview_development')->storeAs('public/'.$path_section.'/big', $nameImage.'.'.$extensionImage);
        $path_preview_big = str_ireplace('public', 'storage', $path_preview_big);
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(500, 300)->save($path_preview_small, 70);
        $path_preview_small = 'public/'.$path_preview_small;
        
        // добавление записей в бд
        DB::table('development_preview')->insert([
            'development_id' => $request->id,
            'type' => 'big',
            'path' => str_ireplace('storage', 'public/storage', $path_preview_big)
        ]);
        DB::table('development_preview')->insert([
            'development_id' => $request->id,
            'type' => 'small',
            'path' => $path_preview_small
        ]);
        return redirect()->back();
    }
    public function add_development_image(Request $request)
    {
        $request->validate([
            'images_development.*' => 'required|image'
        ]);

        // images_development
        foreach ($request->file('images_development') as $file) {
            $path = $file->store('public');
            $path = str_ireplace('public', 'public/storage', $path);
            DB::table('development_images')->insert([
                'development_id' => $request->development_id,
                'development_image' => $path
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
        $image_path = str_ireplace('public/storage', 'public', $request->development_image);
        Storage::delete($image_path);

        DB::table('development_images')->where('development_image', $request->development_image)->delete();
        return redirect()->back();
    }
}
