$(document).ready(function(){ 

    // navigation bar toggle
    $('#navbar-toggler').click(function(){ 
        $('.navbar-collapse').slideToggle(500);
    });
    
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
           $('.navbar').removeClass('cng-navbar');
        }
        
    });
});

document.getElementById('change').onclick = changeColor;
function changeColor() {
    document.body.style.color = "purple";
    return false;
}   