@extends('app')
@section('title', 'Контакты - ')
@section('description', 'Контактная информация Фирмы СТЭК, юридический адрес, персонал')
@section('content')

	<h2 class="title-h2">Контакты</h2>
	<div class="contact">
		<div class="contact__desc">
			<p class="contact__paragraph">ООО Фирма “СТЭК”</p>
			<p class="contact__paragraph">Юр. адрес: 640007, Курган, пр-кт Машиностроителей, 20А, оф.9</p>
			<p class="contact__paragraph">ИНН  4501001740  КПП 450101001</p>
			<p class="contact__paragraph">e-mail: ctek45@yandex.ru</p>
			<p class="contact__paragraph">Почтовый адрес: </p>
			<p class="contact__paragraph">640023, г. Курган, 3 мкр., д.34А, кв.46</p>
		</div>
		
		<div class="contact__desc contact__blocks">
			<div class="contact__block">
				<div class="contact__image">
					@auth
						<form class="form change-image" action="{{ route('change_image') }}" method="POST" enctype="multipart/form-data">
							<input type="hidden" name="path" value="public/image/other/contact1.webp">
							<input type="file" name="image" accept="image/*">
							<div class="change-image__button"></div>
							<button class="form__button button">Загрузить</button>
						</form>
					@endauth
					<img class="contact__img" data="{{ asset('public/image/other/contact1.webp') }}" alt="" height="" width="">
				</div>
				<div>
					<p class="contact__paragraph contact__paragraph--block">Директор: Денисов Юрий Геннадьевич </p>
				</div>
			</div>
			<div class="contact__block">
				<div class="contact__image">
					@auth
						<form class="form change-image" action="{{ route('change_image') }}" method="POST" enctype="multipart/form-data">
							<input type="hidden" name="path" value="public/image/other/contact2.webp">
							<input type="file" name="image" accept="image/*">
							<div class="change-image__button"></div>
							<button class="form__button button">Загрузить</button>
						</form>
					@endauth
					<img class="contact__img" data="{{ asset('public/image/other/contact2.webp') }}" alt="" height="" width="">
				</div>
				<div>
					<p class="contact__paragraph contact__paragraph--block">Зам. директора: Вибе Вячеслав Петрович</p>
				</div>
			</div>
			<div class="contact__block">
				<div class="contact__image">
					@auth
						<form class="form change-image" action="{{ route('change_image') }}" method="POST" enctype="multipart/form-data">
							<input type="hidden" name="path" value="public/image/other/contact3.webp">
							<input type="file" name="image" accept="image/*">
							<div class="change-image__button"></div>
							<button class="form__button button">Загрузить</button>
						</form>
					@endauth
					<img class="contact__img" data="{{ asset('public/image/other/contact3.webp') }}" alt="" height="" width="">
				</div>
				<div>
					<p class="contact__paragraph contact__paragraph--block">Гл. бухгалтер: Денисова Елена Владимировна</p>
				</div>
			</div>
		</div>
	</div>


	<h3 class="title-h2">Мы на карте</h3>
	<div class="double-gis double-gis--contacts">
		<a class="dg-widget-link" href="http://2gis.ru/kurgan/firm/70000001034188288/center/65.3401565551758,55.45132512891822/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Кургана</a>
		<div class="dg-widget-link">
			<a href="http://2gis.ru/kurgan/center/65.341239,55.450252/zoom/16/routeTab/rsType/bus/to/65.341239,55.450252╎СТЭК, торговый дом?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до СТЭК, торговый дом</a>
		</div>
		<script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>
		<script charset="utf-8">new DGWidgetLoader({"borderColor":"#a3a3a3","pos":{"lat":55.45132512891822,"lon":65.3401565551758,"zoom":16},"opt":{"city":"kurgan"},"org":[{"id":"70000001034188288"}]});</script>
		<noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>
	</div>
@endsection