@extends('app')
@section('title', 'Связь с нами - ')
@section('content')
	<h2 class="title-h2 feedback--title">Вы можете связаться для сотрудничества с нами</h2>
	<form class="form" action="{{ route('mail') }}" method="POST">
		<div class="form-box form-box--add">
			<label class="form-box__caption">Ваш email</label>
			<input class="form-box__input-text" type="email" name="email">
		</div>
		<div class="form-box form-box--add">
			<label class="form-box__caption">Имя</label>
			<input class="form-box__input-text" type="text" name="name">
		</div>
		<div class="form-box form-box--add">
			<label class="form-box__caption">Сообщение</label>
			<textarea class="form-box__textarea" name="message"></textarea>
		</div>
		<button class="form__button">Отправить</button>
	</form>
@endsection