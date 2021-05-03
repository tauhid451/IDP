<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RfidController extends Controller
{
    public function checkOne(Request $request, $rfid = null) {
        if($rfid == null) {
            return response('please pass rfid as parameter', 401);
        }

        $user = DB::table('users')->where('rfid_id', '=', $rfid)->first();
        if($user == null) {
            return response("no rfid found", 404);
        }
        
        $issued = DB::table('gun_issues')->where([['user_id', '=', $user->id],['deposite_time',null]])->first();

        if($issued != null) {
          return response()->json([
              "issued" => true,
              "body_number" => $user->gun_id,
              "name" => $user->name,
              "role" => $user->role,
              "email" => $user->email,
              "soldier_id" => $user->soldier_id,
          ]);
        }
        return response()->json([
          "issued" => false,
          "body_number" => $user->gun_id,
          "name" => $user->name,
          "role" => $user->role,
          "email" => $user->email,
          "soldier_id" => $user->soldier_id,
      ]);
    }
}
