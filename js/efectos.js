/*menu*/
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
  nav.classList.toggle('movimiento');
});

/*SCROLL*/


function scrollNav() {
  $('.menu a').click(function(){  
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

scrollNav();

/*SCROLL END*/