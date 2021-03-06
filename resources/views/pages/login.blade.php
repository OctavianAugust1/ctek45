@extends('app')
@section('title', 'Вход - ')
@section('content')
	<div class="login">
    
		@if ($errors->any())
			<div class="alert alert-danger">
				@foreach ($errors->all() as $error)
					<div class="error">{{ $error }}</div>
				@endforeach
			</div>
		@endif

		
		<h2 class="title-h2 login--title">Авторизация</h2>
		<form class="form" action="/login" method="POST">
			@csrf
			<div class="form-box form-box--add">
				<span class="form-box__caption">Логин</span>
				<input class="form-box__input-text" type="text" name="login">
			</div>
			<div class="form-box form-box--add">
				<span class="form-box__caption">Пароль</span>
				<input class="form-box__input-password" type="password" name="password">
			</div>
			<button class="form__button" id="btn_login">Войти</button>
		</form>
	</div>
@endsection