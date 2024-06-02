<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;

Route::get('/', HomeController::class);


Route::get('/actividades', [PostController::class, 'index']);
Route::get('/piano', [PostController::class, 'piano']);
Route::get('/piano-nivel2', [PostController::class, 'piano_nivel2']);
Route::get('/piano-juego', [PostController::class, 'piano_juego']);
Route::get('/editor-notas', [PostController::class, 'editor']);

Route::get('/actividades/practica1', [PostController::class, 'practica1']);

