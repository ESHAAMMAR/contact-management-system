<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

// Home route
Route::get('/', function () {
    return view('home');
});

// Resource route for contacts
Route::resource('contacts', ContactController::class);

