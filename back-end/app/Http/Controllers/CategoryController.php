<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\FastenersCategories;
use App\Models\Product;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public $categoryService;
    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }
    public function index($slug)
    {
        $categoryId = FastenersCategories::where('slug', $slug)->value('category_id');

        $categorySelectedMenu = $this->categoryService->getCategoryMenuTree($categoryId);

        $categoryAllId = FastenersCategories::find($categoryId)->getAllMenuId();

        $products = Product::whereHas('categories', function ($q) use ($categoryAllId) {
            $q -> whereIn('fasteners_categories.category_id', $categoryAllId);
        })->get();

        return response()->json([
            'categorySelectedMenu' => CategoryResource::collection($categorySelectedMenu),
            'products' => $products
        ]);

    }
}
