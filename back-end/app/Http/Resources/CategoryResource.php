<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = [
            'id'        => $this->id,
            'name'      => $this->name,
            'level'     => $this->level,
            'parent_id' => $this->parent_id,
            'slug'      => $this->slug,
            'full_slug' => $this->full_slug,
        ];

        if ($this->children->isNotEmpty()) {
            $data['children'] = CategoryResource::collection($this->children);
        }

        return $data;
    }
}
