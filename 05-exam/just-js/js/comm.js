// html 페이지를 로드한 후 실행
// $(ducument).ready(function(){});
$(function () {
  // gnb
  // 변수 선언
  const $gnb = $("#gnb");
  const $gnbDepth1 = $gnb.find(".depth1 > li") ;

  $gnbDepth1.on("mouseenter", function () {
    $(this).find(".depth2").stop().slideDown(300);
    // key 값이 2개 이상일 때는 {}로 묶어서 처리
    // {kdy1 :value1, key2: value2}
    $(this).children("a").css({
      "background-color":"#333", color:"#fff",

    });

    // key 값이 1개일 때는 {} 생략 가능
    // key, value
    // $(this).children("a").css("background-color", "#333")
  });

  $gnbDepth1.on("mouseleave", function(){
  $(this).find(".depth2").stop().slideUp(500);
  $(this).children("a").css({
    "background-color":"#fff", color: "#333"
  });
});


  // modal
  const $modal = $("#modal");
  // modal창 열기
  // .list-bbs li:first-child 클릭했을 때
  $(".list-bbs li:first-child").on("click", function () {
    // modal 열기
    // #modal 보이게
    $modal.show();
  });
  // #modal .btn-close 클릭했을 때
  // $("#modal .btn-close")
 $modal.find(".btn-close").on("click", function () {
    // modal 닫기
    // #modal 감추기
    $modal.hide();
  });

  // tabs
  const $tabs = $("#tabs");
  const $tabsSecg = $tabs.find(".sec-g");
  // 기본세팅
  // #tabs .sec-g 에 있는 .active를 찾아서 삭제해라
  $tabsSecg.removeClass("active");
  // #tabs .sec-g:first-child 에 .active 추가
  $tabsSecg.find(":first-child").addClass("active");
  // .sec-tit 클릭했을 때
  $tabs.find(".sec-tit").on("click", function () {
    // 기존에 있던 .active 삭제
    $tabsSecg.removeClass("active");
    // this(그 아이)의 parent(부모)에게 .active 추가
    $(this).parent().addClass("active");
  });
  
  // slide
  let now = 0;
  const $slide = $(".list-slide");
  let slideCount = $slide.find("li").length;

  // 3초 마다 슬라이드가 이동
  // setInterval(함수, 시간)
  setInterval (function () {
    // now가 1씩 증가하는 연산
    // now 재할당
    // now = now + 1;
    // 나머지 연산자
    now = (now + 1) % slideCount;
    // now(1) = now(0) + 1;
    // now(2) = now(1) + 1;
    // now(3) = now(2) + 1;
    updateSlidePosition()
 

  }, 3000);
   // .slide .list-slide의 left 값이 이동
  function updateSlidePosition(){
    $slide.css({
      left: 100 * now * -1 + "%",
    });
  }
});
