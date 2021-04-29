@extends('app')
@section('title', 'Патенты - ')
@section('content')
    @auth


        @if ($errors->any())
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        @endif


        <form class="form" action="{{ route('upload_patent') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-box form-box--add">
                <label class="form-box__caption">Заголовок</label>
                <input class="form-box__input-text" type="text" name="name" required>
            </div>
            <div class="form-box form-box--add">
                <label class="form-box__caption">Изображение патента</label>
                <input class="form-box__input-file" type="file" name="image_patent" accept="image/*">
                <input class="input-button form-box__input-btn" type="button" value="Обзор">
            </div>
            <button class="form__button">Загрузить патент</button>
        </form>
        <hr>
    @endauth

    <div class="patents">
        <h2 class="title-h2 patents--title">Наши патенты</h2>
        <div class="grid grid--patents">
            @foreach($patents as $patent)
                @php
                    $patent_preview_big = DB::table('patent_preview')->where([['type', 'big'], ['patent_id', $patent->id]])->first();
                    $patent_preview_small = DB::table('patent_preview')->where([['type', 'small'], ['patent_id', $patent->id]])->first();
                @endphp
                <div class="patents__item">
                    <div class="patents__thumbnail">
                        <div class="for-the-entire-window" data-big="{{ asset($patent_preview_big->path) }}">
                            <img class="for-the-entire-window__icon" data="{{ asset('public/image/other/expand.svg') }}">
                        </div>
                        <div class="patents__thumbnail-image"><img class="patents__thumbnail-img" data="{{ asset($patent_preview_small->path) }}" alt=""></div>
                    </div>
                    @guest
                        <label class="patents__name">{{ $patent->name }}</label>
                    @endguest
                    @auth
                        <form class="form form--change-text" action="{{ route('change_information_patent') }}" method="POST">
                            @csrf
                            <div class="form-box form-box--patents">
                                <input class="form-box__input-file" type="hidden" name="id" value="{{ $patent->id }}">
                                <input class="form-box__input-text form-box__input-text--patents" type="text" name="name" value="{{ $patent->name }}">
                            </div>
                            <button class="form__button">Сохранить</button>
                        </form>
                        <hr>
                        <form class="form patents__form" action="{{ route('change_patent') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <input type="hidden" name="id" value="{{ $patent->id }}">
                            <div class="form-box form-box--patents">
                                <input class="form-box__input-file" type="file" name="image_patent" accept="image/*">
                                <input class="input-button form-box__input-btn" type="button" value="Обзор">
                            </div>
                            <button class="form__button">Загрузить другую картинку</button>
                        </form>
                        <hr>
                        <form class="form patents__form" action="{{ route('delete_patent') }}" method="POST">
                            @csrf
                            <input type="hidden" name="id" value="{{ $patent->id }}">
                            <button class="form__button">Удалить</button>
                        </form>
                    @endauth
                </div>
            @endforeach
        </div>
    </div>
@endsection