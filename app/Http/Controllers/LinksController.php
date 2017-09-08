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
            'is_female' => ((bool) Input::get('female')),
            'is_valid' => ((bool) Input::get('valid'))
        ];

        $image = Links::find((int) $image_id);

        $image->is_tagged = $data['is_tagged'];
        $image->is_male = $data['is_male'];
        $image->is_female = $data['is_female'];
        $image->is_valid = $data['is_valid'];

        $image->save();

        $status = ['status' => 'saved'];

        return $status;

        //dd($image->toArray());

        
        // $image_url = Links::get($image_id);
        // dd(Links::find((int) $image_id)->toArray());
        // dd($image_url);
        // return Input::get('id');
        // return $image;
    }


    public function get_first_untagged()
    {
        $untagged = Links::where('is_tagged', 0)->take(1)->get();
        return $untagged;
    }

    // Gets image count 
    public function get_image_count()
    {
        return Links::all()->count();
    }

    // Get image by id 
    public function get_image_by_id()
    {
        $id = ((int) Input::get('id'));
        $image = Links::where('id', $id)->get()->toArray();
        return $image;
    }
}
