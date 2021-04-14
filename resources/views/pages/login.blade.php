@extends('app')
@section('title', 'Вход - ')
@section('content')
	<form action="{{ route('loginA') }}" method="POST">
		@csrf
		<h2>Авторизация</h2>
		<div class="form-box">
			<span>Логин</span>
			<input type="text" name="login" required>
		</div>
		<div class="form-box">
			<span>Пароль</span>
			<input type="password" name="password" required>
		</div>
		<button>Войти</button>
	</form>
@endsection