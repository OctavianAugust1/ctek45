<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DevelopmentValidation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
			'name' => 'required|string|max:255',
			'description' => 'nullable|string',
			'category' => 'required|string',
			'image_development' => 'required|image',
			'images_development' => 'nullable|array',
			'images_development.*' => 'nullable|image'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Введите название',
            'name.string' => 'Поле должно быть строкой',
            'name.max' => 'Максимально 255 символов',

            'description.string' => 'Поле должно быть строкой',

            'category.required' => 'Выберите существующую или введите новую категорию',

            'image_development.required' => 'Выберите изображение',
            'image_development.image' => 'Выбранный файл должен быть изображением',
            'images_development.*.image' => 'Выбранный файл должен быть изображением',
        ];
    }
}
