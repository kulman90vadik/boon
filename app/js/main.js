$(function(){
    
    let addressInput = document.querySelector('.identity-address__input');
    let addressItem = document.createElement('li');
    addressItem.classList.add('identity-address__item');
    addressInput.addEventListener('input', function() {
        addressItem.innerHTML = addressInput.value;
        document.querySelector('.identity-address__list').append(addressItem);
        addressInput.value = ' ';
    });
    // addressInput.addEventListener('blur', function() {
    //     addressInput.value = ' ';
    // });
    
    $('.header__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.header__btn-item').toggleClass('header__btn-item--active');
    });

    $('.menu__head').on('click', function(){
        $(this).next('.menu__holder').slideToggle();
        $(this).children('.menu__plus').toggleClass('menu__minus')
    });

    $('.js-range-slider').ionRangeSlider({
        onStart: function (data) {
            $('.sidebar__price-min').text(data.from);
            $('.sidebar__price-max').text(data.to);
        },
        onChange: function (data) {
            $('.sidebar__price-min').text(data.from);
            $('.sidebar__price-max').text(data.to);
        }
    });

    $('.discount__list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });

    $('.details__slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.details__slider-bottom'
    });
    $('.details__slider-bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.details__slider-top',
        prevArrow: '<button type="button" class="slick-prev"><svg class="details__icon" aria-label="стрелка влево"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="details__icon" aria-label="стрелка вправо"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>'
    });

    $('.details__item').closest('div').width(82);

    $('.details__input').styler();

    // добавляем в корзину товар
    let detailsBtn = document.querySelector('.details__btn');
    let headerNumber = Number(document.querySelector('.header__number').innerHTML);
    detailsBtn.addEventListener('click', function(){
        document.querySelector('.header__number').innerHTML = ++headerNumber;
    });
    
    // добавление количества букетов для заказа
    let detailsPlus = document.querySelector('.details .jq-number__spin.plus');
    let detailsMinus = document.querySelector('.details .jq-number__spin.minus');
    let detailsPriceNumber = Number(document.querySelector('.details__price-number').innerHTML);
    let detailsPriceNumberOld = Number(document.querySelector('.details__price-numberOld').innerHTML);

    detailsPlus.addEventListener('click', function(){
        let detailsInput = +document.getElementById('number').value;
        let sum = detailsPriceNumber * detailsInput;
        let sumOld = detailsPriceNumberOld * detailsInput;
        document.querySelector('.details__price-number').innerHTML = sum;
        document.querySelector('.details__price-numberOld').innerHTML = sumOld;
    });
    detailsMinus.addEventListener('click', function(){
        let detailsPriceNumberMinus = Number(document.querySelector('.details__price-number').innerHTML);
        let detailsPriceNumberMinusOld = Number(document.querySelector('.details__price-numberOld').innerHTML);
        if (detailsPriceNumberMinus > detailsPriceNumber && detailsPriceNumberMinusOld > detailsPriceNumberOld) {
            let sum = detailsPriceNumberMinus - detailsPriceNumber;
            let sumOld = detailsPriceNumberMinusOld - detailsPriceNumberOld;
            document.querySelector('.details__price-number').innerHTML = sum;
            document.querySelector('.details__price-numberOld').innerHTML = sumOld;
        }
    });

    let loginFormIcon = document.querySelector('.login-form__icon');
    let loginFormPassword = document.querySelector('.login-form__input--password');
    loginFormIcon.addEventListener('click', function(){
        loginFormIcon.classList.toggle('login-form__icon--active');
        if(loginFormPassword.getAttribute('type') === 'password') {
            loginFormPassword.setAttribute('type', 'text');
        } else {
            loginFormPassword.setAttribute('type', 'password');
        }
    }); 
    
});