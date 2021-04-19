<?php

namespace App\Http\Controllers;

use App\GunIssue;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IssueController extends Controller
{
    public function createOne(Request $request) {
        $gunIssue = new GunIssue;
        $data = $request->validate([
            'gun_id' => 'required',
            'rfid' => 'required',
            'purpose' => 'required',
            'duty' => 'required'
        ]);

        $user = DB::table('users')->where('rfid_id', '=', $data['rfid'])->first();
        if($user == null) {
            return response('no user RFID found', 401);
        }
        $user_id = $user->id;
        $gun_id = $user->gun_id;
        $gunIssue->user_id = $user_id;
        $gunIssue->issue_time = new DateTime('now');
        $gunIssue->gun_id = $gun_id;
        $gunIssue->purpose = $data['purpose'];
        $gunIssue->duty = $data['duty'];
        $gunIssue->save();

        return $gunIssue->getOriginal();
    }
    public function getOne(Request $request, $gun_category = null) {
        if($gun_category == null) {
            return response('please pass gun_category as parameter', 401);
        }
        $issues = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->join('users', 'users.id', '=', 'gun_issues.user_id')
                        ->where('guns.gun_category', '=', $gun_category)
                        ->select('issue_time', 'deposite_time', 'purpose', 'duty', 'gun_category', 'name')
                        ->get();
        return $issues;
    } 
}
