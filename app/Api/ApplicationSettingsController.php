<?php

namespace App\Api;

use App;
use App\Http\Controllers\Controller;
use Auth;

class ApplicationSettingsController extends Controller
{
    public function isProduction()
    {
        return response()->json(App::environment('production'));
    }
    public function isAuth()
    {
        return response()->json(Auth::check());
    }
}
