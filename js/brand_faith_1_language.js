// 設定：取出上頁的語系
// --------------------------------------------------
let language = localStorage.getItem('selected_language')
// console.log('language', language) 
// 設定：改語言
// --------------------------------------------------
switch (language) {
    // en
    default:
        $('.arrow:contains(prev)')
            .html("<i class='fas fa-chevron-left mr-2 pt-1'></i><div class='pt-1'>prev</div>")

        $('.arrow:contains(next)')
            .html("<div class='pt-1 pr-2'>next</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")

        $('.arrow:contains(complete)')
            .html("<div class='pt-1 pr-2'>complete</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")

        if ($(window).width() >= 601) {
            $('.popup .content')
                .html("<i class='fas fa-exclamation-circle mb-sm-1 mb-md-3 animate__animated animate__rubberBand time-075s infinite'></i><br>Not<br>Finished Yet!")
                .addClass('text_en')

            $('.popup .button')
                .text('OK')
                .addClass('text_en')
                .addClass('pt-1')
                
        } else {
            $('.popup')
                .css('padding', '5')

            $('.popup .content')
                .html("<i class='fas fa-exclamation-circle mb-sm-1 mb-md-3 animate__animated animate__rubberBand time-075s infinite'></i><br>Not<br>Finished Yet!")
                .css('font-size', '1.75rem')
                .css('line-height', '1.5')
                .addClass('text_en')

            $('.popup .button')
                .text('OK')
                .css('font-size', '1.5rem')
                .addClass('text_en')
                .addClass('pt-1')
        }
        break;

    case 'jp':
        $('.arrow:contains(prev)')
            .html("<i class='fas fa-chevron-left mr-2 pt-1'></i><div class='pt-1'>前へ</div>")
            .css('font-family', 'Kiwi Maru')

        $('.arrow:contains(next)')
            .html("<div class='pt-1 pr-2'>次へ</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
            .css('font-family', 'Kiwi Maru')

        $('.arrow:contains(complete)')
            .html("<div class='pt-1 pr-2'>完了</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
            .css('font-family', 'Kiwi Maru')

        if ($(window).width() >= 601) {
            $('.popup .content')
                .html("<i class='fas fa-exclamation-circle mb-sm-1 mb-md-3 animate__animated animate__rubberBand time-075s infinite'></i><br>まだ完了<br>していません！")

            $('.popup .button')
                .text('了解です')
        } else {
            $('.popup')
                .css('padding', '5')

            $('.popup .content')
                .html("<i class='fas fa-exclamation-circle mb-sm-1 mb-md-3 animate__animated animate__rubberBand time-075s infinite'></i><br>まだ完了<br>していません！")
                .css('font-size', '1.75rem')
                .css('line-height', '1.5')

            $('.popup .button')
                .text('了解です')
                .css('font-size', '1.5rem')
        }
        break;

    case 'cn':
        $('.arrow:contains(prev)')
            .html("<i class='fas fa-chevron-left mr-2 pt-1'></i><div class='pt-1'>上一題</div>")
            .css('font-family', 'Kiwi Maru')

        $('.arrow:contains(next)')
            .html("<div class='pt-1 pr-2'>下一題</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
            .css('font-family', 'Kiwi Maru')

        $('.arrow:contains(complete)')
            .html("<div class='pt-1 pr-2'>完成</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
            .css('font-family', 'Kiwi Maru')
        if ($(window).width() >= 601) {
            $('.popup .content')
                .html("<i class='fas fa-exclamation-circle mb-sm-1 mb-md-3 animate__animated animate__rubberBand time-075s infinite'></i><br>尚未<br>答題完成！")

            $('.popup .button')
                .text('了解')
        } else {
            $('.popup')
                .css('padding', '5')

            $('.popup .content')
                .html("<i class='fas fa-exclamation-circle mb-sm-1 mb-md-3 animate__animated animate__rubberBand time-075s infinite'></i><br>尚未<br>答題完成！")
                .css('font-size', '1.75rem')
                .css('line-height', '1.5')

            $('.popup .button')
                .text('了解')
                .css('font-size', '1.5rem')
        }
        break;
}
