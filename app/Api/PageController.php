<?php

namespace App\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PageResource;
use App\Models\Page;
use Illuminate\Http\Resources\Json\JsonResource;

class PageController extends Controller
{
    public function getPageInfo(string $pageTitle): ?JsonResource
    {
        if (Page::where('title', $pageTitle)->count()) {
            return new PageResource(Page::where('title', $pageTitle)->first());
        } else return null;
    }
}
