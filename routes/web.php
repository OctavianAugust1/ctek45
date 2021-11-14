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

Route::get('/', 'PagesController@index')->name('index');
//Route::get('sitemap.xml', 'SeoController@robots')->name('sitemap');
//Route::get('robots.txt', 'SeoController@robots')->name('robots');
Route::middleware('auth')->group(function () {
	Route::get('admin', 'PagesController@admin')->name('admin');
	Route::get('admin1', 'PagesController@admin1')->name('admin1');
});
Route::get('about_us', 'PagesController@about_us')->name('about_us');
Route::get('articles', 'PagesController@articles')->name('articles');
Route::get('article/{id}', 'PagesController@article')->where('id', '[\d]+');
Route::get('patents', 'PagesController@patents')->name('patents');
Route::get('feedback', 'PagesController@feedback')->name('feedback');

Route::middleware('guest:web')->get('login', 'PagesController@login')->name('login');
// Route::get('login', 'PagesController@login')->name('login');
Route::post('login', 'AuthController@login')->name('loginA');

Route::get('contacts', 'PagesController@contacts')->name('contacts');
Route::get('logout', 'AuthController@logout')->name('logout');

Route::get('developments', 'PagesController@developments')->name('developments');
Route::get('development/{id}', 'PagesController@development')->where('id', '[\d]+');

Route::post('upload_ckfinder_image', 'UploadController@upload_ckfinder_image')->name('upload_ckfinder_image');
