<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\FastenersCategories;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(CategoryService $categoryService)
    {

        $categories = $categoryService->getCategoryTree(0);

        return response()->json(['category' => $categories]);
    }
}
