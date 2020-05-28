<?php

use App\Models\Category;
use App\Models\Friend;
use App\Models\User;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
        $this->seedCategories();
        $this->seedUserCategories();
    }

    public function seedUsers()
    {
        $devs = [
            [
                "name" => 'Daniel',
                "email" => 'dan@ittybam.com',
                "image" =>
                    'https://lnchbx-demo.s3-us-west-2.amazonaws.com/daniel.jpg'
            ],
            [
                "name" => 'Jaden',
                "email" => 'jaden@ittybam.com',
                "image" =>
                    'https://lnchbx-demo.s3-us-west-2.amazonaws.com/jaden.jpg'
            ],
            [
                "name" => 'Mat',
                "email" => 'mmorris@ittybam.com',
                "image" =>
                    'https://lnchbx-demo.s3-us-west-2.amazonaws.com/mat.jpg'
            ],
            [
                "name" => 'Brayden',
                "email" => 'brobbins@ittybam.com',
                "image" =>
                    'https://lnchbx-demo.s3-us-west-2.amazonaws.com/brayden.jpg'
            ],
            [
                "name" => 'Tati',
                "email" => 'tatianna@actovosgroup.com',
                "image" =>
                    'https://lnchbx-demo.s3-us-west-2.amazonaws.com/tati.jpg'
            ]
        ];

        foreach ($devs as $dev) {
            User::create([
                'name' => $dev['name'],
                'email' => $dev['email'],
                'image' => $dev['image'],
                'password' => Hash::make(env('BASE_PW'))
            ]);
        }
    }

    public function seedFriends()
    {
        $users = User::all();

        $users->each(function ($user) use ($users) {
            $filtered = $users->filter(function ($u) use ($user) {
                return $user->id !== $u->id;
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

    public function seedCategories()
    {
        $client_id = env('FOURSQUARE_CLIENT_ID');
        $secret = env('FOURSQUARE_CLIENT_SECRET');

        $url =
            'https://api.foursquare.com/v2/venues/categories?client_id=' .
            $client_id .
            '&client_secret=' .
            $secret .
            '&v=20200501';

        $client = new Client();
        $request = $client->get($url);
        $response = $request->getBody();

        $data = json_decode($response);
        $foodCategories = $data->response->categories[3];

        foreach ($foodCategories->categories as $category) {
            $newCategory = Category::create([
                'api_id' => $category->id,
                'name' => $category->name,
                'pluralName' => $category->pluralName,
                'shortName' => $category->shortName,
                'icon' =>
                    $category->icon->prefix . 'bg_32' . $category->icon->suffix
            ]);
        }
    }

    public function seedUserCategories()
    {
        $categories = Category::select('id')->get();
        $users = User::all();

        $users->each(function ($user) use ($categories) {
            $randomCategories = $categories->random(50);
            $randomCategories->each(function ($category) use ($user) {
                DB::table('category_user')->insert([
                    'category_id' => $category->id,
                    'user_id' => $user->id
                ]);
            });
        });
    }
}
