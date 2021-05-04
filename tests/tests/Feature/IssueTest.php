<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class IssueTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGunIssueSuccessful()
    {
        $response = $this->postJson("/api/admin/issue", [
            'gun_id' => '1',
            'rfid' => '1',
            'purpose' => 'firing',
            'duty' => 'on duty'
        ]);

        $response->assertStatus(200);
    }

    public function testGunDepositeSuccessful() {

        $response = $this->postJson("/api/admin/deposite", [
            'rfid' => '1',
        ]);

        $response->assertStatus(200);

    }
}
