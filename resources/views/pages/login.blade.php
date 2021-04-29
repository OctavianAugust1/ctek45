@extends('app')
@section('title', 'Вход - ')
@section('content')
	<div class="login">
    
        @if ($errors->any())
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        @endif

		
		<h2 class="title-h2 login--title">Авторизация</h2>
		<form class="form" action="{{ route('loginA') }}" method="POST">
			@csrf
			<div class="form-box form-box--add">
				<span class="form-box__caption">Логин</span>
				<input class="form-box__input-text" type="text" name="login" required>
			</div>
			<div class="form-box form-box--add">
				<span class="form-box__caption">Пароль</span>
				<input class="form-box__input-password" type="password" name="password" required>
			</div>
			<button class="form__button">Войти</button>
		</form>
	</div>
@endsection