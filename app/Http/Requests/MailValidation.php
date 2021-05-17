<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MailValidation extends FormRequest
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
			'email' => 'required|email|max:255',
			'message' => 'required|string|max:5000'
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

            'email.required' => 'Введите email',
            'email.email' => 'Поле не соответствует формату email',
            'email.max' => 'Максимально 255 символов',

            'message.required' => 'Введите сообщение',
            'message.string' => 'Поле должно быть строкой',
            'message.max' => 'Максимально 5000 символов',
        ];
    }
}
