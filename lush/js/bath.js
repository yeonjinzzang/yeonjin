$(function () {


  
  //  ======================Isotope 플로그인================================= //

  var $topeContainer = $('.container_Wl');//버튼4개목록 모두 전체담고 있는 선택자
  var $filter = $('.button_1');//필터 버튼을 담고있는 선택자 "*",".vegan"

  // filter items on button click
  
  //필터 필요 없음
    $filter.on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $topeContainer.isotope({filter: filterValue});
        console.log($(this))
        $(this).parent().find("button").removeClass('active2');
        $(this).addClass('active2');
    });
    

//   init Isotope
  $(window).on('load', function () {
      var $grid = $topeContainer.each(function () {
          $(this).isotope({
              itemSelector: '.menus_L',
              layoutMode: 'fitRows',
              percentPosition: true,
              animationEngine : 'best-available',
              masonry: {
              columnWidth: '.menus_L'
              }
          });
      });
  });


 // ================배너와 콘텐츠 내용 바꾸기 버튼4개======================//


  $(".tab button").click(function(){
    $(".tab button").removeClass("active1");
    $(this).addClass("active1");
    


    var now = $(this).index();
    var target = $("#contain_Lush > div").css("display","none").eq(now); //탭 클릭시 보여줄 내용 선택   
    //console.log(target)
    target.css("display","block");//타겟이 보이도록

    $(".banner>li").css("display","none").eq(now).css("display","block");

    $topeContainer.isotope({filter: '*'}); //추가
    
    $("#contain_Lush > div").each(function(){//each문 부모요소부터 선택해야함
      $(this).find(".tag_L").removeClass("active2").eq(0).addClass("active2");
    })
    
  });


});

  
// ===========================
   // [ Show / hide modal search ]*/
//     $('.js-show-modal-search').on('click', function(){
//       $('.modal-search-header').addClass('show-modal-search');
//       $(this).css('opacity','0');
//   });

//   $('.js-hide-modal-search').on('click', function(){
//       $('.modal-search-header').removeClass('show-modal-search');
//       $('.js-show-modal-search').css('opacity','1');
//   });

//   $('.container-search-header').on('click', function(e){
//       e.stopPropagation();
//   });



     /*==================================================================
    [ Filter / Search product ]*/
//     $('.js-show-filter').on('click',function(){
//       $(this).toggleClass('show-filter');
//       $('.panel-filter').slideToggle(400);

//       if($('.js-show-search').hasClass('show-search')) {
//           $('.js-show-search').removeClass('show-search');
//           $('.panel-search').slideUp(400);
//       }    
//   });

//   $('.js-show-search').on('click',function(){
//       $(this).toggleClass('show-search');
//       $('.panel-search').slideToggle(400);

//       if($('.js-show-filter').hasClass('show-filter')) {
//           $('.js-show-filter').removeClass('show-filter');
//           $('.panel-filter').slideUp(400);
//       }    
//   });


// });