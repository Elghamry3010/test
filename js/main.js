/*
$(function () {
  "use strict";

  $("body").css("paddingTop", $("navbar").innerHeight());

  $(".navbar li a").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  $(".navbar li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(window).scroll(function () {
    $(".block").each(function () {
      if ($(window).scrollTop() > $(this).offset().top) {
        var blockID = $(this).attr("id");

        $(".navbar li a").removeClass("active");
        $('.navbar li a[data-scroll="' + blockID + '"]').addClass("active");
      }
    });
    var scrollToTop = $(".scroll-to-top");
    if ($(window).scrollTop() >= 1000) {
      scrollToTop.fadeIn(400);
    } else {
      scrollToTop.fadeOut(400);
    }
  });
  $(".show-popup").click(function () {
    $(".popup").fadeIn();
  });
  $(".popup").click(function () {
    $(this).fadeOut();
  });
  $(".popup .inner").click(function (e) {
    e.stopPropagation();
  });
  $(".popup .close").click(function (e) {
    e.preventDefault();
    $(".popup").fadeOut();
  });


  $('.from-left').hover(function () {
    $(this).find('span').eq(0).animate({
      with:'100%'
    }, 500);
  }, function() {
    $(this).find('span').eq(0).animate({
      with: 0
    }, 500);
  });
    });

$('.animated-progress span').each(function (){
  $(this).animate({
    with : $(this).attr('data-progress') + '%'
  }, 2000);
});


$('.fixed-menu .fa-gear').on('click', function() {
  $(this).parent('.fixed-menu').toggleClass('is-visible');
  if ($(this).parent('.fixed-menu').hasClass('is-visible')) {
    $(this).parent('.fixed-menu').animate({
      left: 0
    }, 500);
  } else{
    $(this).parent('.fixed-menu').animate({
      left: '-240'
    }, 500);
  }
});




$('.products .product i').on('click', function () {
$(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();
});





$('.view-opption i').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('items').remveClass('list-view grid-view').addClass($(this).date('class'));
  });

  


  $('.error-message').each(function(){
    $(this).animate({
      right: 0
    }, 3000, function(){
      $(this).delay(3000).fadeOut();
    });
  });
  



$('.add-tag').on('keyup', function (event) {
  var keyboardkey = event.keyCode || event.which;
  if (keyboardkey === 188) {
    var thisValue = $(this).val().slice(0, -1);
    $('.tags').append('<span class=""tag-span><i class="fa fa-times"></i>' + thisValue + '</span>')
    $(this).val('')
  }

  $('.tags').on('click', '.tag-span i', function (){
  $(this).parent('.tag-span').fadeOut(700);
  });
});





$('.bounce').on('click', function () {
  $(this).animate({
    marginTop: '-=20px'
  }, 700).animate({
    marginTop: '+=20px'
  }, 500);
});





var zIndexValue = 0;
$('.cards .card').on('click', function (){
  $(this).animate({
    left: '20%',
    marginTop: 30
  }, 400, function(){
    zIndexValue--;
    $(this).css('z-index', zIndexValue);
  }).animate({
    left: (this).css('left'),
  });
});





blinkWarning();
function blinkWarning(){
  $('.blink-warning').fadeOut(1000, function(){
    $(this).fadeIn(1000);
    blinkWarning();
  });
}
*/



