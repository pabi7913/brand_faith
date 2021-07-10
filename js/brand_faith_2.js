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

// 設定:看解答hover:手機版不顯示
// --------------------------------------------------
// 1.
// 條件1:視窗尺寸>=601
if ($(window).width() >= 601) {
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
} else {
    $('.answer').unbind('mouseenter').unbind('mouseleave')
}
// 2.
// 設定:調整螢幕大小時
$(window).resize(function () {
    if ($(window).width() >= 601) {
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
    }
    else {
        $('.answer').unbind('mouseenter').unbind('mouseleave')
    }
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
                    // 設定:當100％時
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
// share
// ----------------------------------------------
let share_content = document.querySelector('.share_content');
// let this_page = location.pathname !== '/';
let this_page = location.href;
// let notCategory = location.pathname.indexOf('category') === -1;
// console.log(location.pathname.indexOf(2))
// let notTag = location.pathname.indexOf('tag') === -1;
// console.log(notTag)

// step1:載入JS
// ---------------------
function plus_share_js(link) {
    // 設定script標籤
    let share_js = document.createElement("script");
    // 設定script內的連結=link內容
    // ???tweet沒有會出錯
    share_js.src = link;
    // 設定加在head後面
    document.head.appendChild(share_js);
}
//cdn
// ---------------------
// line
plus_share_js('https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js');
// fb
plus_share_js('https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.0');
// twitter
plus_share_js('https://platform.twitter.com/widgets.js');
// console.log(plus_share_js)

// 條件1:有找到share_content class(和位在這ㄧ頁時)
if (share_content
    // && this_page
    // && notCategory && notTag
) {
    // 抓取實際完整網址
    // ???href會出錯
    // let this_page_full_link = document.querySelector('[rel="canonical"]').href;
    // let this_page_full_link = document.querySelector('[rel="canonical"]');
    // let this_page_full_link = location.pathname;
    // ???答案是null
    // console.log(this_page_full_link)

    // 設定各個按鈕架構
    let fb = '<div class="fb-like" data-url="' + 'https://pabi7913.github.io/brand_faith/brand_faith_0.html'+ '"data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>';
    let line = '<div class="line-it-button" data-lang="zh_Hant" data-type="share-a" data-ver="3" data-url="' + 'https://pabi7913.github.io/brand_faith/brand_faith_0.html'+ '" data-color="default" data-size="small" data-count="true" style="display: none;"></div>';
    let twitter = '<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>';

    // 設定外包group
    let share_buttons =
        '<ul class="share_buttons">' +
        '<li>' + fb + '</li>' +
        '<li>' + line + '</li>' +
        '<li>' + twitter + '</li>' +
        '</ul>';

    // 在share_content的最前面插入上面share_group
    share_content.insertAdjacentHTML('afterbegin', share_buttons);

    // if (document.querySelector('.sharedaddy')) {
    //     let originShare = document.querySelector('.sharedaddy');
    //     originShare.insertAdjacentHTML('beforebegin', share_buttons);
    // }
}
// 設定:分享網址得分
// ----------------------------------------------
// 設定:從外部點選結果頁時,不要紀錄本地得分，以網址後得分為主
page2 = window.performance.navigation.type
// console.log('page2', page2)

// this_page_score_re = /^\?score\=\d+$/;

let this_page_score = location.search.substr(7, 3)
// console.log('this_page_score', this_page_score);

window.addEventListener('pageshow', function () {
    localStorage.removeItem('page')
}
)

// 設定:顯示文字
// --------------------------------------------------
// 設定:當0％時
// if (page2 >= 0) {
// if (this_page_score == null) {
//     this_page_score = 0

// } else if (this_page_score >= 0) {
//     $(".number").html('0<span>%</span>')
//         .next().text('加油好嗎 !')
//     // 設定:當20％時
//     if (this_page_score >= 20) {
//         $(".number").html('20<span>%</span>')
//             .next().text('藍瘦香菇 !')
//             .parent().prev().children().css('animation-name', 'left_circle_20')
//             .parent().prev().children().css('animation-name', 'right_circle_20').addClass('right_circle_g')
//         // 設定:當40％時
//         if (this_page_score >= 40) {
//             $(".number").html('40<span>%</span>')
//                 .next().text('眼花了嗎 !')
//                 .parent().prev().children().css('animation-name', 'left_circle_40')
//                 .parent().prev().children().css('animation-name', 'right_circle_40').addClass('right_circle_g')
//             if (this_page_score >= 60) {
//                 // 設定:當60％時
//                 $(".number").html('60<span>%</span>')
//                     .next().text('剛好及格 !')
//                     .parent().prev().children().css('animation-name', 'left_circle_60')
//                     .parent().prev().children().css('animation-name', 'right_circle_60').addClass('right_circle_g')
//                 // 設定:當80％時
//                 if (this_page_score >= 80) {
//                     $(".number").html('80<span>%</span>')
//                         .next().text('還差一點 !')
//                         .parent().prev().children().css('animation-name', 'left_circle_60')
//                         .parent().prev().children().css('animation-name', 'right_circle_60').addClass('right_circle_g')
//                     // 設定:當100％時
//                     if (this_page_score >= 100) {
//                         $(".number").html('100<span>%</span>').css('color', 'var(--or)').css('letter-spacing', ' -.3rem')
//                             .next().text('品牌達人 !').css('color', 'var(--or)')
//                             .parent().css('padding', '75px 35px')
//                             .prev().children().css('animation-name', 'left_circle_100')
//                             .parent().prev().children().css('animation-name', 'right_circle_100').addClass('right_circle_g')
//                             .parent().parent().addClass('light').addClass('circle_process_100')
//                             .next().next().mouseenter(function () {
//                                 $(this)
//                                     .removeClass('animate__fadeInUp')
//                                     .removeClass('delay15')
//                                     .addClass('animate__heartBeat')
//                                     .addClass('time-075s')
//                                     .text('不需要吧')
//                                 setTimeout(function () {
//                                     $('.answer').
//                                         removeClass('animate__heartBeat')
//                                 }, 750)
//                             })
//                             .mouseleave(function () {
//                                 $(this)
//                                     .addClass('animate__fadeIn')
//                                     .text('偷看答案')
//                                 setTimeout(function () {
//                                     $('.answer')
//                                         .removeClass('animate__fadeIn')
//                                 }, 750)
//                             })
//                     }
//                 }
//             }
//         }
//     }
// }
// }




