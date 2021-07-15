@extends('app')
@section('title', 'Панель администратора - ')
@section('content')
	<h2 class="title-h2">Категории</h2>
	<form class="form form--admin" action="{{ route('add_category') }}" method="POST">
		<div class="form-box form-box--admin">
			<input class="form-box__input-text" type="text" name="category">
		</div>
		<button class="form__button">Добавить категорию</button>
	</form>
	<p>При удалении какой-либо категории проектам с этой категорией назначается категория "Без категории"</p>
	<div class="categories rotate-categories">
		@foreach ($categories as $category)
			<div class="category">
				@if ($categories_count > 1)
					@if ($category->rotating_id != $first_category)
						<div class="category__arrow-up">
							<form class="form form--category" action="{{ route('up_rotate_category') }}" method="POST">
								<input type="hidden" name="rotating_id" value="{{ $category->rotating_id }}">
								<input type="hidden" name="category" value="{{ $category->category }}">
								<button class="form__button form__button--category">Изменить</button>
							</form>
							<svg viewBox="0 0 512 512">
								<path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z">
								</path>
							</svg>
						</div>
					@endif
					@if ($category->rotating_id != $latest_category)
						<div class="category__arrow-down">
							<form class="form form--category" action="{{ route('down_rotate_category') }}" method="POST">
								<input type="hidden" name="rotating_id" value="{{ $category->rotating_id }}">
								<input type="hidden" name="category" value="{{ $category->category }}">
								<button class="form__button form__button--category">Изменить</button>
							</form>
							<svg viewBox="0 0 512 512">
								<path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z">
								</path>
							</svg>
						</div>
					@endif
				@endif
				<div class="category__right-block">
					<span class="category__name">{{ $category->category }}</span>
					@if ($category->category != 'Без категории')
						<form class="form form--admin" action="{{ route('change_category_name') }}" method="POST">
							<input type="hidden" value="{{ $category->id }}" name="id">
							<div class="form-box form-box--admin">
								<input class="form-box__input-text" type="text" value="{{ $category->category }}" name="category">
							</div>
							<button class="form__button button">Изменить</button>
						</form>
						<form class="form form--admin" action="{{ route('delete_category') }}" method="POST">
							<input type="hidden" value="{{ $category->id }}" name="id">
							<button class="form__button button">Удалить</button>
						</form>
					@endif
				</div>
			</div>
		@endforeach
	</div>
@endsection