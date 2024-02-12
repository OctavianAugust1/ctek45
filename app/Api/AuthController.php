<?php

namespace App\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        if ($request->validated()) {
            $user = User::where('name', $request->get('name'))->first();
            if ($user) {
                Auth::login($user);
                $token = $user->createToken('remember_token');
                return response()->json([
                    'token' => $token->plainTextToken,
                ]);
            }
        }
        return redirect()->back();
    }
    public function logout()
    {
        Auth::logout();
    }
}
