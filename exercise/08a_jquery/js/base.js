$(document).ready(function(){
    $('.demo').slick({
        accessibility: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: false
    });

    $('.dropdown-submenu > a').submenupicker();
});

