<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Patent;
use App\Http\Requests\PatentValidation;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class PatentController extends Controller
{
    public function upload_patent(PatentValidation $request)
    {
        $path_section = 'patent';
        $nameImage = Str::random(20);
        list($pathImageBig, $pathImageSmall) = $this->imageIntervention(
            $path_section,
            $nameImage,
            $request->file('image_patent'),
            350,
            500
        );

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
                'patent_preview_small' => DB::table('patent_preview')->where([
                    ['patent_id', $patent->id],
                    ['type', 'small']
                ])->value('path'),
                'patent_preview_big' => DB::table('patent_preview')->where([
                    ['patent_id', $patent->id],
                    ['type', 'big']
                ])->value('path'),
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
        list($pathImageBig, $pathImageSmall) = $this->imageIntervention(
            $path_section,
            $nameImage,
            $request->file('image_patent'),
            350,
            500
        );

        DB::table('patent_preview')->where([
            ['patent_id', $request->id],
            ['type', 'big']
        ])->update(['path' => $pathImageBig]);
        DB::table('patent_preview')->where([
            ['patent_id', $request->id],
            ['type', 'small']
        ])->update(['path' => $pathImageSmall]);
        return response()->json([
            'message' => 'success',
            'patent' => [
                'patent_preview_big' => DB::table('patent_preview')->where([
                    ['patent_id', $request->id],
                    ['type', 'big']
                ])->value('path'),
                'patent_preview_small' => DB::table('patent_preview')->where([
                    ['patent_id', $request->id],
                    ['type', 'small']
                ])->value('path'),
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
}
