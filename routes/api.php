<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
    
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::middleware('auth:api')->group(function () {
	Route::post('change_contacts', 'UploadController@change_contacts')->name('change_contacts');
	Route::post('change_image', 'UploadController@change_image')->name('change_image');
	
	Route::post('about_us_change', 'UploadController@about_us_change')->name('about_us_change');
	
	Route::post('add_article', 'ArticleController@add_article')->name('add_article');
	Route::post('change_article', 'ArticleController@change_article')->name('change_article');
	Route::post('delete_article', 'ArticleController@delete_article')->name('delete_article');
	
	Route::post('up_rotate_category', 'UploadController@up_rotate_category')->name('up_rotate_category');
	Route::post('down_rotate_category', 'UploadController@down_rotate_category')->name('down_rotate_category');

	Route::post('add_category', 'UploadController@add_category')->name('add_category');
	Route::post('change_category_name', 'UploadController@change_category_name')->name('change_category_name');
	Route::post('delete_category', 'UploadController@delete_category')->name('delete_category');
	Route::post('change_main_page_inf', 'UploadController@change_main_page_inf')->name('change_main_page_inf');

	Route::post('upload_patent', 'PatentController@upload_patent')->name('upload_patent');
	Route::post('delete_patent', 'PatentController@delete_patent')->name('delete_patent');
	Route::post('change_patent', 'PatentController@change_patent')->name('change_patent');
	Route::post('change_information_patent', 'PatentController@change_information_patent')->name('change_information_patent');
	
	Route::post('upload_development', 'DevelopmentController@upload_development')->name('upload_development');
	Route::post('delete_development', 'DevelopmentController@delete_development')->name('delete_development');
	Route::post('change_development_preview_image', 'DevelopmentController@change_development_preview_image')->name('change_development_preview_image');
	Route::post('add_development_image', 'DevelopmentController@add_development_image')->name('add_development_image');
	Route::post('change_category', 'DevelopmentController@change_category')->name('change_category');
	Route::post('change_information_development', 'DevelopmentController@change_information_development')->name('change_information_development');
	Route::post('delete_image_development', 'DevelopmentController@delete_image_development')->name('delete_image_development');
});
Route::middleware('api')->group(function () {
	Route::post('signup', 'AuthController@signup');
	Route::post('login_api', 'AuthController@login_api');
	Route::post('mail', 'MailController@mail')->name('mail');
});