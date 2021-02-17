<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TripsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $trips = Trip::where('creator_id', $id)
            ->with('users')
            ->orderBy('created_at', 'ASC')
            ->get();

        return $trips;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tripData = DB::transaction(function () use ($request) {
            $newTrip = Trip::create([
                'creator_id' => $request->creator_id,
                'restaurant_id' => $request->restaurant_id,
                'restaurant_name' => $request->restaurant_name,
                'name' => $request->tripName
            ]);

            foreach ($request->friends as $friend) {
                DB::table('trips_users')->insert([
                    'trip_id' => $newTrip->id,
                    'user_id' => $friend['id']
                ]);
            }
            return $newTrip;
        });

        return $tripData;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
