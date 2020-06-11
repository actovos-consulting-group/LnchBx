<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>LNCHBX</title>
        <link rel="shortcut icon" href="{{ asset('favicon.png') }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.6.0/modern-normalize.min.css">
    </head>
    <body>
    <?php
    $user = Auth::user();
    $configVars = [
        "APP_ENV" => env('APP_ENV'),
        "FOURSQUARE_CLIENT_SECRET" => env('FOURSQUARE_CLIENT_SECRET'),
        "FOURSQUARE_CLIENT_ID" => env('FOURSQUARE_CLIENT_ID'),
        "FOURSQUARE_URL" => env('FOURSQUARE_URL'),
        "GOOGLE_CLIENT_ID" => env('GOOGLE_CLIENT_ID')
    ];
    ?>
        <div id="root" data-auth='@json($user)' data-config='@json($configVars)'></div>
        <script src="{{ hotAsset('main.js') }}" defer></script>
    </body>
</html>
