$('.my_fade').slick({
  infinite: false,
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

$(".slick-arrow").click(function () {
  $('video').trigger('pause');
});


$(function () {
  let show = 'show';

  $('input').on('checkval', function () {
    let label = $(this).next('label');
    if (this.value !== '') {
      label.addClass(show);
    } else {
      label.removeClass(show);
    }
  }).on('keyup', function () {
    $(this).trigger('checkval');
  });
});