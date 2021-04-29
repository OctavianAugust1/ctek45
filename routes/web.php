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
Route::get('about_us', 'PagesController@about_us')->name('about_us');
Route::get('patents', 'PagesController@patents')->name('patents');
Route::get('feedback', 'PagesController@feedback')->name('feedback');

Route::post('mail', 'MailController@mail')->name('mail');

Route::middleware('guest:web')->get('login', 'PagesController@login')->name('login');
// Route::get('login', 'PagesController@login')->name('login');
Route::post('login', 'AuthController@login')->name('loginA');

Route::get('contacts', 'PagesController@contacts')->name('contacts');
Route::get('logout', 'AuthController@logout')->name('logout');

Route::get('developments', 'PagesController@developments')->name('developments');
Route::get('development/{id}', 'PagesController@development');

Route::post('upload_patent', 'UploadController@upload_patent')->name('upload_patent');
Route::post('delete_patent', 'UploadController@delete_patent')->name('delete_patent');
Route::post('change_patent', 'UploadController@change_patent')->name('change_patent');
Route::post('change_information_patent', 'UploadController@change_information_patent')->name('change_information_patent');

Route::post('upload_development', 'UploadController@upload_development')->name('upload_development');
Route::post('delete_development', 'UploadController@delete_development')->name('delete_development');
Route::post('change_development_preview_image', 'UploadController@change_development_preview_image')->name('change_development_preview_image');
Route::post('add_development_image', 'UploadController@add_development_image')->name('add_development_image');
Route::post('change_information_development', 'UploadController@change_information_development')->name('change_information_development');
Route::post('delete_image_development', 'UploadController@delete_image_development')->name('delete_image_development');
