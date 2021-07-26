// 0 
// --------------------------------------------------
// 設定：滑鼠點選個別語言，網址增加#
// 設定：改語言版本
// 設定：下一頁的網址增加#
// --------------------------------------------------
$('.cn').click(function () {
    location.hash = 'cn'
    $('.title').eq(0)
    .text('品牌信仰')
    .addClass('fadein delay05')
    $('.title').eq(1).children().eq(0)
    .text('忠誠度大挑戰')
    .addClass('fadein delay075')
    $('.title').eq(1).children().eq(1)
    .addClass('line delay10')
    .css('margin-top','10px')
    $('.title').eq(2)
    .text('馬上開始')
    .addClass('fadeup delay10')
    .attr("onclick","location='brand_faith_1.html"+location.hash+"'")
})
$('.en').click(function () {
    location.hash = 'en'
    $('.title').eq(0)
    .text('Logo Quizzes!')
    .addClass('fadein delay05')
    .addClass('text_en')
    .css('font-weight','700')
    $('.title').eq(1).children().eq(0)
    .text('Will You Pass?')
    .addClass('fadein delay075')
    .addClass('text_en')
    .css('font-weight','700')
    $('.title').eq(1).children().eq(1)
    .addClass('line delay10')
    $('.title').eq(2)
    .text('START')
    .addClass('text_en')
    .addClass('fadeup delay10')
    .css('letter-spacing','0.1rem')
    .addClass('pt-1')
    .removeClass('pb-1')
    .attr("onclick","location='brand_faith_1.html"+location.hash+"'")
})
if ($(window).width() >= 601) {
$('.jp').click(function () {
    location.hash = 'jp'
    $('.title').eq(0)
    .text('ロゴマーク')
    .addClass('fadein delay05')
    .css('font-weight','700')
    $('.title').eq(1).children().eq(0)
    .html('ちゃんと覚えてる？')
    .addClass('fadein delay075')
    $('.title').eq(1).children().eq(1)
    .addClass('line delay10')
    .css('margin-top','10px')
    $('.title').eq(2)
    .text('スタート')
    .addClass('fadeup delay10')
    .attr("onclick","location='brand_faith_1.html"+location.hash+"'")
})}else{
$('.jp').click(function () {
    location.hash = 'jp'
    $('.title').eq(0)
    .text('ロゴマーク')
    .addClass('fadein delay05')
    .css('font-weight','700')
    $('.title').eq(1).children().eq(0)
    .html('ちゃんと<br>覚えてる？')
    .addClass('fadein delay075')
    .css('white-space','unset')
    .css('font-size','2.75rem')
    .css('line-height','1.25')
    .css('font-weight','700')
    $('.title').eq(1).children().eq(1)
    .addClass('line delay10')
    .css('margin-top','15px')
    $('.title').eq(2)
    .text('スタート')
    .addClass('fadeup delay10')
    .attr("onclick","location='brand_faith_1.html"+location.hash+"'")
})
}
// 設定：將語系存入暫存
// --------------------------------------------------
localStorage.
setItem('selected_langunage', location.hash.substr(1, 2))

// 設定：滑鼠移到語言時logo動畫
// --------------------------------------------------
$('.button').mouseenter(function () {
    $(this).parent().prev()
        .removeClass('animate__zoomInUp')
        .addClass('animate__jello')
})
    .mouseleave(function () {
        $(this).parent().prev()
            .removeClass('animate__jello')
    })

// 設定：滑鼠點選語言時關閉語言視窗
// --------------------------------------------------
$('.button').click(function () {
    $('.select_language')
        .removeClass('animate__bounceIn')
        .addClass('animate__zoomOut')
        localStorage.setItem('selected_langunage', location.hash.substr(1, 2))
    setTimeout(function () {
        $('.select_language').addClass('d-none')
    }, 1000)
})








