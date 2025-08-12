<?php

namespace App\Services;

use App\Models\FastenersCategories;

class CategoryService
{
    public function getCategoryTree($parent_id)
    {
        $categories = FastenersCategories::where('parent_id', $parent_id)->get();

        if ($categories->isEmpty()) {
            return [];
        }

        return $categories->map(function ($category) {
            return [
                'id'          => $category->id,
                'name'        => $category->name,
                'level'       => $category->level,
                'parent_id'   => $category->parent_id,
                'children'    => $this->getCategoryTree($category->id)
            ];
        })->toArray();
    }

}
