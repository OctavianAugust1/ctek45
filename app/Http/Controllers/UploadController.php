<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Patent;
use App\Development;
use App\Http\Requests\PatentValidation;
use App\Http\Requests\DevelopmentValidation;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function upload_patent(PatentValidation $request)
    {
        $path_section = 'patent';
        $nameImage = Str::random(20);
        $extensionImage = $request->file('image_patent')->extension();

        $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'_small.webp';
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($request->file('image_patent'))->save($path_preview_big, 80);
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(350, 500)->save($path_preview_small, 70);
        $path_preview_big = 'public/'.$path_preview_big;
        $path_preview_small = 'public/'.$path_preview_small;


        $patent = Patent::create([
            'name' => $request->name
        ]);
        $maxId = DB::table('patents')->max('id');
        DB::table('patent_preview')->insert([
            ['patent_id' => $maxId, 'type' => 'big', 'path' => $path_preview_big],
            ['patent_id' => $maxId, 'type' => 'small', 'path' => $path_preview_small]
        ]);
        // return redirect()->back();
        return response()->json([
			'message' => 'success',
			'patent' => [
				'id' => $patent->id,
				'name' => $patent->name,
				'patent_preview_small' => DB::table('patent_preview')->where([['patent_id', $patent->id], ['type', 'small']])->pluck('path')->first(),
				'patent_preview_big' => DB::table('patent_preview')->where([['patent_id', $patent->id], ['type', 'big']])->pluck('path')->first(),
			]
		]);
    }
    public function delete_patent(Request $request)
    {
		$request->validate([
			'patent_id' => 'required|integer',
		]);
        $images = DB::table('patent_preview')->where('patent_id', $request->patent_id)->get();
        foreach ($images as $image) {
            $image_path = str_ireplace('public/storage', 'public', $image->path);
            Storage::delete($image_path);
        }
        DB::table('patent_preview')->where('patent_id', $request->patent_id)->delete();

        DB::table('patents')->where('id', $request->patent_id)->delete();
        // return redirect()->back();
        return response()->json([
			'message' => 'success',
		]);
    }
    public function change_patent(Request $request)
    {
        $request->validate([
            'image_patent' => 'required|image'
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
        \Intervention\Image\Facades\Image::make($request->file('image_patent'))->save($path_preview_big, 80);
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(350, 500)->save($path_preview_small, 70);
        $path_preview_big = 'public/'.$path_preview_big;
        $path_preview_small = 'public/'.$path_preview_small;


        DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'big']])->update(['path' => $path_preview_big]);
        DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'small']])->update(['path' => $path_preview_small]);
        // return redirect()->back();
        return response()->json([
			'message' => 'success',
			'patent' => [
				'patent_preview_big' => DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'big']])->pluck('path')->first(),
				'patent_preview_small' => DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'small']])->pluck('path')->first(),
			]
		]);
    }
    public function change_information_patent(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);
        DB::table('patents')->where('id', $request->id)->update(['name' => $request->name]);
        // return redirect()->back();
        return response()->json([
			'message' => 'success',
			'patent' => [
				'id' => $request->id,
				'name' => DB::table('patents')->where('id', $request->id)->pluck('name')->first(),
			]
		]);
    }

    public function upload_development(DevelopmentValidation $request)
    {
        $path_section = 'development';
        $nameImage = Str::random(20);
        $extensionImage = $request->file('image_development')->extension();

        $path_preview_big = 'storage/'.$path_section.'/big/'.$nameImage.'.webp';
        $path_preview_small = 'storage/'.$path_section.'/small/'.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($request->file('image_development'))->save($path_preview_big, 80);
        \Intervention\Image\Facades\Image::make($path_preview_big)->fit(500, 300)->save($path_preview_small, 70);
        $path_preview_big = str_ireplace('storage', 'public/storage', $path_preview_big);
        $path_preview_small = 'public/'.$path_preview_small;

		if ($request->description) $description = $request->description;
		else $description = '';
		
        $dev = Development::create([
            'name' => $request->name,
            'description' => $description,
            'category' => $request->category,
        ]);
        $devId = $dev->id;
        DB::table('development_preview')->insert([
            ['development_id' => $devId, 'type' => 'big', 'path' => $path_preview_big],
            ['development_id' => $devId, 'type' => 'small', 'path' => $path_preview_small]
        ]);

        // images_development
		if ($request->hasFile('images_development')) {
			foreach ($request->file('images_development') as $file) {
				$path_section = 'development_images';
				$nameImage = Str::random(20);
				$extensionImage = $file->extension();
	
				$path_image_big = 'storage/'.$path_section.'/big/'.$devId.'/'.$nameImage.'.webp';
				$path_image_small = 'storage/'.$path_section.'/small/'.$devId.'/'.$nameImage.'_small.webp';
				Storage::makeDirectory('public/'.$path_section.'/big/'.$devId.'/');
				Storage::makeDirectory('public/'.$path_section.'/small/'.$devId.'/');
				\Intervention\Image\Facades\Image::make($file)->save($path_image_big, 80);
				\Intervention\Image\Facades\Image::make($path_image_big)->fit(300, 200)->save($path_image_small, 70);
				$path_image_big = 'public/'.$path_image_big;
				$path_image_small = 'public/'.$path_image_small;
	
				DB::table('development_images')->insert([
					['development_id' => $devId, 'type' => 'small', 'path' => $path_image_small],
					['development_id' => $devId, 'type' => 'big', 'path' => $path_image_big]
				]);
			}
		}

        // return redirect()->back();
        return response()->json([
			'message' => 'success',
			'development' => [
				'id' => $devId,
				'name' => $request->name,
				'categories' => Development::distinct()->pluck('category'),
				'category' => $request->category,
				'development_preview_small' => DB::table('development_preview')->where([['development_id', $devId], ['type', 'small']])->pluck('path')->first(),
				'development_preview_big' => DB::table('development_preview')->where([['development_id', $devId], ['type', 'big']])->pluck('path')->first(),
			]
		]);
    }
	public function change_category(Request $request)
	{
		$request->validate([
			'id' => 'required|integer',
			'category' => 'required|string|max:255',
		]);

		Development::where('id', $request->id)->update(['category' => $request->category]);

		return response()->json([
			'message' => 'success'
		]);
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
        // return redirect()->route('developments');
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
        // return redirect()->back();
        return response()->json([
			'message' => 'success',
			'development' => [
				'id' => $request->id,
				'development_preview_big' => DB::table('development_preview')->where([['development_id', $request->id], ['type', 'big']])->pluck('path')->first(),
				'development_preview_small' => DB::table('development_preview')->where([['development_id', $request->id], ['type', 'small']])->pluck('path')->first(),
			]
		]);
    }
    public function add_development_image(Request $request)
    {
        // return dd($request->file('images_development'));
        $request->validate([
			'development_id' => 'required|integer',
            'images_development' => 'required|array',
            'images_development.*' => 'required|image',
        ]);

        // images_development
        $development_id = $request->development_id;
		$dev_big_images_response = [];
		$dev_small_images_response = [];
        foreach ($request->file('images_development') as $file) {
            $path_section = 'development_images';
            $nameImage = Str::random(20);
            $extensionImage = $file->extension();

            $path_image_big = 'storage/'.$path_section.'/big/'.$development_id.'/'.$nameImage.'.webp';
            $path_image_small = 'storage/'.$path_section.'/small/'.$development_id.'/'.$nameImage.'_small.webp';
            Storage::makeDirectory('public/'.$path_section.'/big/'.$development_id.'/');
            Storage::makeDirectory('public/'.$path_section.'/small/'.$development_id.'/');
            \Intervention\Image\Facades\Image::make($file)->save($path_image_big, 80);
            \Intervention\Image\Facades\Image::make($path_image_big)->fit(300, 200)->save($path_image_small, 70);
            $path_image_big = 'public/'.$path_image_big;
            $path_image_small = 'public/'.$path_image_small;
            $dev_big_images_response[] = $path_image_big;
            $dev_small_images_response[] = $path_image_small;

            DB::table('development_images')->insert([
                ['development_id' => $development_id, 'type' => 'small', 'path' => $path_image_small],
                ['development_id' => $development_id, 'type' => 'big', 'path' => $path_image_big]
            ]);
        }
		$arr = [];
		for ($i=0; $i < count($dev_big_images_response); $i++) {
			$arr[$i + 1] = [
				'development_preview_big' => $dev_big_images_response[$i],
				'development_preview_small' => $dev_small_images_response[$i],
			];
		}
        // return redirect()->back();
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
        // return redirect()->back();
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
        $image_path = str_ireplace('public/storage', 'public', $request->path);
        Storage::delete($image_path);

        DB::table('development_images')->where('path', $request->path)->delete();
        // return redirect()->back();
        return response()->json([
			'message' => 'success',
		]);
    }
}
