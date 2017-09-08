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
    return view('tagger');
});

Route::get('/image/untagged', 'LinksController@get_first_untagged');
Route::get('/image/count', 'LinksController@get_image_count');
Route::get('/image/get', 'LinksController@get_image_by_id');
Route::get('/image/{id}', 'LinksController@tag_image');



// Route::get('/', 'PagesController@about');