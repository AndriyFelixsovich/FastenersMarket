<?php

use App\Http\Controllers\Api\V1\HomeController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    Route::get('/home', [HomeController::class, 'index']);
});

Route::prefix('v1')->group(function (){
    Route::get('/getCategory/{slug}', [CategoryController::class, 'index']);
});
