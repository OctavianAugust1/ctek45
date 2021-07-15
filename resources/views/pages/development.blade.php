@extends('app')
@section('title', 'Проект - ')
@section('description', 'Одна из разработок Фирмы СТЭК')
@section('content')
    <div class="development">
        @auth
			<script src="{{ asset('/public/js/ckeditor5-build-classic/ckeditor.js') }}"></script>
			<script src="{{ asset('/public/js/ckeditor5-build-classic/translations/ru.js') }}"></script>
            <form class="form" action="{{ route('change_information_development') }}" method="POST">
                <input type="hidden" name="id" value="{{ $development->id }}">
                <div class="form-box development__form-box">
                    <input class="development__input-text" type="text" name="name" value="{{ $development->name }}">
                    <textarea class="form-box__textarea development__textarea" name="description">{{ $development->description }}</textarea>
                </div>
            </form>
            <hr>
            <form class="form" action="{{ route('add_development_image') }}" enctype="multipart/form-data" method="POST">
                <input type="hidden" name="development_id" value="{{ $development->id }}">
                <div class="form-box form-box--add dragdrop">
                    <label class="form-box__caption">Изображения проекта</label>
                    <input class="form-box__input-file" type="file" name="images_development[]" accept="image/*" multiple>
                    <input class="input-button form-box__input-btn" type="button" value="Обзор">
                </div>
                <button class="form__button">Загрузить новые изображения</button>
            </form>
        @endauth
        @guest
			<div class="breadcrumbs">
				<a class="breadcrumbs__link link" href="{{ route('developments') }}">Проекты</a>
				&nbsp;&#8594;&nbsp;
				<div class="breadcrumbs__link breadcrumbs__name">{{ $development->name }}</div>
			</div>
            <h2 class="title-h2">{{ $development->name }}</h2>
        @endguest
        <div class="development__thumbnail imageNavigation">
            @foreach ($development_images as $development_image)
                @php
                    $development_preview_small = DB::table('development_images')->where([['type', 'small'], ['id', $development_image->id]])->first();
                    $development_preview_big = DB::table('development_images')->where([['type', 'big'], ['id', $development_image->id + 1]])->first();
                @endphp
                <div class="development__thumbnail-image">
                    <img class="development__thumbnail-img for-the-entire-window" src="" data="{{ asset($development_preview_small->path) }}" data-big="{{ asset($development_preview_big->path) }}" alt="">
                    @auth
                        <div class="delete-image">
                            <svg class="delete-image__svg" viewBox="0 0 352 512">
                                <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                                </path>
                            </svg>
                        </div>
                        <form class="form form--development__thumbnail" action="{{ route('delete_image_development') }}" method="POST">
                            <input type="hidden" name="path" value="{{ $development_image->path }}">
                            <button class="form__button">Удалить изображение</button>
                        </form>
                    @endauth
                </div>
            @endforeach
        </div>
        @guest
            <pre class="desc">{{ $development->description }}</pre>
        @endguest
    </div>
@endsection