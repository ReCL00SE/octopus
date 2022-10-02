$('.my_fade').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.slick-arrow.left'),
  nextArrow: $('.slick-arrow.right'),
});

$(document).ready(function () {
  $('input[data-plugin=\'phone-mask\']').inputmask({
    'mask': '+\\9\\9\\8 (99) 999-99-99'
  })
});