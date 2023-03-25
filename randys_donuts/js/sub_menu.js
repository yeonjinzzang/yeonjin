$(function(){//document.ready
  $(".tab>button").click(function(){
    $(".tab>button").removeClass("active");
    $(this).addClass("active");
    //모든 버튼요소에 active클래스제거하고 클릭한 버튼에 active클래스를 추가하여 하이라이트시켜줍니다.
  
    var now = $(this).index();//변수now에 클릭한 버튼의 index를 할당

    $("#contain>div").css("display","none").eq(now).css("display","block");//모든 탭콘텐츠요소를 제거하고 클릭한 버튼과 같은 순번의 탭콘텐츠요소만 화면에 표시해줍니다.
  });
  

});
