<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="{{ asset("public/css/reset.css") }}">
	<link rel="stylesheet" href="{{ asset("public/css/style.css?3") }}">
	<link rel="icon" href="{{ asset('public/image/logo/icon.ico') }}" type="image/x-icon">
	
	{{-- Шрифты --}}
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet">

	<title>@yield('title')СТЭК</title>
</head>
<body>
	<header>
		<div class="header container">
			<img data="{{ asset('public/image/logo/logo.svg') }}" class="logo" alt="">
			<h1>Инжиниринговая компания Фирма СТЭК</h1>
			<nav>
				<a href="{{ route('index') }}">Главная</a>
				<a href="{{ route('about_us') }}">О нас</a>
				<a href="{{ route('patents') }}">Патенты</a>
				<a href="{{ route('developments') }}">Наши проекты</a>
				<a href="{{ route('contacts') }}">Контакты</a>
				
				{{-- feedback --}}
				<a href="{{ route('feedback') }}">Связь с нами</a>
				@auth
					<a href="{{ route('logout') }}"><img data="{{ asset('public/image/other/sign-out.svg') }}" alt="Выход"></a>
				@endauth
			</nav>
		</div>
	</header>

	<main class="container homepage">
		@yield('content')
	</main>

	<footer>
		<div class="footer container">
			<img class="logo" data="{{ asset('public/image/logo/logo.svg') }}" alt="">
			<span class="contact_inf">Контактная информация</span>
			<div>
				<p>
					ООО Фирма «СТЭК», 640007, Россия, г.Курган, пр-т Машиностроителей, д.1, оф.412;
					е-mail: ctek45@yandex.ru
				</p>
				<p>Директор: Денисов Юрий Геннадьевич, моб. +7-912-832-62-18</p>
			</div>
		</div>
	</footer>
	<script src="{{ asset('public/js/app.js?3') }}" defer></script>
</body>
</html>