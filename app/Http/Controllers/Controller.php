<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use Intervention\Image\Facades\Image;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function imageIntervention($path_section, $nameImage, $file, $height = 500, $width = 500, $devId = '')
    {
        if ($file->extension() == 'gif') {
            $image_small = $file->store('public/' . $path_section . '/small/' . $devId);
            $image_small = str_ireplace('public', 'storage', $image_small);
            Image::make($image_small)->fit($height, $width)->save($image_small, 100);
            $image_small = str_ireplace('storage', 'public/storage', $image_small);

            $image_big = $file->store('public/' . $path_section . '/big/' . $devId);
            $image_big = str_ireplace('public', 'public/storage', $image_big);
            return array($image_big, $image_small);
        }
        $pathImageBig = 'storage/' . $path_section . '/big/' . $devId . $nameImage . '.webp';
        $pathImageSmall = 'storage/' . $path_section . '/small/' . $devId . $nameImage . '_small.webp';
        Image::make($file)->save($pathImageBig, 80);
        Image::make($pathImageBig)->fit($height, $width)->save($pathImageSmall, 70);
        $pathImageBig = 'public/' . $pathImageBig;
        $pathImageSmall = 'public/' . $pathImageSmall;

        return array($pathImageBig, $pathImageSmall);
    }
}
