$(document).ready(function(){
    //STICKY NAV BAR SCRIPT
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    var i = 0;
    //TOGGLE MENU SCRIPT
    $('.menu-btn').click(function(){
        if(i==0){
            $('.navbar .menu').addClass("active")
            i=1;
        } else{
            $('.navbar .menu').removeClass("active");
            i=0;
        }
        
    })

})