<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });


Route::get('/', function(){
    return view('welcome');
});

Route::get('/image/untagged', 'LinksController@get_first_untagged');
Route::get('/image/{tag}', 'LinksController@tag_image');

Route::get('/test', function(){
    return view('tagger');
});


// Route::get('/', 'PagesController@about');