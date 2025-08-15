<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $fillable = [
        'id',
        'name',
        'origin_number',
        'image_path',
        'description',
        'price',
        'quantity',
        'is_published'
    ];

    public function categories()
    {
        return $this->belongsToMany(FastenersCategories::class, 'product_relation_fasteners_categories', 'product_id', 'category_id');
    }
}
