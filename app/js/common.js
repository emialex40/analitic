$(document).ready(function(){

    $(window).scroll(function(){
        $(".anch a").each(function () {
            var window_top = $(window).scrollTop();
            var div_1 = $(this).attr('href');
            var div_top = $(div_1).offset().top;

            if (window_top > div_top - 150){
                $('.anch').find('a').removeClass('shot');
                $('.anch').find('a[href="'+div_1+'"]').addClass('shot');
            }
            else{
                $('.anch').find('a[href="'+div_1+'"]').removeClass('shot');
            };
        });
    });


    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $(this).addClass('shot');
        $(this).siblings().removeClass('shot');
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 120
        }, 1000);
        return false;
    });


    //zoom fonts in circle
    $('.active_link, .js_link').hover(function() {
        $(this).siblings().children('.js_font').animate({fontSize: "26px"}, 500);
    }, function() {
        $(this).siblings().children('.js_font').animate({fontSize: "24px"}, 500);
    });


    /*------ clients tubs toggle --------- */
    var clients = $('.our__head_icons ul li');


    $(clients).on('click', function(){
        event.preventDefault();
        if(!$(this).hasClass('activate')){
            var i = $(this).index();

            $(clients).children().removeClass('activate');
            $('.item_hide.visible').removeClass('visible');
            $(this).children().addClass('activate');
            $('.item_hide').eq($(this).index()).addClass('visible');
        }
    });

    /*----- active tabs toggle ---------*/
    var tab = $('.tabs ul li');

    $(tab).on('click', function(){
        if(!$(this).hasClass('open')){
            var i = $(this).index();

            $('.tabs ul li').removeClass('open');
            $('.tab_content.active').css('display','none').removeClass('active');
            $(this).addClass('open');
            $($('.tabs_content').children('.tab_content')[i]).fadeIn(1000).addClass('active');
        }
    });

    /*----- top menu fixed slide up ---------*/
    $(window).scroll(function(){
    var windowScroll = $(window).scrollTop();
    //var headerHeight = $('.header').height();
    var navHeight = $('.main_menu').height();
    var nav = $('.main_menu');

    if(windowScroll > 120 + navHeight - 60) {
        nav.slideDown();
    }else{
        //nav.removeAttr('style');
        nav.slideUp();
    }
    });

    /*------ slick slider --------*/
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 8000,
        arrows: false,
        dots: true,
        nextArrow: '<span class="prev"></span>',
        prevArrow: '<span class="next"></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});