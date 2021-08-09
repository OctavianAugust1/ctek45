<!DOCTYPE html>
<html class="html" lang="ru-RU">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="keywords" content="ооо фирма стэк, фирма стэк, стэк, стэк курган, стек, фирма стек, ооо стэк, ооо стек, стек курган">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	@auth <meta name="api_token" content="{{ Auth::user()->api_token }}"> @endauth
	@if(App::environment('production'))
		{{-- <meta name="yandex-verification" content="09cdfabf53172981" /> --}}
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript" >
			(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
		
			ym(83810059, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true
			});
		</script>
		<noscript><div><img src="https://mc.yandex.ru/watch/83810059" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-KJTRC53');</script>
		<!-- End Google Tag Manager -->
	@endif
	
	<link rel="stylesheet" href="{{ asset('public'.mix("/css/main.css")) }}" type="text/css">
	<link rel="icon" href="{{ asset('public/image/logo/icon.ico') }}" type="image/x-icon">

	<title>@yield('title')Конструкторское бюро ООО Фирма СТЭК</title>
	<meta name="description" content="@yield('description')">
</head>
<body class="body">
	@if(App::environment('production'))
		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJTRC53"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->
	@endif
	
	<header class="header">
		<div class="header__grid header__grid--app container">
			<div class="hamburger">
				<svg class="bars" viewBox="0 0 448 512">
					<path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
					</path>
				</svg>
			</div>
			<img class="logo header__logo" data="{{ asset('public/image/logo/logo1.svg') }}" alt="">
			<span class="header__title">Инжиниринговая компания <br><h1>Фирма СТЭК</h1></span>
			<nav class="header__nav">
				<a class="header__nav-link" href="{{ route('index') }}">Главная</a>
				<a class="header__nav-link" href="{{ route('about_us') }}">О нас</a>
				<a class="header__nav-link" href="{{ route('articles') }}">Статьи</a>
				<a class="header__nav-link" href="{{ route('patents') }}">Патенты</a>
				<a class="header__nav-link" href="{{ route('developments') }}">Наши проекты</a>
				<a class="header__nav-link" href="{{ route('contacts') }}">Контакты</a>
				<a class="header__nav-link" href="{{ route('feedback') }}">Связь с нами</a>
				@auth
					<a class="header__nav-link" href="{{ route('admin') }}">Админ</a>
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
		<div class="upButton" id="upButton">
			<svg class="arrow-up" viewBox="0 0 512 512">
				<path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z">
				</path>
			</svg>
		</div>
		@yield('content')
	</main>

	<footer class="footer">
		<div class="footer__grid container">
			<img class="logo footer__logo" data="{{ asset('public/image/logo/logo1.svg') }}" alt="">
			<span class="footer__caption">Контактная информация</span>
			<div class="footer__desc">
				@if (url()->current() == route('contacts'))
					<div id="2" class="baloon baloon_footer_contacts">
						{!! $contacts[1] !!}
					</div>
				@else
					@php
						$contacts = DB::table('contacts')->pluck('contact');
					@endphp
					{!! $contacts[1] !!}
				@endif
				{{-- <div>
					<p>ООО Фирма «СТЭК»</p>
					<p>640007, Россия, г.Курган, пр-кт Машиностроителей, 20А, оф.9</p>
					<p>е-mail: ctek45@yandex.ru</p>
				</div>
				<p>Директор: Денисов Юрий Геннадьевич</p> --}}
			</div>
		</div>
	</footer>
	
	<script type="text/javascript" type="module" src="{{ asset('public'.mix('/js/all.js')) }}" defer></script>
</body>
</html>