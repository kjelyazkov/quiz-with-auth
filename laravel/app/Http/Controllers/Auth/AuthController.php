<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ApiResponser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use ApiResponser;
    
    public function login(Request $request)
    {
        $validData = $request->validate([
            'username'  => 'required|string',
            'password'  => 'required|string|min:6'
        ]);

        if(!Auth::attempt($validData)) {
            return $this->error('Credentials not match', 401);
        }

        return $this->success([
            'token' => auth()->user()->createToken('Api Token')->plainTextToken
        ]);
    }

    public function register(Request $request)
    {
        $validData = $request->validate([
            'username'  => 'required|string|unique:users',
            'email'     => 'required|string|email|unique:users',
            'password'  => 'required|string|min:6|confirmed'
        ]);

        $user = User::create([
            'username'  => $validData['username'],
            'email'     => $validData['email'],
            'password'  => Hash::make($validData['password'])
        ]);

        return $this->success([
            'token' => $user->createToken('API Token')->plainTextToken
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
    }

    public function profile()
    {
        return response()->json(auth()->user());
    }
}
