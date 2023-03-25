// event 슬라이드

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:false,
      autoplay:false,
    //   autoplayTimeout:3000,
    //   autoplayHoverPause:true,
      center: true,
      
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2,
              margin:0
          },
          1000:{
              items:3
          }
      }

  
      });
  });
