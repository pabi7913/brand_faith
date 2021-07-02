// base
// ---------------------

// 0
// ---------------------

// 1
// ---------------------
$('.start').click(function(){
    $(this).parent().fadeOut(500);
    setTimeout(function(){ 
        $('.one').fadeIn(100);
     }, 500);
    
})



// setTimeout(function() {
//     $('.pipi_plane_big img').toggleClass('animate__animated animate__pulse').toggleClass('infinite')
// }, 2000);