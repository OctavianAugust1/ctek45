@extends('app')
@section('title', 'Связь с нами - ')
@section('content')
	<h2>Вы можете связаться для сотрудничества с нами</h2>
	<form action="{{ route('mail') }}" method="POST">
		@csrf
		<div class="form-box">
			<label>Ваш email</label>
			<input type="email" name="email" required>
		</div>
		<div class="form-box">
			<label>Имя</label>
			<input type="text" name="name" required>
		</div>
		<div class="form-box">
			<label>Сообщение</label>
			<textarea name="message" required></textarea>
		</div>
		
		{{-- capcha --}}
		{{-- <div class="form-box">
			<label></label>
			<input type="text">
		</div> --}}

		<button>Отправить</button>
	</form>
@endsection