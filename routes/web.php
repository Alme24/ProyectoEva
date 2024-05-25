<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;

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

Route::get('/', HomeController::class);


Route::get('/actividades', [PostController::class, 'index']);
Route::get('/piano', [PostController::class, 'piano']);
Route::get('/piano-nivel2', [PostController::class, 'piano_nivel2']);
Route::get('/actividades/practica1', [PostController::class, 'practica1']);

