@extends('app')
@section('title', 'Проекты - ')
@section('content')
    @auth

    
        @if ($errors->any())
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        @endif


        <form class="form" action="{{ route('upload_development') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-box form-box--add">
                <label class="form-box__caption">Заголовок</label>
                <input class="form-box__input-text" type="text" name="name">
            </div>
            <div class="form-box form-box--add">
                <label class="form-box__caption">Описание (необязательное поле)</label>
                <div>
					<div id="editor"></div>
				</div>
				<textarea class="form-box__textarea" id="textarea_quill" name="description"></textarea>
            </div>
            <div class="form-box form-box--add">
                <label class="form-box__caption">Превью</label>
                <input class="form-box__input-file" type="file" name="image_development" accept="image/*">
                <input class="input-button form-box__input-btn" type="button" value="Обзор">
            </div>
            <div class="form-box form-box--add">
                <label class="form-box__caption">Изображения проекта</label>
                <input class="form-box__input-file" type="file" name="images_development[]" accept="image/*" multiple>
                <input class="input-button form-box__input-btn" type="button" value="Обзор">
            </div>
            <button class="form__button" id="submit_quill">Загрузить проект</button>
        </form>
        <hr>
    @endauth

    <div class="developments">
        <div class="developments__header">
            <h2 class="title-h2 developments__header--title">Наши проекты</h2>
            <div class="dropdown developments__header--dropdawn">
                <span class="dropdown__caption">Категория</span>
                <select class="dropdown__list">
                    <option class="dropdown__item dropdown__item--disabled" disabled>Категория:</option>
                    <option class="dropdown__item">Не выбрано</option>
                    <option class="dropdown__item">МВД</option>
                    <option class="dropdown__item">Аэродром</option>
                    <option class="dropdown__item">МЧС</option>
                    <option class="dropdown__item">Дорожная техника</option>
                    <option class="dropdown__item">Без категории</option>
                </select>
            </div>
        </div>
        <div class="grid grid--developments">
            @foreach ($developments as $development)
                @php
                    $development_preview_big = DB::table('development_preview')->where([['type', 'big'], ['development_id', $development->id]])->first();
                    $development_preview_small = DB::table('development_preview')->where([['type', 'small'], ['development_id', $development->id]])->first();
                @endphp
                <div class="developments__item">
                    <div class="developments__thumbnail">
                        <div class="for-the-entire-window" data-big="{{ asset($development_preview_big->path) }}">
                            <img class="for-the-entire-window__icon" src="" data="{{ asset('public/image/other/expand.svg') }}" alt="">
                        </div>
                        <img class="developments__thumbnail-img" src="" data="{{ asset($development_preview_small->path) }}" alt="">
                    </div>
                    <span class="developments__name">{{ $development->name }}</span>
                    @auth
                        <form class="form developments__item--form" action="{{ route('change_development_preview_image') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <input type="hidden" name="id" value="{{ $development->id }}">
                            <div class="form-box">
                                <input class="form-box__input-file" type="file" name="preview_development" accept="image/*">
                                <input class="input-button form-box__input-btn" type="button" value="Обзор">
                            </div>
                            <button class="form__button">Загрузить другую картинку</button>
                        </form>
                        <hr>
                    @endauth
                    <a class="link button" href="{{asset('/development')}}/{{$development->id}}">Подробнее</a>
                </div>
            @endforeach
        </div>
    </div>
@endsection