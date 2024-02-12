<?php

namespace App\Http\Resources;

use App\Models\DevelopmentsCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Str;

class DevelopmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'category_id' => $this->category_id,
            'category' => $this->category->title,
            'name' => $this->name,
            'description' => $this->description,
            'pathBig' => $this->cover,
            'pathSmall' => Str::of($this->cover)
                ->replace('big', 'small')
                ->replace('.', '_small.'),
            'imagesSmall' => $this->whenLoaded('images', function () {
                return $this->images->pluck('path')->map(function ($image) {
                    return Str::of($image)
                        ->replace('big', 'small')
                        ->replace('.', '_small.')
                        ->prepend('/');
                });
            }),
            'imagesBig' => $this->whenLoaded('images', function () {
                return $this->images->pluck('path')->map(function ($image) {
                    return '/' . $image;
                });
            }),
        ];
    }
}
