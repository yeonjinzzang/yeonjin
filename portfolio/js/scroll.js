$(window).load(function () {
  var left = $("#main_left"); //왼쪽
  var right = $("#main_right"); //오른쪽
  var sectionNum = $("section").size(); //section 개수
  var workListNum = $("#work_list").children().size(); // worklist 요소 개수
  var change = $("#change"); //늘어나는 박스
  var windowWidth;
  var contactNum = $("#contact1").children().size(); //contact1 요소 개수

  mainAni();
  inEvent();

  function inEvent() {
    //함수 실행
    $(window).on("resize", mainAni);
    $(window).on("scroll", mainAni);
    $(window).on("scroll", scrollAni);
  }

  // 메인화면 스크롤 애니메이션

  function mainAni() {
    var windowWidth = $(window).width();
    //해상도 980px 이상일 때만 적용되는 애니메이션
    if (windowWidth > 980) {
      var scrollTop = $(this).scrollTop();
      change.css({ width: scrollTop * 1.5 });
    }
  }

  // section 스크롤 애니메이션

  function scrollAni() {
    var scrollTop = $(this).scrollTop();

    // 콘텐츠 제목 애니메이션
    for (i = 0; i < sectionNum; i++) {
      if (scrollTop >= $("section").eq(i).offset().top * 0.95) {
        $("section")
          .eq(i)
          .find("h2")
          .children("a")
          .animate({ opacity: 1 }, 500, "easeOutCubic");
      }
    }
    //work 애니메이션
    for (i = 0; i < workListNum; i++) {
      if (scrollTop >= $("#work_list").children().eq(i).offset().top * 0.9) {
        $("#work_list")
          .children()
          .eq(i)
          .children()
          .first()
          .animate({ opacity: "1", left: "0" }, 400, "easeOutCubic");
        $("#work_list")
          .children()
          .eq(i)
          .children()
          .last()
          .animate({ opacity: "1", right: "0" }, 400, "easeOutCubic");
      }
    }
  }
});
