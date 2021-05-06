<!DOCTYPE html>
<html class="html" lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	{{-- <link rel="stylesheet" href="{{ asset("public/css/reset.css") }}">
	<link rel="stylesheet" href="{{ asset("public/css/style.css?5") }}"> --}}
	<link rel="stylesheet" href="{{ asset('public'.mix("/css/main.css")) }}" type="text/css">
	<link rel="icon" href="{{ asset('public/image/logo/icon.ico') }}" type="image/x-icon">
	{{-- froala-editor --}}
	{{-- <link rel="stylesheet" href="{{ asset('public/js/froala-editor/css/froala_editor.pkgd.min.css') }}" type="text/css">
	<link rel="stylesheet" href="{{ asset('public/js/froala-editor/css/froala_style.min.css') }}" type="text/css"> --}}

	<!-- Core build with no theme, formatting, non-essential modules -->
	<link type="text/css" href="https://cdn.quilljs.com/1.3.6/quill.core.css" rel="stylesheet">
	<script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.core.js" defer></script>
	<!-- Main Quill library -->
	<script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js" defer></script>
	<!-- Theme included stylesheets -->
	<link type="text/css" href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
	
	<title>@yield('title')СТЭК</title>
</head>
<body class="body">
	<header class="header">
		<div class="header__grid header__grid--app container">
			<div class="hamburger">
				<svg class="bars" viewBox="0 0 448 512">
					<path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
					</path>
				</svg>
			</div>
			<img class="logo header__logo" data="{{ asset('public/image/logo/logo.svg') }}" alt="">
			<h1 class="header__title">Инжиниринговая компания Фирма СТЭК</h1>
			<nav class="header__nav">
				<a class="header__nav-link" href="{{ route('index') }}">Главная</a>
				<a class="header__nav-link" href="{{ route('about_us') }}">О нас</a>
				<a class="header__nav-link" href="{{ route('patents') }}">Патенты</a>
				<a class="header__nav-link" href="{{ route('developments') }}">Наши проекты</a>
				<a class="header__nav-link" href="{{ route('contacts') }}">Контакты</a>
				<a class="header__nav-link" href="{{ route('feedback') }}">Связь с нами</a>
				@auth
					<a class="header__nav-link" href="{{ route('logout') }}">
						<svg class="sign-out" viewBox="0 0 512 512">
							<path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z">
							</path>
						</svg>
					</a>
				@endauth
			</nav>
		</div>
	</header>

	<main class="main container">
		@yield('content')
	</main>

	<footer class="footer">
		<div class="footer__grid container">
			<img class="logo footer__logo" data="{{ asset('public/image/logo/logo.svg') }}" alt="">
			<span class="footer__caption">Контактная информация</span>
			<div class="footer__desc">
				<p>
					ООО Фирма «СТЭК», 640007, Россия, г.Курган, пр-т Машиностроителей, д.1, оф.412;
					е-mail: ctek45@yandex.ru
				</p>
				<p>Директор: Денисов Юрий Геннадьевич, моб. +7-912-832-62-18</p>
			</div>
		</div>
	</footer>
	{{-- <script type="text/javascript" src="{{ asset('public'.mix('/js/script.js')) }}" defer></script> --}}
	<script type="text/javascript" src="{{ asset('public'.mix('/js/all.js')) }}" defer></script>
	{{-- <script type="text/javascript" src="{{ asset('public/js/froala-editor/js/froala_editor.pkgd.min.js') }}" defer></script>
	<script type="text/javascript" src="{{ asset('public/js/froala-editor/js/languages/ru.js') }}" defer></script>

	<script src="https://cdn.ckeditor.com/ckeditor5/27.1.0/decoupled-document/translations/ru.js" defer></script>
	<script src="https://cdn.ckeditor.com/ckeditor5/27.1.0/decoupled-document/ckeditor.js" defer></script>

	<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest" defer></script> --}}
</body>
</html>