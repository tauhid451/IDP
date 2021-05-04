<?php

namespace App\Http\Controllers;

use App\Gun;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GunController extends Controller
{
    public function getOnebyBody(Request $request, $body_number = null) {
        if($body_number == null) {
            return response('please pass body_number as parameter', 401);
        }
        $gun = DB::table('guns')->where('body_no', '=', $body_number)->get();
        return response()->json($gun)->header('Content-Type', 'application/json');
    }
}
