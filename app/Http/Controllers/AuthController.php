<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'login' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('login', $request->login)
            ->where('password', $request->password)
            ->first();
        if ($user) {
            Auth::guard('web')->login($user, true);
            return redirect()->route('index');
        } else {
            return redirect()->back();
        }
    }
    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->back();
    }
}
