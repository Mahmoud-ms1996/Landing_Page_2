/* global $, alert, console */

$(function(){

    'use strict';

    // Adjust Header Height

    var header = $('.header'),

        Slider = $('.bxslider');

    header.height($(window).height());

    $(window).resize(function () {

        header.height($(window).height());
    });

    // Add links Active Class

    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
    });

        // Adjust Bxslider List Center

        Slider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2);

        });

        // Trigger bx Slider
    
        Slider.bxSlider({

            pager: false

        });

        // Smooth Scroll To Div

        $('.links li a').click(function () {

            $('html, body').animate({

                scrollTop: $('#' + $(this).data('value')).offset().top
            }, 1000);
        });



    // Our Auto Slider Code

    (function autoSilder (){

        $('.slider .active').each(function (){

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function (){

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSilder();
                
                });

            } else {

                $(this).delay(3000).fadeOut(1000, function (){

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSilder();

                    });
                }
            
        });

    }());

    // Trigger MixItUp

    $('#Container').mixItUp();

    // Adjust Shuffle Links

    $('.shuffle li').click(function(){

        $(this).addClass('selected').siblings().removeClass('selected');

    });

    // Trigger Nice Scroll

    $('html').niceScroll({

        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
    });

});