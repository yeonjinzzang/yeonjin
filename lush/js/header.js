
$(function(){
  var $firstMenu = $('.lush_Hlist>li'),
      $header = $('header');
  $firstMenu.mouseenter(function(){
    if($(window).width()>980){
      $header.css('height','300px');
    
    } 
    // 980보다 작으면 이벤트 멈추기
  });
  $header.mouseleave(function(){
   if($(window).width()>768)
   {$header.css('height','80px');}
    // if($(window).width()<480){
    //   $header.css('height','60px');}
  });
  // 480보다 작으면 높이 줄이기


  // 헤더 스크롤
  
  // ====================상단메뉴 고정 스크롤시 헤더색 변경=============
 
  
 $(window).scroll(function(){
  if($(this).scrollTop() > 40){
    $header.addClass('sticky');
 }else{
    $header.removeClass('sticky');
 }
 });
  

// #################토글버튼 햄버거메뉴

    /* 모바일/태블릿 SNB */
    $('.lush_Mlist > li > a, .lush_Mlist > li > .arrow-down-up').click(function(){
      $(this).siblings('.sub-snb-list').stop().slideToggle();
    });
    $('.sub-snb-list > li > a, .sub-snb-list > li > .arrow-down-up').click(function(){
      $(this).siblings('.sub2-snb-list').stop().slideToggle();
    });
    /* 화살표 모양 바꾸기 */
    $('.lush_Mlist > li > a').click(function(){
      $(this).siblings('.arrow-down-up').toggleClass('active');
    });
    $('.lush_Mlist > li > .arrow-down-up').click(function(){
      $(this).toggleClass('active');
    });
    $('.sub-snb-list > li > a').click(function(){
      $(this).siblings('.arrow-down-up').toggleClass('active');
    });
    $('.sub-snb-list > li > .arrow-down-up').click(function(){
      $(this).toggleClass('active');
    });
    

    /* 햄버거 메뉴 클릭시 메뉴 소환 */
    $('.toggle').click(function(ev){
      $('.snb-m-bg').fadeIn();
      $('.snb, .snb-close').addClass('active');

    });
    $('.snb-close > a').click(function(){
      $('.snb-m-bg').fadeOut();
      $('.snb, .snb-close').removeClass('active');
    
    });

});