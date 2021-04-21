@extends('homepage')
@section('content')
    <div class="desc_photo_bg"></div>
    <div class="upper_preview">
        <div class="title_upper_preview">
            {{-- <h1>Инжиниринговая компания Фирма СТЭК</h1> --}}
            <h2>От идеи до готового проекта</h2>
        </div>
        <img data="{{ asset('public/image/homepage/blueprint1.webp ') }}" alt="">
    </div>


    {{-- <div class="desc_photo parallax_effect container_hp">
        <div class="organization_desc animate_emergence">
            <h2>О фирме</h2>
            <p>
                Компания существует на рынке 30 лет. 
                Основные виды деятельности: разработка конструкторской документации, научно-исследовательская деятельность, автоматизация технологических процессов и оборудования.   
            </p>
        </div>
        <div class="photo_presentation">
            <div class="company1"><img data="{{ asset('public/image/homepage/company1.webp') }}" alt=""></div>
            <div class="company2"><img data="{{ asset('public/image/homepage/company2.webp') }}" alt=""></div>
            <div class="company3"><img data="{{ asset('public/image/homepage/company3.webp') }}" alt=""></div>
        </div>
    </div> --}}
    {{-- ####################################################################### --}}
    <div class="desc_photo container_hp">
        <div class="organization_desc animate_emergence">
            <h2>О фирме</h2>
            <p>
                Компания существует на рынке 30 лет. 
                Основные виды деятельности: разработка конструкторской документации, научно-исследовательская деятельность, автоматизация технологических процессов и оборудования.   
            </p>
        </div>
        <div class="photo_presentation anim_translate">
            <div class="company1"><img data="{{ asset('public/image/homepage/company1.webp') }}" alt=""></div>
            <div class="company2"><img data="{{ asset('public/image/homepage/company2.webp') }}" alt=""></div>
            <div class="company3"><img data="{{ asset('public/image/homepage/company3.webp') }}" alt=""></div>
        </div>
    </div>
    {{-- ####################################################################### --}}


    <div class="advantages container_hp">
        <h2>Преимущества</h2>
        <div>
            <div class="animate_emergence">
                <div class="image">
                    <svg aria-hidden="true" focusable="false" class="cogs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z">
                        </path>
                    </svg>
                </div>
                <div>
                    <span>Комплексный подход</span>
                    <ul>
                        <li>Полный цикл работ (разработка технического задания, РКД, обоснований, технологий, расчетов, согласование, сопровождение при изготовлении и пусконаладке)
                        Комплексный подход при разработке проекта по механике, гидравлике, пневматике, электронике, программному обеспечению</li>
                        <li>Более 100 выполненных проектов и изделий, применение уникальных, стандартизированных и опробованных решений</li>
                        <li>Проекты для МЧС, МВД, медицины, нефтегазовой отрасли, дорожной спецтехники, робототехники</li>
                    </ul>
                </div>
            </div>
            <div class="animate_emergence">
                <div class="image">
                    <svg aria-hidden="true" focusable="false" class="user-tie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z">
                        </path>
                    </svg>                    
                </div>
                <div>
                    <span>Специалисты в своей области</span>
                    <ul>
                        <li>Высокий уровень подготовки специалистов по разным областям науки и техники, знание ГОСТ, ЕСКД</li>
                        <li>Все специалисты имеют высшее образование, опыт работы по специальности не менее 10 лет, многие окончили аспирантуру</li>
                        <li>Опыт разработки сложных технических изделий более 10 лет</li>
                        <li>Специалисты оценят различные варианты конструкции на предмет технологичности изготовления изделий и оптимизации затрат на производство </li>
                        <li>Технологи оценят материалоемкость изготовления продукции, оптимизируют  процесс изготовления деталей и узлов и  согласуют их с заводом-изготовителем</li>
                    </ul>
                </div>
            </div>
            <div class="animate_emergence">
                <div class="image">
                    <svg aria-hidden="true" focusable="false" class="wallet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z">
                        </path>
                    </svg>                    
                </div>
                <div>
                    <div>
                        <span>Минимальные сроки разработки.</span>
                        <span>Минимизация затрат</span>
                    </div>
                    <ul>
                        <li>Удаленная работа с оплатой по фактическому объему</li>
                        <li>Заказчику нет необходимости содержать постоянно свой полный штат сотрудников</li>
                        <li>При резких скачках объемов разработки вы всегда можете обратиться к специалистам и передать часть работы </li>
                    </ul>
                </div>
            </div>
            {{-- <div class="animate_emergence">
                <div class="image"><img data="{{ asset('public/image/logo/icon.ico') }}" alt=""></div>
                <div>
                    Минимальные сроки разработки от идеи до готового проекта.
                </div>
            </div> --}}
        </div>
    </div>
    {{-- <div class="our_works container_hp animate_emergence">
        <h2>Лучшие работы</h2>
        <div class="developments">
            @foreach ($developments as $development)
                <div class="development">
                    <div class="image"><img data="{{ asset($development->preview_development) }}" alt=""></div>
                    <span>{{ $development->name }}</span>
                    <form action="{{asset('/development')}}/{{$development->id}}" method="GET">
                        <button>Подробнее</button>
                    </form>
                </div>
            @endforeach
        </div>
    </div> --}}
    <div class="cooperate_with_us container_hp">
        <h2>Сотрудничают с нами</h2>
        <div class="image">
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo1.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo3.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo5.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo7.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo8.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo9.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo10.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo11.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo12.png') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo13.gif') }}" alt=""></div>
            <div class="animate_emergence"><img data="{{ asset('public/image/about_us/logo14.png') }}" alt=""></div>
        </div>
    </div>
@endsection