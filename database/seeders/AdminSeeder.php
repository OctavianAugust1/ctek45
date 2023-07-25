<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (env('APP_ENV') === 'local') {
            $user = User::factory()->create([
                'login' => 'admin',
                'password' => bcrypt('admin'),
            ]);
            $permission = Permission::create(['name' => 'access_admin_panel']);
            $user->givePermissionTo($permission);
        }
    }
}
