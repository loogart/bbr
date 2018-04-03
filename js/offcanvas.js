$(function () {
    'use strict'
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
})

// parallax

//parallax background jumbotron
var $ = jQuery.noConflict()
$(window).scroll(function () {
    var scroll = $(this).scrollTop()
    $(".section-intro").css({
        "background-position": "110%" + scroll / 3 + "px"
    })
})

//parallax all elements
$(document).ready(function () {
    $(window).bind('scroll', function (e) {
        parallax();
    });
});

function parallax() {
    var scrollPosition = $(window).scrollTop();
    $('.jumbotron-graphic').css('top', (0 + (scrollPosition * -0.2)) + 'px');
    $('#what-we-graphic').css('bottom', (-100 + (scrollPosition * 0.1)) + 'px');
}
