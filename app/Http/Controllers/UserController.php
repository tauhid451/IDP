<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

class UserController extends Controller
{

  public function createUser(Request $req)
  {
    $pass = Hash::make($req->password);

    $u = new User;
    $u->name = $req->name;
    $u->email = $req->email;
    $u->role = "user";
    $u->password = $pass;
    $u->gun_id = $req->gunNo;
    $u->rfid_id = $req->rfid;
    $u->soldier_id = $req->soldierNo;
    $u->save();

    return "success";

  }
}
