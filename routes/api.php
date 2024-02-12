<?php

use App\Api\ApplicationSettingsController;
use App\Api\ArticleController;
use App\Api\AuthController;
use App\Api\DevelopmentController;
use App\Api\PageController;
use App\Api\PatentController;
use App\Api\DevelopmentsCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->prefix('api')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('isAuth', [ApplicationSettingsController::class, 'isAuth']);
    Route::get('isProduction', [ApplicationSettingsController::class, 'isProduction']);
    Route::get('page/{pageTitle}', [PageController::class, 'getPageInfo']);
    Route::get('article/read/{id?}', [ArticleController::class, 'read']);
    Route::get('patent/read/{id?}', [PatentController::class, 'read']);
    Route::get('development/read/{id?}', [DevelopmentController::class, 'read']);
    Route::get('developmentsCategories', [DevelopmentsCategoryController::class, 'read']);
});
