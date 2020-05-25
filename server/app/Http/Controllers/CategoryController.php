<?php

namespace App\Http\Controllers;

use App\Models\Category;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories()
    {


        $client_id = env('FOURSQUARE_CLIENT_ID');
        $secret = env('FOURSQUARE_CLIENT_SECRET');

        $url = 'https://api.foursquare.com/v2/venues/categories?client_id=' . $client_id . '&client_secret=' . $secret . '&v=20200501';

        $client = new Client();
        $request = $client->get($url);
        $response = $request->getBody();

        $data = json_decode($response);
        $foodCategories = $data->response->categories[3];

        // dd($foodCategories->categories[0]);

        foreach ($foodCategories->categories as $category) {
            $newCategory = Category::create([
                'api_id' => $category->id,
                'name' => $category->name,
                'pluralName' => $category->pluralName,
                'shortName' => $category->shortName,
                'icon' => $category->icon->prefix . 'bg_32' . $category->icon->suffix,
            ]);
        }

        dd('done');
    }
}
