<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/admin/gun/{body_number?}','GunController@getOnebyBody');

Route::get('/admin/issue/{gun_category?}', 'IssueController@getOne');
Route::post('/admin/issue', 'IssueController@createOne');
Route::post('/admin/deposite', 'IssueController@depositeOne');

Route::get('/admin/rfid/{rfid?}', 'RfidController@checkOne');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
