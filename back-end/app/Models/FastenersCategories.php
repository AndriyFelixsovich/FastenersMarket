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

    public function getFullSlugAttribute()
    {
        if ($this->parent) {
            return $this->parent->full_slug . '/' . $this->slug;
        }
        return $this->slug;
    }

    public function parent()
    {
        return $this->belongsTo(FastenersCategories::class, 'parent_id');
    }

    public function childrenRecursive()
    {
        return $this->children()->with(['parent', 'childrenRecursive']);
    }

}
