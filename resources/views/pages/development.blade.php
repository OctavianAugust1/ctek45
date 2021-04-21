@extends('app')
@section('title', 'Проект - ')
@section('content')
    @auth
        <div class="development_page">
            @if ($errors->any())
                <div>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <form action="{{ route('change_information_development') }}" method="POST">
                @csrf
                <input type="hidden" name="id" value="{{ $development->id }}">
                <input class="title changed_text" type="text" name="name" value="{{ $development->name }}">
                <div class="textarea_el">
                    <textarea class="description changed_text" name="description">{{ $development->description }}</textarea>
                </div>
                <button>Сохранить</button>
            </form>
            <form action="{{ route('add_development_image') }}" enctype="multipart/form-data" method="POST">
                @csrf
                <div class="form-box">
                    <label>Изображения проекта</label>
                    <input type="hidden" name="development_id" value="{{ $development->id }}">
                    <input type="file" name="images_development[]" accept="image/*" multiple>
                    <input type="button" value="Обзор">
                </div>
                <button>Загрузить новые изображения</button>
            </form>
            <div class="images">
                @foreach ($development_images as $development_image)
                    <div class="image">
                        @php
                            $development_preview_small = DB::table('development_images')->where([['type', 'small'], ['id', $development_image->id]])->first();
                            $development_preview_big = DB::table('development_images')->where([['type', 'big'], ['id', $development_image->id + 1]])->first();
                        @endphp
                        <img data="{{ asset($development_preview_small->path) }}" alt="">
                        <div class="for_the_entire_window" data-big="{{ asset($development_preview_big->path) }}">
                            <img data="{{ asset('public/image/other/expand.svg') }}">
                        </div>
                        <div class="delete_image_block">
                            <img class="delete_image" data="{{ asset('public/image/other/times.svg') }}">
                        </div>
                        <form action="{{ route('delete_image_development') }}" method="POST">
                            @csrf
                            <input type="hidden" name="path" value="{{ $development_image->path }}">
                            <button class="delete_image_btn">Удалить изображение</button>
                        </form>
                    </div>
                @endforeach
            </div>

            <form class="delete_development" action="{{ route('delete_development') }}" method="POST">
                @csrf
                <input type="hidden" name="id" value="{{ $development->id }}">
                <button>Удалить</button>
            </form>
        </div>
    @else
        <div class="development_page">
            <span class="title">{{ $development->name }}</span>
            <div class="images">
                @foreach ($development_images as $development_image)
                    <div class="image">
                        <img data="{{ asset($development_image->path) }}" alt="">
                        <div class="for_the_entire_window" data-big="{{ asset($development_image->path) }}">
                            <img data="{{ asset('public/image/other/expand.svg') }}">
                        </div>
                    </div>
                @endforeach
            </div>
            <pre class="description">{{ $development->description }}</pre>
        </div>
    @endauth
@endsection