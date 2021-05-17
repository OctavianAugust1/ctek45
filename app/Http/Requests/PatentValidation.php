<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatentValidation extends FormRequest
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
            'image_patent' => 'required|image'
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

            'image_patent.required' => 'Выберите изображение',
            'image_patent.image' => 'Выбранный файл должен быть изображением',
        ];
    }
}
