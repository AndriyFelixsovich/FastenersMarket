<?php

namespace App\Services;

use App\Models\FastenersCategories;

class CategoryService
{
    public function getCategoryMenuTree($parent_id = 0)
    {
        return FastenersCategories::where('parent_id',$parent_id)
            ->with('children')
            ->get();
    }

}
