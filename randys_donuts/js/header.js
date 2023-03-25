//다운네비
$(function()
  {$(".bar_l > li").mouseenter(function(){
    $(".navi_H").slideDown();
  });
  $(".navi").mouseleave(function(){
    $(".navi_H").slideUp();
  });

});
