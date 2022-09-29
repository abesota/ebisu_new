$(function(){
  $(".nav_toggle").click(function () {
    $(this).toggleClass('active');
    $(".sp_nav").toggleClass('panelactive');
    $(".is-animated").toggleClass('active');
    $(".bg_cover").toggleClass('cover');
  });

  $(".sp_nav a").click(function () {
      $(".nav_toggle").removeClass('active');
      $(".sp_nav").removeClass('panelactive');
      $(".is-animated").removeClass('active');
      $('.bg_cover').removeClass('cover');
  });

  $(document).on('click','.cover', function() {
    $('.nav_toggle').removeClass('active');
    $(".sp_nav").removeClass('panelactive');
    $(".is-animated").removeClass('active');
    $('.bg_cover').removeClass('cover');
  });

  // slider
  $('.service .slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '14.6%'
  });
  // slider

  // contents-animation
  function fadeAnime(){
    $('.fadeUpTrigger').each(function(){
      let elemPos = $(this).offset().top+10;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUP');
      }else{
      $(this).removeClass('fadeUP');
      }
    });

    $('.fadeLeftTrigger').each(function(){ 
      let elemPos = $(this).offset().top+10;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeLeft');
      }else{
      $(this).removeClass('fadeLeft');
      }
    });

    $('.fadeRightTrigger').each(function(){ 
      let elemPos = $(this).offset().top+10;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRight');
      }else{
      $(this).removeClass('fadeRight');
      }
    });
  }

  $(window).scroll(function (){
    fadeAnime();
  });

  $(window).on('load', function(){
    fadeAnime();
  });
  // contents-animation

});


