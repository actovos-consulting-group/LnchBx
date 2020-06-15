<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InitialMigration extends Migration
{
    public function __construct()
    {
        $this->tables = [
            [
                'trips',
                function (Blueprint $table) {
                    $table->bigIncrements('id');
                    $table->unsignedInteger('creator_id');
                    $table->text('name');
                    $table->text('restaurant_name');
                    $table->text('restaurant_id');
                    $table->timestamps();

                    $table
                        ->foreign('creator_id')
                        ->references('id')
                        ->on('users')
                        ->onUpdate('cascade')
                        ->onDelete('cascade');
                }
            ],
            [
                'trips_users',
                function (Blueprint $table) {
                    $table->unsignedInteger('trip_id');
                    $table->unsignedInteger('user_id');

                    $table
                        ->foreign('trip_id')
                        ->references('id')
                        ->on('trips')
                        ->onUpdate('cascade')
                        ->onDelete('cascade');

                    $table
                        ->foreign('user_id')
                        ->references('id')
                        ->on('users')
                        ->onUpdate('cascade')
                        ->onDelete('cascade');

                    $table->timestamps();
                }
            ],

            [
                'categories',
                function (Blueprint $table) {
                    $table->bigIncrements('id');
                    $table->text('api_id');
                    $table->text('name');
                    $table->text('pluralName');
                    $table->text('shortName');
                    $table->text('icon');
                    $table->timestamps();
                }
            ],

            [
                'category_user',
                function (Blueprint $table) {
                    $table->unsignedInteger('category_id');
                    $table->unsignedInteger('user_id');

                    $table
                        ->foreign('category_id')
                        ->references('id')
                        ->on('categories')
                        ->onUpdate('cascade')
                        ->onDelete('cascade');

                    $table
                        ->foreign('user_id')
                        ->references('id')
                        ->on('users')
                        ->onUpdate('cascade')
                        ->onDelete('cascade');

                    $table->timestamps();
                }
            ],

            [
                'friends',
                function (Blueprint $table) {
                    $table->bigIncrements('id');
                    $table->unsignedInteger('user_id');
                    $table->unsignedInteger('friend_id');
                    $table->timestamp('invite_sent');
                    $table->timestamp('friends_since');

                    $table
                        ->foreign('user_id')
                        ->references('id')
                        ->on('users')
                        ->onUpdate('cascade')
                        ->onDelete('cascade');

                    $table
                        ->foreign('friend_id')
                        ->references('id')
                        ->on('users')
                        ->onUpdate('cascade')
                        ->onDelete('cascade');

                    $table->timestamps();
                }
            ]
        ];
    }
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        foreach ($this->tables as $table) {
            Schema::create($table[0], $table[1]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        foreach (array_reverse($this->tables) as $table) {
            Schema::dropIfExists($table[0]);
        }
    }
}
