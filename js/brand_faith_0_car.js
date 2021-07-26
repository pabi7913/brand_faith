// 0 
// --------------------------------------------------
// 設定：滑鼠點選個別語言，網址增加#
// 設定：改語言版本
// 設定：下一頁的網址增加#
// --------------------------------------------------
let language = location.hash.substr(1, 2)
switch(language){
    default:
    // case 'cn':
        $('.title').eq(0)
        .text('品牌信仰')

        $('.title').eq(1).children().eq(0)
        .text('忠誠度大挑戰')

        $('.title').eq(1).children().eq(1)
        .css('margin-top','10px')

        $('.title').eq(2)
        .text('馬上開始')
        .attr("onclick","location='brand_faith_1_car.html"+location.hash+"'")

        $('.part')
        .text('～汽車篇～')
        break;

    case 'en':
        $('.title').eq(0)
        .text('Logo Quizzes!')
        .addClass('text_en')
        .css('font-weight','700')

        $('.title').eq(1).children().eq(0)
        .text('Will You Pass?')
        .addClass('text_en')
        .css('font-weight','700')

        $('.title').eq(2)
        .text('START')
        .addClass('text_en')
        .css('letter-spacing','0.1rem')
        .addClass('pt-1')
        .removeClass('pb-1')
        .attr("onclick","location='brand_faith_1_car.html"+location.hash+"'")

        $('.part')
        .text('~ Vehicle ~')
        .addClass('text_en')
        break;

        case 'jp':
            if ($(window).width() >= 601) {
            $('.title').eq(0)
            .text('ロゴマーク')
            .css('font-weight','700')

            $('.title').eq(1).children().eq(0)
            .text('ちゃんと覚えてる？')
            .css('white-space','unset')
        
            .css('font-weight','700')

            $('.title').eq(1).children().eq(1)
            .css('margin-top','20px')

            $('.title').eq(2)
            .text('スタート')
            .attr("onclick","location='brand_faith_1_car.html"+location.hash+"'")

            $('.part')
            .text('～車～')
            break;}
            else{
                $('.title').eq(0)
                .text('ロゴマーク')
                .css('font-weight','700')

                $('.title').eq(1).children().eq(0)
                .text('ちゃんと覚えてる？')
                .css('white-space','unset')
            
                .css('font-weight','700')

                $('.title').eq(1).children().eq(1)
                .css('margin-top','15px')

                $('.title').eq(2)
                .text('スタート')
                .attr("onclick","location='brand_faith_1_car.html"+location.hash+"'")

                $('.part')
                .text('～車～')
                break;  
            }
}
// // 設定：將語系存入暫存
// // --------------------------------------------------
// localStorage.
// setItem('selected_langunage', location.hash.substr(1, 2))


// 設定：滑鼠移到語言時logo動畫
// --------------------------------------------------
// $('.button').mouseenter(function () {
//     $(this).parent().prev()
//         .removeClass('animate__zoomInUp')
//         .addClass('animate__jello')
// })
//     .mouseleave(function () {
//         $(this).parent().prev()
//             .removeClass('animate__jello')
//     })

// 還不確定要不要用
// 設定：滑鼠點選語言時關閉語言視窗
// --------------------------------------------------
// $('.button').click(function () {
//     $('.select_language')
//         .removeClass('animate__bounceIn')
//         .addClass('animate__zoomOut')
//         localStorage.setItem('selected_langunage', location.hash.substr(1, 2))
//     setTimeout(function () {
//         $('.select_language').addClass('d-none')
//     }, 1000)
// })

// !!!設定：hash=null時要跳出詢問語言
// !!!切換語言小選項









