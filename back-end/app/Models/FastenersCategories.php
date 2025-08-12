<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FastenersCategories extends Model
{
    protected $fillable = [
        'category_id',
        'parent_id',
        'name',
        'level'
    ];

}
