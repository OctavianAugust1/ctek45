<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use Illuminate\Support\Str;
use App\Http\Requests\AuthValidation;

class AuthController extends Controller
{
    public function signup(AuthValidation $request)
    {
        $user = User::create([
            'login' => $request->login,
            'password' => $request->password,
            'api_token' => Str::random(80),
        ]);
        if (User::where('login', $user->login)->first()) {
            return response()->json([
                'message' => 'success',
                'api_token' => $user->id,
            ]);
        } else {
            return response()->json([
                'message' => 'failed',
            ]);
        }
    }

    public function login_api(AuthValidation $request)
    {
        if (User::where('login', $request->login)->first()) {
            return response()->json([
                'message' => 'success',
                'api_token' => User::where('login', $request->login)->value('api_token'),
            ]);
        } else {
            return response()->json([
                'message' => 'failed',
            ]);
        }
    }

    public function login(AuthValidation $request)
    {
        $user = User::where([
            ['login', $request->login],
            ['password', $request->password]
        ])->first();

        if ($user) {
            // Auth::guard('web')->login($user, true);
            Auth::login($user, true);
            return redirect()->route('index');
        } else return redirect()->back();
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->back();
    }
}
