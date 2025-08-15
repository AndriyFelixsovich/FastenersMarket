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
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function childrenRecursive()
    {
        return $this->children()->with(['parent', 'childrenRecursive']);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_relation_fasteners_categories', 'category_id', 'product_id');
    }

    public function getAllMenuId()
    {
        $ids = [$this->id];

        foreach ($this->children as $child){
            $ids = array_merge($ids, $child->getAllMenuId());
        }
        return $ids;
    }



}
