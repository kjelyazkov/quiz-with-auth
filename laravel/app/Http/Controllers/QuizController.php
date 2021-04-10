<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function questions($type = 'multiple')
    {
        return response()->json($type);
    }

    public function answer($type = 'multiple')
    {
        //
    }
}
