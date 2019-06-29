$(document).ready(function(){

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
            $('header').addClas('header2');          
        } else {
            $('header').removeClas('heaer2');
        }

    });
});