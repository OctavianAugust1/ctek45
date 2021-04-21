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


        <form action="{{ route('upload_development') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-box">
                <label>Заголовок</label>
                <input type="text" name="name">
            </div>
            <div class="form-box">
                <label>Описание (необязательное поле)</label>
                <textarea name="description"></textarea>
            </div>
            <div class="form-box">
                <label>Превью</label>
                <input type="file" name="image_development" accept="image/*">
                <input type="button" value="Обзор">
            </div>
            <div class="form-box">
                <label>Изображения проекта</label>
                <input type="file" name="images_development[]" accept="image/*" multiple>
                <input type="button" value="Обзор">
            </div>
            <button>Загрузить проект</button>
        </form>
    @endauth

    <h2>Наши проекты</h2>
    <div class="dropdown">
        <span>Категория</span>
        <select>
            <option disabled>Категория:</option>
            <option>Без категории</option>
            <option>МВД</option>
            <option>Аэродром</option>
            <option>МЧС</option>
            <option>Дорожная техника</option>
        </select>
    </div>
    <div class="developments">
        @foreach ($developments as $development)
            <div class="development">
                <div class="image">
                    @php
                        $development_preview_big = DB::table('development_preview')->where([['type', 'big'], ['development_id', $development->id]])->first();
                        $development_preview_small = DB::table('development_preview')->where([['type', 'small'], ['development_id', $development->id]])->first();
                    @endphp
                    <div class="for_the_entire_window" data-big="{{ asset($development_preview_big->path) }}">
                        <img data="{{ asset('public/image/other/expand.svg') }}">
                    </div>
                    <img data="{{ asset($development_preview_small->path) }}" alt="">
                </div>
                <span>{{ $development->name }}</span>
                @auth
                    <form action="{{ route('change_development_preview_image') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{ $development->id }}">
                        <div class="form-box">
                            <input type="file" name="preview_development" accept="image/*">
                            <input type="button" value="Обзор">
                        </div>
                        <button>Загрузить другую картинку</button>
                    </form>
                @endauth
                <form action="{{asset('/development')}}/{{$development->id}}" method="GET">
                    <button>Подробнее</button>
                </form>
            </div>
        @endforeach
    </div>
@endsection