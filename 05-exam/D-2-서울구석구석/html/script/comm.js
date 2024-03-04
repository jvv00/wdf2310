// $(document).ready(function(){
//     $(".menu").mouseover(function(){
//         $(this).find(".depth2").stop().slideDown();
//     });
//     $(".menu").mouseout(function(){
//         $(this).find(".depth2").stop().slideUp();
//     })
// })

$(function () {
    // 현재 보이는 슬라이드의 인덱스
    let now = 0;
    // 슬라이드 개수
    const slideCount = $('.slide li').length
    const slideList = $('.slide')

    // // 슬라이드 이동 함수
    // function moveSlide() {
    //     slideList.css('left', 100 * -now + '%')
    // }

    setInterval(function (){
        // now값을 1씩 증가시키고
        // slidecount(3)으로 나눈 나머지 값을 now에 대입
        // (0 + 1) % 3 = 1(나머지)
        now = (now + 1) % slideCount
        slideList.css('left', 100 * -now + '%')
    }, 3000)
})

// tabs
$(function () {
    $(".tab-tit").on('click', function(event){

        event.preventDefault()

        $('.tab').removeClass('active')
        $(this).parents('.tab').addClass('active')
    })
})

$(function (){
    $(".bbs li:first-child").on("click", function(){
        $("#modal").css("display", "flex");
    })
    $("#modal button").on("click", function(){
        $("#modal").css("display", "none");
    })
})