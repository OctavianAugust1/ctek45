@extends('app')
@section('title', 'О  нас - ')
@section('description', 'Информация о деятельности фирмы СТЭК как конструкторского бюро в городе Кургане с момента своего основания')
@section('content')
	<div class="about-us">
		<h2 class="title-h2">О нас</h2>
		@auth
			<script src="{{ asset('/public/js/ckeditor5-build-classic/ckeditor.js') }}"></script>
			<script src="{{ asset('/public/js/ckeditor5-build-classic/translations/ru.js') }}"></script>
			<form class="form" action="{{ route('about_us_change') }}" method="POST">
				<div class="form-box">
					<textarea class="form-box__textarea form-box__textarea--about-us" name="text">{{ $about_us }}</textarea>
				</div>
			</form>
		@endauth
		@guest
			<pre class="desc">{!! $about_us !!}</pre>
		@endguest
		{{-- <p class="about-us__desc">
			Предприятие ООО Фирма «СТЭК» было создано и зарегистрировано 28 декабря 1991 г. в форме товарищества с ограниченной ответственностью и ставило перед собой основные задачи:
		</p>
		<ul class="list">
			<li class="item">Развитие наукоемких производств</li>
			<li class="item">Выпуск продукции производственно-технического назначения и иного оборудования</li>
			<li class="item">Помощь организациям, предприятиям и частным лицам в патентовании изобретений</li>
		</ul>

		<p class="about-us__desc">
			За первые годы деятельности были заключены договоры и произведены такие интересные работы как:
		</p>
		<ul class="list">
			<li class="item">Проведение исследований зависимости усталостной прочности и контактной выносливости шестерен от распределения углерода по глубине цементированного слоя</li>
			<li class="item">Разработка методов и алгоритмов определения реальной нагруженности зубьев по показаниям датчиков деформации интегрального типа (ДДИТ)</li>
			<li class="item">Определение нагруженности и долговечности несущих систем трансмиссий с использованием ДДИТ</li>
			<li class="item">Оценка напряженного состояния узла промежуточного рельсового скрепления</li>
			<li class="item">Определение нагруженности и остаточного ресурса несущих металлоконструкций мостовых кранов</li>
			<li class="item">Исследование геометрических параметров зубчатых передач, оптимальных параметров и установок инструмента для изготовления колес конических передач</li>
			<li class="item">Разработка программы расчетов оптимизированных вкладов в полную энергию для заданного массива кластеров</li>
			<li class="item">Разработка конструкции спирального компрессора</li>
			<li class="item">Расчеты геометрических параметров главной передачи тракторов.</li>
		</ul>

		<p class="about-us__desc">
			Также участвует в деятельности некоммерческой организации Фонд «Передачи и трансмиссии»
			В числе заказчиков выступают в том числе такие организации, как:
		</p>
		<ul class="list">
			<li class="item">Уральский региональный научный центр Академии Транспорта РФ</li>
			<li class="item">Курганский государственный университет</li>
			<li class="item">Уральский государственный университет путей сообщения</li>
			<li class="item">ОАО «Курганмашзавод»</li>
			<li class="item">ОАО «Челябинский тракторный завод»</li>
			<li class="item">ЗАО «Уралтехмаркет»</li>
			<li class="item">АО «УАЗ»</li>
		</ul>
		<div class="about-us__images">
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo1.webp') }}" alt="" width="" height=""></div>
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo3.webp') }}" alt="" width="" height=""></div>
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo5.webp') }}" alt="" width="" height=""></div>
		</div>
	
		<p class="about-us__desc">
			В 1998 году предприятие прошло перерегистрацию как «общество с ограниченной ответственностью Фирма «СТЭК». Расширился список видов деятельности: 
		</p>
		<ul class="list">
			<li class="item">Проведение НИОКР и выпуск КД</li>
			<li class="item">Разработка и внедрение новых технологий</li>
			<li class="item">Разработка и выпуск продукции научно-технического и производственного назначения, программных средств</li>
			<li class="item">Инновационная, инвестиционная и внедренческая деятельность</li>
			<li class="item">Консалтинг, ноу-хау</li>
		</ul>
		<p class="about-us__desc">
			Приобретаются современные программные продукты для осуществления деятельности предприятия.<br>
			В число сотрудников все больше привлекаются молодые перспективные кадры.  
		</p>   
		
		<p class="about-us__desc">В последние годы приоритетными направлениями становятся разработка новых конструкций разнообразного назначения для противопожарной и спецтехники в том числе для «Академии противопожарной техники и МЧС».</p>
		<p class="about-us__desc">В числе заказчиков  появляются ОАО «Варгашинский завод противопожарного и специального оборудования», «Опытно-конструкторское бюро «Техника» (г. Москва), ГУ НПО «СТиС» МВД России, ЗАО НПП «КлАСС» (г. Москва), ООО "КАВЗ", ЗАО НПО "КЗСТ", ОАО "Пневмостроймашина" (г. Екатеринбург) и др.</p>
		<div class="about-us__images">
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo7.webp') }}" alt="" width="" height=""></div>
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo8.webp') }}" alt="" width="" height=""></div>
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo9.webp') }}" alt="" width="" height=""></div>
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo10.webp') }}" alt="" width="" height=""></div>
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo11.webp') }}" alt="" width="" height=""></div>
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo12.webp') }}" alt="" width="" height=""></div>
		</div>

		<p class="about-us__desc">В области научных исследований и разработок ООО Фирма «СТЭК» сотрудничает с Тюменским государственным нефтегазовым университетом, ФГУ "РНЦ "Восстановительная травматология и ортопедия" имени академика Г.А.Илизарова" и др.</p>
		<div class="about-us__images">
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo13.webp') }}" alt="" width="" height=""></div>
			<div class="about-us__image"><img class="about-us__img" src="" data="{{ asset('public/image/about-us/logo14.webp') }}" alt="" width="" height=""></div>
		</div>
		
		<p class="about-us__desc">Машины, оснащенные оборудованием разработанным ООО Фирма «СТЭК», вызывают интерес всех уровней на выставках спецтехники. Директор ООО Фирмы «СТЭК» награжден медалью «Академии ППТ и МЧС» за вклад в развитие противопожарной и специальной техники.</p>
		<p class="about-us__desc">Сегодня ООО Фирма «СТЭК» обладает высоким потенциалом для решения сложнейших научно-технических задач. Предприятие имеет патенты на изобретения и полезные модели, зарегистрированные в Федеральном институте промышленной собственности.</p> --}}
		
		<p style="font-weight: bold; margin-top: 20px; font-size: 1.5rem">Наша команда</p>
		<div class="comand">
			<div class="comand-image">
				@auth
					<form class="form change-image" action="{{ route('change_image') }}" method="POST" enctype="multipart/form-data">
						<input type="hidden" name="path" value="public/image/about-us/comand1.webp">
						<input type="file" name="image" accept="image/*">
						<div class="change-image__button"></div>
						<button class="form__button button">Загрузить</button>
					</form>
				@endauth
				<img class="comand-image__img" data="{{ asset('public/image/about-us/comand1.webp') }}" alt="" width="" height="">
			</div>
			<div class="comand-image">
				@auth
					<form class="form change-image" action="{{ route('change_image') }}" method="POST" enctype="multipart/form-data">
						<input type="hidden" name="path" value="public/image/about-us/comand3.webp">
						<input type="file" name="image" accept="image/*">
						<div class="change-image__button"></div>
						<button class="form__button button">Загрузить</button>
					</form>
				@endauth
				<img class="comand-image__img" data="{{ asset('public/image/about-us/comand3.webp') }}" alt="" width="" height="">
			</div>
			<div class="comand-image">
				@auth
					<form class="form change-image" action="{{ route('change_image') }}" method="POST" enctype="multipart/form-data">
						<input type="hidden" name="path" value="public/image/about-us/comand2.webp">
						<input type="file" name="image" accept="image/*">
						<div class="change-image__button"></div>
						<button class="form__button button">Загрузить</button>
					</form>
				@endauth
				<img class="comand-image__img" data="{{ asset('public/image/about-us/comand2.webp') }}" alt="" width="" height="">
			</div>
		</div>
	</div>
@endsection