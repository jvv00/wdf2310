// $(document).ready(function(){
//     $(".depth1 > li").mouseover(function(){
//         $(this).find(".depth2").stop().slideDown
//     });
//     $(".depth1 > li").mouseout(function(){
//         $(this).find(".depth2").stop().slideUp
//     });
// })

$(function(){
    let now = 0;

    const slideCount = $(".slide li").length
    const slideList = $(".slide ul")

    // function moveSlide() {
    //         slideList.css('left', 100 * -now + '%')
    //     }
    setInterval(function(){
        now = (now + 1) % slideCount
        slideList.css("left" , 100 * -now + "%")
    }
    ,3000
    )
})

$(function (){
    $(".bbs li:first-child").on("click", function(){
        $("#modal").css("display", "flex");
    })
    $("#modal button").on("click", function(){
        $("#modal").css("display", "none");
    })
})