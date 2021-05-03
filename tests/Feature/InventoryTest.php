<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InventoryTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetSmgDataFromInventory()
    {
        $response = $this->get("/api/admin/issue/smg");

        $response->assertStatus(200);
    }
    public function testGetPistolDataFromInventory(){
        
        $response = $this->get("/api/admin/issue/pistol");

        $response->assertStatus(200);
    }
}
