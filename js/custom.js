$(function(){

    //about slider
    $('.about-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
      });

//gallery====
var containerEl = document.querySelector('.project-lord');

            var mixer = mixitup(containerEl);

//conter part
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
//post-slider
$('.slider1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 1000,
  nextArrow:'.right',
  prevArrow:'.left',
});
$('.left').click(function(){
  $('.left').addClass('bg');
});
$('.right').click(function(){
  $('.right').addClass('bg');
});

});
