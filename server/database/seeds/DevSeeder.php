<?php

use App\Models\Category;
use App\Models\Friend;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DevSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('seeding ittybam users');
        $this->seedUsers();
        $this->seedFriends();
        $this->seedUserCategories();
    }

    public function seedUsers()
    {
        $devs = [
            ["name" => 'Daniel', "email" => 'dan@ittybam.com'],
            ["name" => 'Jaden', "email" => 'jaden@ittybam.com'],
            ["name" => 'Mat', "email" => 'mmorris@ittybam.com'],
            ["name" => 'Brayden', "email" => 'brobbins@ittybam.com']
        ];

        foreach ($devs as $dev) {
            User::create([
                'name' => $dev['name'],
                'email' => $dev['email'],
                'password' => env('BASE_PW'),
            ]);
        }
    }

    public function seedFriends()
    {
        $users = User::all();

        $users->each(function ($user) use ($users) {
            $filtered = $users->filter(function ($u) use ($user) {

                return ($user->id !==  $u->id);
            });

            $filtered->each(function ($f) use ($user) {

                return Friend::create([
                    'user_id' => $user->id,
                    'friend_id' => $f->id,
                    'invite_sent' => Carbon::now(),
                    'friends_since' => Carbon::now()
                ]);
            });
        });
    }

    public function seedUserCategories()
    {
        $categories = Category::select('id')->get();
        $users = User::all();

        $users->each(function ($user) use ($categories) {
            $randomCategories = $categories->random(20);
            $randomCategories->each(function ($category) use ($user) {
                DB::table('categories_user')->insert([
                    'category_id' => $category->id,
                    'user_id' => $user->id
                ]);
            });
        });
    }
}
