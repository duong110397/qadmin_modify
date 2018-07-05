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

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', 'Frontend\HomepageController@index');
Route::get('/trang-chu', 'Frontend\HomepageController@index');

Route::get('/gop-y', 'Frontend\FeedbackController@index')->name('feedback.index');
Route::post('feedback', 'Frontend\FeedbackController@store')->name('feedback.store');
