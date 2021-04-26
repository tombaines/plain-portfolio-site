$(document).ready(function(){
    //STICKY NAV BAR SCRIPT
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    //TOGGLE MENU SCRIPT
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    })

})