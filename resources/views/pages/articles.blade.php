@extends('app')
@section('title', 'Статьи - ')
@section('description', 'Публикации и статьи Фирмы СТЭК')
@section('content')
	@auth
		<script src="{{ asset('/public/js/ckeditor5-build-classic/ckeditor.js') }}"></script>
		<script src="{{ asset('/public/js/ckeditor5-build-classic/translations/ru.js') }}"></script>
		<form class="form" action="{{ route('add_article') }}" method="POST">
			<div class="form-box form-box--add">
				<label class="form-box__caption">Заголовок<span style="font-weight: bold"> *</span></label>
				<input class="form-box__input-text" type="text" name="name">
			</div>
			<div class="form-box form-box--add">
				<label class="form-box__caption">Статья<span style="font-weight: bold"> *</span></label>
				<textarea class="form-box__textarea ckfinder" name="text"></textarea>
			</div>
			<button class="form__button">Загрузить статью</button>
		</form>
		<hr>
	@endauth

	<div class="articles">
		<h2 class="title-h2">Статьи</h2>
		<div class="grid">
			@foreach ($articles as $article)
				<div class="article">
					<span class="article__name">{{ $article->name }}</span>
					<div class="article__buttons">
						@auth
							<form class="form" action="{{ route('delete_article') }}" method="POST">
								<input type="hidden" name="id" value="{{ $article->id }}">
								<button class="form__button form__button--article">Удалить</button>
							</form>
						@endauth
						<a class="link button article__button" href="{{asset('/article')}}/{{$article->id}}">Читать далее...</a>
					</div>
				</div>
			@endforeach
		</div>
	</div>
@endsection