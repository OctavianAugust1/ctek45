@extends('homepage')
@section('content')
    <div class="desc_photo_bg"></div>
    <div class="upper_preview">
        <div class="title_upper_preview animate_emergence">
            <h1>Инжиниринговая компания Фирма СТЭК</h1>
            <h2>От идеи до готового проекта</h2>
        </div>
        <img data="{{ asset('public/image/homepage/blueprint1.webp ') }}" alt="">
    </div>
    <div class="desc_photo container_hp">
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
    </div>
    <div class="advantages container_hp">
        <h2>Преимущества</h2>
        <div>
            <div class="animate_emergence">
                <div class="image"><img data="{{ asset('public/image/homepage/cogs1.svg') }}" alt=""></div>
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
                <div class="image"><img data="{{ asset('public/image/homepage/user-tie2.svg') }}" alt=""></div>
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
                <div class="image"><img data="{{ asset('public/image/homepage/wallet3.svg') }}" alt=""></div>
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