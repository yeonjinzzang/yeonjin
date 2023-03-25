$(function(){
      /////////////////////
  //동영상
  var vid = $(".vid video").get(0);//원시구조형태로 video태그를 선택하여 vid변수에 할당
  //console.log(vid)
  $(".play").click(function(){//play버튼에 클릭시
    $(this).css("display","none");//play버튼 제거
    $(".stop").css("display","block");//stop버튼 표시
    vid.play();//영상 재생
  });

  $(".stop").click(function(){//stop버튼 클릭시
    $(this).css("display","none");//stop버튼 제거
    $(".play").css("display","block");//play버튼 표시
    vid.pause();//영상 멈춤
  })
  ////////////////////
});


