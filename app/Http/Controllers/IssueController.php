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
            return response('no user RFID found', 404);
        }
        
        $issued = DB::table('gun_issues')->where([['user_id', '=', $user->id],['deposite_time',null]])->first();

        if($issued != null) {
            return response("Gun already Issed", 404);
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
    public function depositeOne(Request $request) {
        $data = $request->validate([
            'rfid' => 'required',
        ]);

        $user = DB::table('users')->where('rfid_id', '=', $data['rfid'])->first();
        if($user == null) {
            return response('no user RFID found', 404);
        }
        
        $issued = DB::table('gun_issues')->where('user_id', '=', $user->id)->first();

        if($issued == null) {
            return response("No Gun is Issed", 404);
        }

        $issued = DB::table('gun_issues')->where('user_id', '=', $user->id)->update([
          "deposite_time" => new DateTime('now')
        ]);
        
        $issued = DB::table('gun_issues')->where('user_id', '=', $user->id)->first();

        return response()->json([
          "depo" => $issued->deposite_time,
        ]);

    }
    public function report(Request $request) {
        $data = $request->validate([
                'gun_id' => 'required',
                'fromDate' => 'required',
                'toDate' => 'required'
            ]);
        
        // $fetched = DB::table('users')->join('guns', 'guns.id', '=', 'users.gun_id')->where('guns.id', '=', $data['gun_id'])->first();
        $fetched = DB::table('users')
                        ->join('guns', 'guns.id', '=', 'users.gun_id')
                        ->where('gun_id', '=', $data['gun_id'])->first();

        $pistolCount = DB::table('guns')
                            ->where([['kote_id', '=', $fetched->kote_id], ['gun_category', '=', 'pistol']])
                            ->get()->count();
        $lmgCount = DB::table('guns')
                            ->where([['kote_id', '=', $fetched->kote_id], ['gun_category', '=', 'lmg']])
                            ->get()->count();
        $smgCount = DB::table('guns')
                            ->where([['kote_id', '=', $fetched->kote_id], ['gun_category', '=', 'smg']])
                            ->get()->count();
        $mgCount = DB::table('guns')
                            ->where([['kote_id', '=', $fetched->kote_id], ['gun_category', '=', 'mg']])
                            ->get()->count();
        $rifleCount = DB::table('guns')
                            ->where([['kote_id', '=', $fetched->kote_id], ['gun_category', '=', 'rifle']])
                            ->get()->count();

        $gunIds = DB::table('guns')
                            ->where([['kote_id', '=', $fetched->kote_id]])->select('id')->get();

        $gunIdArray = array();
        foreach($gunIds as $gunId) {
            // echo $gunId->id;
            array_push($gunIdArray, $gunId->id);
        }
        
        $rifleOnDuty = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on duty'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'rifle']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        $rifleOnStation = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on station'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'rifle']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        
        // pistol
        $pistolOnDuty = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on duty'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'pistol']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        $pistolOnStation = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on station'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'pistol']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        // smg
        $smgOnDuty = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on duty'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'smg']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        $smgOnStation = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on station'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'smg']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        // lmg
        $lmgOnDuty = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on duty'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'lmg']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        $lmgOnStation = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on station'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'lmg']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        // mg
        $mgOnDuty = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on duty'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'lmg']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();
        $mgOnStation = DB::table('gun_issues')
                        ->join('guns', 'guns.id', '=', 'gun_issues.gun_id')
                        ->where([['duty', '=', 'on station'], ['deposite_time', '=', NULL], ['guns.gun_category', '=', 'lmg']])
                        ->whereBetween('issue_time', [$data['fromDate'], $data['toDate']])
                        ->whereIn('gun_id', $gunIdArray)
                        ->get()->count();

        // echo $rifleOnDuty;
        // echo $rifleOnStation;
        // echo $gunIds;
        // var_dump($gunIdArray);

        $countOnDuty = DB::table('gun_issues')->whereBetween('issue_time', ['2021-05-30', '2021-05-30'])->where('duty', '=', 'on duty')->get()->count();
        $countOnStation = DB::table('gun_issues')->whereBetween('issue_time', ['2021-05-30', '2021-05-30'])->where('duty', '=', 'on station')->get()->count();

        // echo $countOnDuty;
        // echo $countOnStation;
        // return 'hi';
        return response()->json([
            "rifleCount" => $rifleCount,
            "pistolCount" => $pistolCount,
            "lmgCount" => $lmgCount,
            "smgCount" => $smgCount,
            "mgCount" => $mgCount,
           "rifleOnDuty" => $rifleOnDuty,
           "rifleOnStation" => $rifleOnStation,
           "smgOnDuty" => $smgOnDuty,
            "smgOnStation" => $smgOnStation,
            "mgOnDuty" => $mgOnDuty,
            "mgOnStation" => $mgOnStation,
           "pistolOnDuty" => $pistolOnDuty,
            "pistolOnStation" => $pistolOnStation,
           "lmgOnDuty" => $lmgOnDuty,
            "lmgOnStation" => $lmgOnStation,
        ]);
    }
    public function userInfo(Request $request, $userId = null) {
        if($userId == null) {
            return response('please pass userId as parameter', 401);
        }
        $user = DB::table('users')->where('id', '=', $userId)->first();
        return $user->gun_id;
    }
}
