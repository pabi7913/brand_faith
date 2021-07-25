// 0 
// --------------------------------------------------
// 設定：尋找網址
let url = location.hash
console.log('url', url);

let lan = url.substr(1, 2)
console.log('lan', lan);


// 設定：滑鼠點選個別語言，網址增加#
// 設定：改語言版本
$('.cn').click(function () {
    location.href = 'brand_faith_0.html#cn'
    $('.title').eq(0)
    .text('品牌信仰')
    $('.title').eq(1)
    .text('忠誠度大挑戰')
    $('.title').eq(2)
    .text('馬上開始');
})
$('.en').click(function () {
    location.href = 'brand_faith_0.html#en'
    $('.title').eq(0)
    .text('Logo Quizzes!')
    .addClass('text_en')
    .css('font-weight','700')
    $('.title').eq(1)
    .text('Will You Pass?')
    .addClass('text_en')
    .css('font-weight','700')
    $('.title').eq(2)
    .text('START')
    .addClass('text_en')
    .css('letter-spacing','0.1rem')
    .addClass('pt-1')
    .removeClass('pb-1');
})
$('.jp').click(function () {
    location.href = 'brand_faith_0.html#jp'
    $('.title').eq(0)
    .text('ロゴマーク')
    .css('font-weight','700')
    $('.title').eq(1)
    .html('ちゃんと<br>覚えてる？')
    .css('white-space','unset')
    .css('font-size','2.75rem')
    .css('line-height','1.25')
    .css('font-weight','700')
    $('.title').eq(2)
    .text('スタート')
})

// 設定：滑鼠移到語言時logo動畫
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
$('.button').click(function () {
    $('.select_language')
        .removeClass('animate__bounceIn')
        .addClass('animate__zoomOut')
    setTimeout(function () {
        $('.select_language').addClass('d-none')
    }, 1000)
})





