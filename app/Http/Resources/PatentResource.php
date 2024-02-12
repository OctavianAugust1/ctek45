<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Str;

class PatentResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $coverSmall = Str::of(Str::replace('big', 'small', $this->cover))->explode('.');
        $coverSmall = Str::of($coverSmall->first())->finish('_small') . '.' . $coverSmall->last();
        return [
            'name' => $this->name,
            'cover_big' => $this->cover,
            'cover_small' => $coverSmall,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
