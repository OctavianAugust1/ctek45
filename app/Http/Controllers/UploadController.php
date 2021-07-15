<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Patent;
use App\Development;
use App\Category;
use App\Article;
use App\Http\Requests\PatentValidation;
use App\Http\Requests\DevelopmentValidation;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
	public function imageIntervention($path_section, $nameImage, $file, $height = 500, $width = 500, $devId = '')
	{
		if ($file->extension() == 'gif') {
			$image_small = $file->store('public/'.$path_section.'/small/'.$devId);
			$image_small = str_ireplace('public', 'storage', $image_small);
			\Intervention\Image\Facades\Image::make($image_small)->fit($height, $width)->save($image_small, 100);
			$image_small = str_ireplace('storage', 'public/storage', $image_small);

			$image_big = $file->store('public/'.$path_section.'/big/'.$devId);
			$image_big = str_ireplace('public', 'public/storage', $image_big);
			return array($image_big, $image_small);
		}
        $pathImageBig = 'storage/'.$path_section.'/big/'.$devId.$nameImage.'.webp';
        $pathImageSmall = 'storage/'.$path_section.'/small/'.$devId.$nameImage.'_small.webp';
        \Intervention\Image\Facades\Image::make($file)->save($pathImageBig, 80);
        \Intervention\Image\Facades\Image::make($pathImageBig)->fit($height, $width)->save($pathImageSmall, 70);
        $pathImageBig = 'public/'.$pathImageBig;
        $pathImageSmall = 'public/'.$pathImageSmall;

		return array($pathImageBig, $pathImageSmall);
	}

	// public function change_image(Request $request)
	// {
	// 	$request->validate([
	// 		'path' => 'required|string',
	// 		'image' => 'required|image',
	// 	]);
	// 	$nameImage = ;
	// 	$this->imageIntervention($request->path, $nameImage, $request->file);
	// 	return response()->json([
	// 		'message' => 'success',
	// 		'path' => $request->path,
	// 	]);
	// }

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
			'public/articles', $nameImage.'.webp'
		);
		$image = str_ireplace('public/articles', 'public/storage/articles', $image);
		return response()->json([
			'message' => 'success',
			'fileName' => $nameImage.'.webp',
			'uploaded' => 1,
			'url' => $image,
		]);
	}

    public function upload_patent(PatentValidation $request)
    {
        $path_section = 'patent';
        $nameImage = Str::random(20);
		list($pathImageBig, $pathImageSmall) = $this->imageIntervention($path_section, $nameImage, $request->file('image_patent'), 350, 500);

        $patent = Patent::create([
            'name' => $request->name
        ]);
        $maxId = DB::table('patents')->max('id');
        DB::table('patent_preview')->insert([
            ['patent_id' => $maxId, 'type' => 'big', 'path' => $pathImageBig],
            ['patent_id' => $maxId, 'type' => 'small', 'path' => $pathImageSmall]
        ]);
        return response()->json([
			'message' => 'success',
			'patent' => [
				'id' => $patent->id,
				'name' => $patent->name,
				'patent_preview_small' => DB::table('patent_preview')->where([['patent_id', $patent->id], ['type', 'small']])->value('path'),
				'patent_preview_big' => DB::table('patent_preview')->where([['patent_id', $patent->id], ['type', 'big']])->value('path'),
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
		list($pathImageBig, $pathImageSmall) = $this->imageIntervention($path_section, $nameImage, $request->file('image_patent'), 350, 500);

        DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'big']])->update(['path' => $pathImageBig]);
        DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'small']])->update(['path' => $pathImageSmall]);
        return response()->json([
			'message' => 'success',
			'patent' => [
				'patent_preview_big' => DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'big']])->value('path'),
				'patent_preview_small' => DB::table('patent_preview')->where([['patent_id', $request->id], ['type', 'small']])->value('path'),
			]
		]);
    }
    public function change_information_patent(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);
        DB::table('patents')->where('id', $request->id)->update(['name' => $request->name]);
        return response()->json([
			'message' => 'success',
			'patent' => [
				'id' => $request->id,
				'name' => DB::table('patents')->where('id', $request->id)->value('name'),
			]
		]);
    }

    public function upload_development(DevelopmentValidation $request)
    {
        $path_section = 'development';
        $nameImage = Str::random(20);
		list($pathImageBig, $pathImageSmall) = $this->imageIntervention($path_section, $nameImage, $request->file('image_development'), 500, 300);

		$category = Category::where('category', $request->category)>value('rotating_id');
		
        $dev = Development::create([
            'name' => $request->name,
            'description' => $description,
            'category' => $category,
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
				Storage::makeDirectory('public/'.$path_section.'/big/'.$devId.'/');
				Storage::makeDirectory('public/'.$path_section.'/small/'.$devId.'/');
				list($pathImageBig, $pathImageSmall) = $this->imageIntervention($path_section, $nameImage, $file, 300, 200, $devId.'/');
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
				'categories' => Development::distinct()->pluck('category'),
				'category' => $request->category,
				'development_preview_small' => DB::table('development_preview')->where([['development_id', $devId], ['type', 'small']])->value('path'),
				'development_preview_big' => DB::table('development_preview')->where([['development_id', $devId], ['type', 'big']])->value('path'),
			]
		]);
    }
	public function change_category(Request $request)
	{
		$request->validate([
			'id' => 'required|integer',
			'category' => 'required|string|max:255',
		]);

		$id = Category::where('category', $request->category)->value('id');
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
		list($pathImageBig, $pathImageSmall) = $this->imageIntervention($path_section, $nameImage, $request->file('preview_development'), 500, 300);

        // обновление записей в бд
        DB::table('development_preview')->where([['development_id', $request->id], ['type', 'big']])->update(['path' => $pathImageBig]);
        DB::table('development_preview')->where([['development_id', $request->id], ['type', 'small']])->update(['path' => $pathImageSmall]);
		
        return response()->json([
			'message' => 'success',
			'development' => [
				'id' => $request->id,
				'development_preview_big' => DB::table('development_preview')->where([['development_id', $request->id], ['type', 'big']])->value('path'),
				'development_preview_small' => DB::table('development_preview')->where([['development_id', $request->id], ['type', 'small']])->value('path'),
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
            Storage::makeDirectory('public/'.$path_section.'/big/'.$devId.'/');
            Storage::makeDirectory('public/'.$path_section.'/small/'.$devId.'/');
			list($pathImageBig, $pathImageSmall) = $this->imageIntervention($path_section, $nameImage, $file, 300, 200, $devId.'/');
			
            $dev_big_images_response[] = $pathImageBig;
            $dev_small_images_response[] = $pathImageSmall;

            DB::table('development_images')->insert([
                ['development_id' => $devId, 'type' => 'small', 'path' => $pathImageSmall],
                ['development_id' => $devId, 'type' => 'big', 'path' => $pathImageBig]
            ]);
        }
		$arr = [];
		for ($i=0; $i < count($dev_big_images_response); $i++) {
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
		$id = Category::where('rotating_id', '<', $request->rotating_id)->orderBy('rotating_id', 'desc')->value('rotating_id');
		$category_rotate = Category::where('rotating_id', $id)->value('category');
		Category::where('rotating_id', $id)->update(['rotating_id' => $request->rotating_id]);
		Category::where([['rotating_id', $request->rotating_id], ['category', $request->category]])->update(['rotating_id' => $id]);

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
		$id = Category::where('rotating_id', '>', $request->rotating_id)->orderBy('rotating_id', 'asc')->value('rotating_id');
		$category_rotate = Category::where('rotating_id', $id)->value('category');
		Category::where('rotating_id', $id)->update(['rotating_id' => $request->rotating_id]);
		Category::where([['rotating_id', $request->rotating_id], ['category', $request->category]])->update(['rotating_id' => $id]);

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
