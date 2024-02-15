<?php

use App\Http\Controllers\TodoController;
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

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [TodoController::class, 'logout'])->name('logout');
    Route::post('/createOrUpdate', [TodoController::class, 'createOrUpdate'])->name('createOrUpdate');
    Route::get('/todos', [TodoController::class, 'todos'])->name('todos');
    Route::post('/deleteTodo/{id?}', [TodoController::class, 'deleteTodo'])->name('deleteTodo');
    Route::get('/editTodo/{id?}', [TodoController::class, 'editTodo'])->name('editTodo');
    Route::post('/statusChange/{id?}', [TodoController::class, 'statusChange'])->name('statusChange');
});

Route::post('/register', [TodoController::class, 'register'])->name('register');
Route::post('/login', [TodoController::class, 'login'])->name('login');