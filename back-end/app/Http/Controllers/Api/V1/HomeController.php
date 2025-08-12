<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\MarkaAutoResource;
use App\Models\FastenersCategories;
use App\Models\MarkaAuto;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(CategoryService $categoryService)
    {

        $categories = $categoryService->getCategoryMenuTree();

        $markaAutoAll = MarkaAuto::where('status', '=', '1')->get();
        return response()->json([
            'category' => CategoryResource::collection($categories),
            'markaAutoAll' => MarkaAutoResource::collection($markaAutoAll)
        ]);
    }
}
