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
        <form action="{{ route('upload_patent') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-box">
                <label>Заголовок</label>
                <input type="text" name="name" required>
            </div>
            <div class="form-box">
                <label>Изображение патента</label>
                <input id="input_img1" type="file" name="image_patent" accept="image/*">
                <input id="btn_img1" type="button" value="Обзор">
            </div>
            <button>Загрузить патент</button>
        </form>
    @endauth

    <h2>Наши патенты</h2>
    <div class="patents">
        @foreach($patents as $patent)
            <div class="patent">
                @auth
                    <div class="image">
                        @php
                            $patent_preview_big = DB::table('patent_preview')->where([['type', 'big'], ['patent_id', $patent->id]])->first();
                            $patent_preview_small = DB::table('patent_preview')->where([['type', 'small'], ['patent_id', $patent->id]])->first();
                        @endphp
                        <div class="for_the_entire_window" data-big="{{ asset($patent_preview_big->path) }}">
                            <img data="{{ asset('public/image/other/expand.svg') }}">
                        </div>
                        <img data="{{ asset($patent_preview_small->path) }}" alt="">
                    </div>
                    <form action="{{ route('change_information_patent') }}" method="POST">
                        @csrf
                        <input type="hidden" name="id" value="{{ $patent->id }}">
                        <input class="changed_text" type="text" name="name" value="{{ $patent->name }}">
                        <button>Сохранить</button>
                    </form>
                    <form action="{{ route('change_patent') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{ $patent->id }}">
                        <div class="form-box">
                            <input type="file" name="image_patent" accept="image/*">
                            <input type="button" value="Обзор">
                        </div>
                        <button>Загрузить другую картинку</button>
                    </form>
                    <form action="{{ route('delete_patent') }}" method="POST">
                        @csrf
                        <input type="hidden" name="id" value="{{ $patent->id }}">
                        <button>Удалить</button>
                    </form>
                @else
                    <div class="image">
                        @php
                            $patent_preview_big = DB::table('patent_preview')->where([['type', 'big'], ['patent_id', $patent->id]])->first();
                            $patent_preview_small = DB::table('patent_preview')->where([['type', 'small'], ['patent_id', $patent->id]])->first();
                        @endphp
                        <div class="for_the_entire_window" data-big="{{ asset($patent_preview_big->path) }}">
                            <img data="{{ asset('public/image/other/expand.svg') }}">
                        </div>
                        <img data="{{ asset($patent_preview_small->path) }}" alt="">
                    </div>
                    <label>{{ $patent->name }}</label>
                @endauth
            </div>
        @endforeach
    </div>
@endsection