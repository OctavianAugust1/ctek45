@extends('app')
@section('title', 'Статья - ')
@section('content')
	<div class="breadcrumbs">
		<a class="breadcrumbs__link link" href="{{ route('articles') }}">Статьи</a>
		&nbsp;&#8594;&nbsp;
		<div class="breadcrumbs__link breadcrumbs__name">{{ $article->name }}</div>
	</div>
	<div>
		@auth
			<script src="{{ asset('/public/js/ckeditor5-build-classic/ckeditor.js') }}"></script>
			<script src="{{ asset('/public/js/ckeditor5-build-classic/translations/ru.js') }}"></script>
			<form action="{{ route('change_article') }}" method="POST">
				<input type="hidden" name="id" value="{{ $article->id }}">
				<div class="form-box">
					<input class="form-box__input-text form-box__input-text--article" name="name" value="{{ $article->name }}">
				</div>
				<div class="form-box">
					<textarea class="form-box__textarea ckfinder article__text" name="text">{{ $article->text }}</textarea>
				</div>
			</form>
		@endauth
		@guest
			<div class="title-h2">{{ $article->name }}</div>
			<pre class="desc desc--article">{!! $article->text !!}</pre>
		@endguest
	</div>
@endsection