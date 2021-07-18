@extends('app')
@section('title', 'Проекты - ')
@section('description', 'Все проекты выполненные Фирмой СТЭК, совместно с другими организациями и выполненные самостоятельно')
@section('content')
    @auth
		<script src="{{ asset('/public/js/ckeditor5-build-classic/ckeditor.js') }}"></script>
		<script src="{{ asset('/public/js/ckeditor5-build-classic/translations/ru.js') }}"></script>
        <form class="form" action="{{ route('upload_development') }}" method="POST" enctype="multipart/form-data">
            <div class="form-box form-box--add">
                <label class="form-box__caption">Заголовок<span style="font-weight: bold"> *</span></label>
                <input class="form-box__input-text" type="text" name="name">
            </div>
            <div class="form-box form-box--add">
                <label class="form-box__caption">Описание</label>
				<textarea class="form-box__textarea" name="description"></textarea>
            </div>
            <div class="form-box form-box--add">
                <label class="form-box__caption">Категория<span style="font-weight: bold"> *</span></label>
				<div class="dropdown dropdown--select-category" id="selectCategory">
					{{-- <input class="dropdown__input-text--select-category" type="text" name="category"> --}}
					<select class="dropdown__list dropdown__list--add-dev dropdown__list--select-category" name="category">
						<option class="dropdown__item dropdown__item--disabled" disabled>Категория:</option>
						@foreach ($developmentsCategories as $developmentsCategory)
							<option class="dropdown__item" value="{{ $developmentsCategory->rotating_id }}"> {{ $developmentsCategory->category }}</option>
						@endforeach
					</select>
				</div>
            </div>
            <div class="form-box form-box--add dragdrop">
                <label class="form-box__caption">Превью<span style="font-weight: bold"> *</span></label>
                <input class="form-box__input-file" type="file" name="image_development" accept="image/*">
                <input class="input-button form-box__input-btn" type="button" value="Обзор">
            </div>
            <div class="form-box form-box--add dragdrop">
                <label class="form-box__caption">Изображения проекта</label>
                <input class="form-box__input-file" type="file" name="images_development[]" accept="image/*" multiple>
                <input class="input-button form-box__input-btn" type="button" value="Обзор">
            </div>
            <button class="form__button">Загрузить проект</button>
        </form>
        <hr>
    @endauth

    <div class="developments">
        <div class="developments__header">
            <h2 class="title-h2 developments__header--title">Наши проекты</h2>
            <div class="dropdown developments__header--dropdawn">
                <span class="dropdown__caption">Категория</span>
				<select class="dropdown__list dropdown__list--sort">
					<option class="dropdown__item dropdown__item--disabled" disabled>Категория:</option>
                    <option class="dropdown__item">Не выбрано</option>
					@foreach ($developmentsCategories as $developmentsCategory)
						<option class="dropdown__item">{{ $developmentsCategory->category }}</option>
					@endforeach
				</select>
            </div>
        </div>
        <div class="grid grid--developments">
            @foreach ($developments as $development)
                @php
                    $development_preview_big = DB::table('development_preview')->where([['type', 'big'], ['development_id', $development->id]])->first();
                    $development_preview_small = DB::table('development_preview')->where([['type', 'small'], ['development_id', $development->id]])->first();
					$category = DB::table('categories')->where('rotating_id', $development->category)->value('category');
                @endphp
                <div class="developments__item">
                    <div class="developments__thumbnail">
                        <img class="developments__thumbnail-img for-the-entire-window" data="{{ asset($development_preview_small->path) }}" data-big="{{ asset($development_preview_big->path) }}" alt="">
                    </div>
                    <h3 class="developments__name">{{ $development->name }}</h3>
					@guest <div class="developments__category">Категория: <span class="categoryDev">{{ $category }}</span></div> @endguest
                    @auth
						<div class="category-change">
							<span class="caption">Категория</span>
							<div class="dropdown dropdown--select-category">
								<form class="form form--dropdown" action="{{ route('change_category') }}" method="POST">
									<input type="hidden" name="id" value="{{ $development->id }}">
									<select class="dropdown__list dropdown__list--select-category dropdown__list--change-category" name="category">
										<option class="dropdown__item dropdown__item--disabled" disabled>Категория:</option>
										@foreach ($developmentsCategories as $developmentsCategory)
											@php
												$id = DB::table('categories')->where('category', $developmentsCategory->category)->value('rotating_id');
											@endphp
											<option class="dropdown__item" @if ($id == $development->category) selected @endif>{{ $developmentsCategory->category }}</option>
										@endforeach
									</select>
								</form>
							</div>
						</div>
                        <form class="form developments__item--form" action="{{ route('change_development_preview_image') }}" method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="id" value="{{ $development->id }}">
                            <div class="form-box">
                                <input class="form-box__input-file" type="file" name="preview_development" accept="image/*">
                                <input class="input-button form-box__input-btn" type="button" value="Обзор">
                            </div>
                            <button class="form__button">Загрузить другую картинку</button>
                        </form>
                        <hr>
						<form class="form" class="delete_development" action="{{ route('delete_development') }}" method="POST">
							<input type="hidden" name="id" value="{{ $development->id }}">
							<button class="form__button">Удалить</button>
						</form>
						<hr>
                    @endauth
                    <a class="link button" href="{{asset('/development')}}/{{$development->id}}">Подробнее</a>
                </div>
            @endforeach
        </div>
		{{ $developments->links() }}
    </div>
@endsection