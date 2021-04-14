@extends('app')
@section('title', 'Контакты - ')
@section('content')

	<h2>Контакты</h2>
	<div class="contact">
		<div>
			<p>ООО Фирма “СТЭК”</p>
			<p>Юр. адрес: 640007, Курган, пр-кт Машиностроителей, д.1, оф.412</p>
			<p>ИНН  4501001740  КПП 450101001</p>
			<p>e-mail: ctek45@yandex.ru</p>
			<p>Почтовый адрес: </p>
			<p>640023, г.Курган, 3 мкр., д.34А, кв.46</p>
		</div>
		
		<div>
			<p>Директор: Денисов Юрий Геннадьевич </p>
			<p>т. +7-912-832-62-18</p>
			<p>Зам. директора: Вибе Вячеслав Петрович</p>
			<p>т. +7-912-834-16-21</p>
			<p>Гл. бухгалтер: Денисова Елена Владимировна</p>
			<p>т. +7-912-831-51-70</p>
		</div>
	</div>


	<h2>Мы на карте</h2>
	<div class="double_gis">
		<a class="dg-widget-link" href="http://2gis.ru/kurgan/firm/70000001034188288/center/65.3401565551758,55.45132512891822/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Кургана</a>
		<div class="dg-widget-link">
			<a href="http://2gis.ru/kurgan/center/65.341239,55.450252/zoom/16/routeTab/rsType/bus/to/65.341239,55.450252╎СТЭК, торговый дом?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до СТЭК, торговый дом</a>
		</div>
		<script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>
		<script charset="utf-8">new DGWidgetLoader({"borderColor":"#a3a3a3","pos":{"lat":55.45132512891822,"lon":65.3401565551758,"zoom":16},"opt":{"city":"kurgan"},"org":[{"id":"70000001034188288"}]});</script>
		<noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>
	</div>
@endsection