<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FastenersCategories extends Model
{
    protected $table = 'fasteners_categories';
    protected $fillable = [
        'category_id',
        'parent_id',
        'name',
        'level',
        'slug'
    ];

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id')->with('children');
    }

}
