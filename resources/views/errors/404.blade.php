<h2>{{ $exception->getMessage() }}</h2>
@php
	header('Location: /' );
	exit;
@endphp