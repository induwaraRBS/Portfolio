$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleclass('fa-times');
    });

$(window).on('scroll load',function(){

    $('#menu').removeeclass('fa-times');
    $('header').removeclass('toggle');

});

});