<?php

namespace App\Services;

use Illuminate\Support\HtmlString;

class AssetMap
{
    public $entryPoints = [];

    function __construct()
    {
        $json = file_get_contents('../storage/webpackManifest.json');
        if (!$json) {
            throw new \Exception(
                'Assets must be built! Missing storage/webpackManifest.json!'
            );
        }
        $this->entryPoints = json_decode($json, true);
    }

    function getAssetPath($entryName)
    {
        if (!isset($this->entryPoints[$entryName])) {
            throw new \Exception(
                "Entrypoint name doesn\'t exist! Requested '$entryName'"
            );
        }
        return $this->entryPoints[$entryName];
    }
}
