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
	Route::post('upload_patent', 'UploadController@upload_patent')->name('upload_patent');
	// Route::post('delete_patent', 'UploadController@delete_patent')->name('delete_patent');
	// Route::post('change_patent', 'UploadController@change_patent')->name('change_patent');
	// Route::post('change_information_patent', 'UploadController@change_information_patent')->name('change_information_patent');
	
	// Route::post('upload_development', 'UploadController@upload_development')->name('upload_development');
	// Route::post('delete_development', 'UploadController@delete_development')->name('delete_development');
	// Route::post('change_development_preview_image', 'UploadController@change_development_preview_image')->name('change_development_preview_image');
	// Route::post('add_development_image', 'UploadController@add_development_image')->name('add_development_image');
	// Route::post('change_information_development', 'UploadController@change_information_development')->name('change_information_development');
	// Route::post('delete_image_development', 'UploadController@delete_image_development')->name('delete_image_development');
});
Route::middleware('api')->group(function () {
	Route::post('signup', 'AuthController@signup');
	Route::post('login_api', 'AuthController@login_api');
});