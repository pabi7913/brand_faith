// 取出上頁分數sum
// --------------------------------------------------
let total_score = JSON.parse(localStorage.getItem('total_score'))
// console.log('total_score', total_score)

let page = JSON.parse(localStorage.getItem('page'))
// console.log('page', page)

// 設定:score=null時score=0
// --------------------------------------------------
if (total_score != null) {

    // 全部網址後面加上得分
    // --------------------------------------------------
    history.pushState('', '', '?score=' + total_score)
} else {
    total_score = 0
    history.pushState('', '', '?score=0')
}

// 設定:尋找網址
// --------------------------------------------------
let url = location.href
// console.log('url', url);

// 設定:看解答hover
// --------------------------------------------------
$('.answer').mouseenter(function () {
    $(this)
        .removeClass('animate__fadeInUp')
        .removeClass('delay15')
        .addClass('animate__heartBeat')
        .addClass('time-075s')
        .text('這樣好嗎')
    setTimeout(function () {
        $('.answer').
            removeClass('animate__heartBeat')
    }, 750)
})
    .mouseleave(function () {
        $(this)
            .addClass('animate__fadeIn')
            .text('偷看答案')
        setTimeout(function () {
            $('.answer')
                .removeClass('animate__fadeIn')
        }, 750)
    })

// 設定:顯示文字
// --------------------------------------------------
// 設定:當0％時
if (total_score >= 0) {
    $(".number").html('0<span>%</span>')
        .next().text('加油好嗎 !')
    // 設定:當20％時
    if (total_score >= 20) {
        $(".number").html('20<span>%</span>')
            .next().text('藍瘦香菇 !')
            .parent().prev().children().css('animation-name', 'left_circle_20')
            .parent().prev().children().css('animation-name', 'right_circle_20').addClass('right_circle_g')
        // 設定:當40％時
        if (total_score >= 40) {
            $(".number").html('40<span>%</span>')
                .next().text('眼花了嗎 !')
                .parent().prev().children().css('animation-name', 'left_circle_40')
                .parent().prev().children().css('animation-name', 'right_circle_40').addClass('right_circle_g')
            if (total_score >= 60) {
                // 設定:當60％時
                $(".number").html('60<span>%</span>')
                    .next().text('剛好及格 !')
                    .parent().prev().children().css('animation-name', 'left_circle_60')
                    .parent().prev().children().css('animation-name', 'right_circle_60').addClass('right_circle_g')
                // 設定:當80％時
                if (total_score >= 80) {
                    $(".number").html('80<span>%</span>')
                        .next().text('還差一點 !')
                        .parent().prev().children().css('animation-name', 'left_circle_60')
                        .parent().prev().children().css('animation-name', 'right_circle_60').addClass('right_circle_g')
                    // 設定:當100％時,最前面+1
                    if (total_score >= 100) {
                        $(".number").html('100<span>%</span>').css('color', 'var(--or)').css('letter-spacing', ' -.3rem')
                            .next().text('品牌達人 !').css('color', 'var(--or)')
                            .parent().css('padding', '75px 35px')
                            .prev().children().css('animation-name', 'left_circle_100')
                            .parent().prev().children().css('animation-name', 'right_circle_100').addClass('right_circle_g')
                            .parent().parent().addClass('light').addClass('circle_process_100')
                            .next().next().mouseenter(function () {
                                $(this)
                                    .removeClass('animate__fadeInUp')
                                    .removeClass('delay15')
                                    .addClass('animate__heartBeat')
                                    .addClass('time-075s')
                                    .text('不需要吧')
                                setTimeout(function () {
                                    $('.answer').
                                        removeClass('animate__heartBeat')
                                }, 750)
                            })
                            .mouseleave(function () {
                                $(this)
                                    .addClass('animate__fadeIn')
                                    .text('偷看答案')
                                setTimeout(function () {
                                    $('.answer')
                                        .removeClass('animate__fadeIn')
                                }, 750)
                            })
                    }
                }
            }
        }
    }
}

// 設定:按再試一次時清除cookie
// --------------------------------------------------
$('.button').click(function () {
    localStorage.removeItem('total_score')
    localStorage.removeItem('page')
})

// 設定:看解答
// --------------------------------------------------
let click = -1;

$('.answer').click(function () {

    $(this).next().removeClass('d-none')
    setTimeout(function () {
        // $('.answer').text('google')
    }, 400)

    click = click + 1
    // console.log('click', click)
    if (click > 0) {
        $('.answer_card').addClass('animate__flipOutY')
        setTimeout(function () {
            // $('.answer').text('amazon')
            $('.answer_card')
                .addClass('answer_card_width')
                .removeClass('animate__flipOutY').addClass('animate__flipInY')
            $('.answer_card img').attr('src', 'img/amazon-2.png')
        }, 400)
        if (click > 1) {

            $('.answer_card').addClass('animate__flipOutY')
            setTimeout(function () {
                // $('.answer').text('instagram')
                $('.answer_card')
                    .removeClass('answer_card_width')
                    .removeClass('animate__flipOutY').addClass('animate__flipInY')
                $('.answer_card img').attr('src', 'img/instagram-3.png')
            }, 400)
            if (click > 2) {
                $('.answer_card').addClass('animate__flipOutY')
                setTimeout(function () {
                    // $('.answer').text('uber')
                    $('.answer_card')
                        .addClass('answer_card_width')
                        .removeClass('animate__flipOutY').addClass('animate__flipInY')
                    $('.answer_card img').attr('src', 'img/uber-4.png')
                }, 400)
                if (click > 3) {
                    $('.answer_card').addClass('animate__flipOutY')
                    setTimeout(function () {
                        // $('.answer').text('apple')
                        $('.answer_card')
                            .removeClass('answer_card_width')
                            .removeClass('animate__flipOutY').addClass('animate__flipInY')
                        $('.answer_card img').attr('src', 'img/apple-1.png')
                    }, 400)
                }
                if (click > 4) {
                    click = -1
                    $('.answer_card').addClass('animate__flipOutY')
                    setTimeout(function () {
                        // $('.answer').text('偷看答案')
                        $('.answers').addClass('d-none')
                        $('.answer_card')
                            .removeClass('animate__flipOutY').addClass('animate__flipInY')
                        $('.answer_card img').attr('src', 'img/chrome-1.png')
                    }, 400)
                }
            }
        }
    }
})