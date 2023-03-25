$(function(){//document.ready
    $(".tab1>button").click(function(){
      $(".tab1>button").removeClass("active");
      $(this).addClass("active");
      //모든 버튼요소에 active클래스제거하고 클릭한 버튼에 active클래스를 추가하여 하이라이트
    
      var now = $(this).index();//변수now에 클릭한 버튼의 index를 할당
  
      $("#contain_m>div").css("display","none").eq(now).css("display","flex");
      //모든 탭콘텐츠요소를 제거하고 클릭한 버튼과 같은 순번의 탭콘텐츠요소만 화면에 표시
    });
    
        //왼쪽화살표버튼
        $(".prev").click(function(){
          if($(".imgGroup").is(":animated")) return false;//애니메이션 기능이 적용중일때 함수에 있는 코드를 실행하지 않음.
          var last = $(".imgGroup>.box_l").last();//마지막 요소를 변수 last에 할당
          $(".imgGroup").animate({"left":'0px'},500,function(){
            //.wrap의 left값을 -360에서 0으로 변경(오른쪽으로 이동)후 마지막 요소를 첫번째 위치로 변경하고 left값을 -360으로 초기화
            $(this).prepend(last).css("left","-301px");
          })
        });
    
        //오른쪽 화살표
        $(".next").click(function(){
          if($(".imgGroup").is(":animated")) return false;//애니메이션 기능이 적용중일때 함수에 있는 코드를 실행하지 않음.
          var first = $("#swiper .imgGroup>.box_l").first();
    
          $(".imgGroup").animate({"left":"-602px"},500,function(){
            $(this).append(first).css("left","-301px");
          });//.wrap의 left값을 -360에서 -720위치로 이동(왼쪽으로 이동)시켜줌. 그후에 첫번째 요소를 마지막 위치로 이동시키고 left값을 초기값을 변경합니다.
        });

        //배너 슬라이드 
        
        var swiper = new Swiper(".banner_b", {
          spaceBetween: 15,
          centeredSlides: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
    
  
  });
  







// // $(function(){
//     //왼쪽화살표버튼
//     $(".prev").click(function(){
//       if($(".imgGroup").is(":animated")) return false;//애니메이션 기능이 적용중일때 함수에 있는 코드를 실행하지 않음.
//       var last = $(".imgGroup>.box_l").last();//마지막 요소를 변수 last에 할당
//       $(".imgGroup").animate({"left":'0px'},500,function(){
//         //.wrap의 left값을 -360에서 0으로 변경(오른쪽으로 이동)후 마지막 요소를 첫번째 위치로 변경하고 left값을 -360으로 초기화
//         $(this).prepend(last).css("left","-301px");
//       })
//     });

//     //오른쪽 화살표
//     $(".next").click(function(){
//       if($(".imgGroup").is(":animated")) return false;//애니메이션 기능이 적용중일때 함수에 있는 코드를 실행하지 않음.
//       var first = $("#swiper .imgGroup>.box_l").first();

//       $(".imgGroup").animate({"left":"-602px"},500,function(){
//         $(this).append(first).css("left","-301px");
//       });//.wrap의 left값을 -360에서 -720위치로 이동(왼쪽으로 이동)시켜줍니다. 그후에 첫번째 요소를 마지막 위치로 이동시키고 left값을 초기값을 변경합니다.
//     });
//   });



