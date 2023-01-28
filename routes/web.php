<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/example', function () {
    return Inertia\Inertia::render('Example');
})->name('example');


Route::get('/', function () {
    return Inertia\Inertia::render('Home');
})->name('home');

Route::get('/testimonial', function () {
    return Inertia\Inertia::render('Testimonial');
})->name('testimonial');

Route::get('/services', function () {
    return Inertia\Inertia::render('Services');
})->name('services');

Route::get('/contact', function () {
    return Inertia\Inertia::render('Contact');
})->name('contact');
