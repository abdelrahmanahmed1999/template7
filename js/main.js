/*global $,jquery,alert*/

$(document).ready(function () {
    "user strict"



    //trigger niceScroll
    $('html').niceScroll({
        cursorcolor:"#ff4008",
        cursorborder: '1px solid #ff4008',    
    });

    $(window).scroll(function () {
        var nav = $('.navbar');
        $(window).scrollTop() >= nav.height() ? nav.addClass('scrolled') :  nav.removeClass('scrolled');
    });


    var select=$('.tab ul li');

    select.click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');

       if($(this).data('class') == ".tab-one"){
           $('.tab-one-content').css('display','block').siblings().css('display','none');
       }
       else if($(this).data('class') == ".tab-two"){
        $('.tab-two-content').css('display','block').siblings().css('display','none');
       }
       else {
        $('.tab-three-content').css('display','block').siblings().css('display','none');

       }

    });



});