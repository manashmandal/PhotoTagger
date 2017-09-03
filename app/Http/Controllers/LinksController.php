<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Links;

class LinksController extends Controller
{
    //
    public function tag_image($image_id)
    {
        $data = [
            'is_tagged' => ((bool) Input::get('tagged')),
            'is_male' => ((bool) Input::get('male')),
            'is_female' => ((bool) Input::get('female'))
        ];

        $image = Links::find((int) $image_id);

        $image->is_tagged = $data['is_tagged'];
        $image->is_male = $data['is_male'];
        $image->is_female = $data['is_female'];

        $image->save();

        // dd($image->toArray());

        
        // // $image_url = Links::get($image_id);
        // // dd(Links::find((int) $image_id)->toArray());
        // // dd($image_url);
        // // return Input::get('id');
        // // return $image;
    }


    public function get_first_untagged()
    {
        $untagged = Links::where('is_tagged', 0)->take(1)->get();
        return $untagged;
    }
}
