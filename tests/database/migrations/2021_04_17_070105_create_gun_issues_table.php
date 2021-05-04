<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateGunIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gun_issues', function (Blueprint $table) {
            $table->id();
            $table->string('gun_id');
            $table->string('user_id');
            $table->date('issue_time')->useCurrent();
            $table->date('deposite_time')->nullable();
            $table->string('purpose');
            $table->string('duty');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gun_issues');
    }
}
