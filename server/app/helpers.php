<?php
// Global helper functions. Don't abuse this.
use App\Services\AssetMap;

// This exists because Laravel's `mix()` doesn't play nicely.
if (!function_exists('hotAsset')) {
    function hotAsset($entryName)
    {
        return app(AssetMap::class)->getAssetPath($entryName);
    }
}
