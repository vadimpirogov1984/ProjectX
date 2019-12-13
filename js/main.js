$(function() {
  $(".multiple-review").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


$(document).ready(function() {
        $('.burger').click(function(event) {
          $('.burger,.mobile_main').toggleClass('active');
        });
      });

$(document).ready(function() {
        $('.btn_close').click(function(event) {
          $('.formre.on,.formre').toggleClass('close');
        });
      });

$(function () {
      $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "0",
      });
    });

$('.single-item').slick({
      arrows: false,
      dots: true,
    });

$(document).ready(function() {
        $('.btn').click(function(event) {
          $('.btn,.formre').toggleClass('on');
        });
      });