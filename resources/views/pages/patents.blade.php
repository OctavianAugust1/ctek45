@extends('app')
@section('title', 'Патенты - ')
@section('description', 'Патенты зарегистрированные на ООО Фирма СТЭК')
@section('content')
    @auth
        <form class="form" id="upload_patent" action="{{ route('upload_patent') }}" method="POST" enctype="multipart/form-data">
            <div class="form-box form-box--add">
                <label class="form-box__caption">Заголовок<span style="font-weight: bold"> *</span></label>
                <input class="form-box__input-text" type="text" name="name" required>
            </div>
            <div class="form-box form-box--add dragdrop">
                <label class="form-box__caption">Изображение патента<span style="font-weight: bold"> *</span></label>
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
                        <div class="patents__thumbnail-image for-the-entire-window"><img class="patents__thumbnail-img" data="{{ asset($patent_preview_small->path) }}" data-big="{{ asset($patent_preview_big->path) }}" alt=""></div>
                    </div>
                    @guest
                        <h3 class="patents__name">{{ $patent->name }}</h3>
                    @endguest
                    @auth
                        <form class="form form--change-text" action="{{ route('change_information_patent') }}" method="POST">
                            <div class="form-box form-box--patents">
                                <input class="form-box__input-file" type="hidden" name="id" value="{{ $patent->id }}">
                                <input class="form-box__input-text form-box__input-text--patents" type="text" name="name" value="{{ $patent->name }}">
                            </div>
                        </form>
                        <hr>
                        <form class="form patents__form" action="{{ route('change_patent') }}" method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="id" value="{{ $patent->id }}">
                            <div class="form-box form-box--patents">
                                <input class="form-box__input-file" type="file" name="image_patent" accept="image/*">
                                <input class="input-button form-box__input-btn" type="button" value="Обзор">
                            </div>
                            <button class="form__button">Загрузить другую картинку</button>
                        </form>
                        <hr>
                        <form class="form patents__form" action="{{ route('delete_patent') }}" method="POST">
                            <input type="hidden" name="patent_id" value="{{ $patent->id }}">
                            <button class="form__button">Удалить</button>
                        </form>
                    @endauth
                </div>
            @endforeach
        </div>
		{{ $patents->links() }}
    </div>
@endsection