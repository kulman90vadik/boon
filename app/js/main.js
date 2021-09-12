$(function(){

    $('.header__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.header__btn-item').toggleClass('header__btn-item--active');
    });

    $('.menu__head').on('click', function(){
        $(this).next('.menu__holder').slideToggle();
        $(this).children('.menu__plus').toggleClass('menu__minus')
    });

    $('.discount__list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });





});