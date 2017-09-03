<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Links extends Model
{
    //
    protected $fillable = [
        'image_url',
        'is_tagged',
        'is_male',
        'is_female'
    ];
}
