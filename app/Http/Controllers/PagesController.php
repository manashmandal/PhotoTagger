<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function about()
    {
        $name = "Manash";
        return view('pages.about')->with('name', $name);
    }
}
