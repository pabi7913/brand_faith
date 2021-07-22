// 設定:尋找網址
// --------------------------------------------------
let url = location.hash
// console.log('url', url);

// 設定:分數=網址最後2字
// --------------------------------------------------
let score = url.substr(1, 3);
// console.log('score', score);
$('.number').html(score + '<span>%</span>');
// 設定:點選玩其他的slick
let other_click = 0

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
// 設定:當100％時
$(".number:contains('100')")
    .html('100<span>%</span>')
    .css('color', 'var(--or)')
    .css('letter-spacing', ' -.3rem')
    .next()
    .text('品牌達人 !')
    .css('color', 'var(--or)')
    .parent()
    .css('padding', '75px 35px')
    .prev()
    .children()
    .css('animation-name', 'left_circle_100')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'right_circle_100')
    .addClass('right_circle_g')
    .parent()
    .parent()
    .addClass('light')
    .addClass('circle_process_100')
    .next()
    .next()
    .mouseenter(function () {
        $(this)
            .removeClass('animate__fadeInUp')
            .removeClass('delay15')
            .addClass('animate__heartBeat')
            .addClass('time-075s')
            .text('不需要吧');
        setTimeout(function () {
            $('.answer').removeClass('animate__heartBeat');
        }, 750);
    })
    .mouseleave(function () {
        $(this).addClass('animate__fadeIn').text('偷看答案');
        setTimeout(function () {
            $('.answer').removeClass('animate__fadeIn');
        }, 750);
    });

// 設定:當80％時
$(".number:contains('80')")
    .next()
    .text('還差一點 !')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'left_circle_80')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'right_circle_80')
    .addClass('right_circle_g');
// 設定:當60％時
$(".number:contains('60')")
    .next()
    .text('剛好及格 !')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'left_circle_60')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'right_circle_60')
    .addClass('right_circle_g');
// 設定:當40％時
$(".number:contains('40')")
    .next()
    .text('眼花了嗎 !')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'left_circle_40')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'right_circle_40')
    .addClass('right_circle_g');
// 設定:當20％時
$(".number:contains('20')")
    .next()
    .text('藍瘦香菇 !')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'left_circle_20')
    .parent()
    .prev()
    .children()
    .css('animation-name', 'right_circle_20')
    .addClass('right_circle_g');
// 設定:當0％時,最前面
$(".number:contains('_0')").html('0<span>%</span>').next().text('加油好嗎 !');


// 設定:按再試一次時清除cookie
// --------------------------------------------------
$('.button').click(function () {
    // localStorage.removeItem('total_score')
    // localStorage.removeItem('page')
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
    let fb = '<div class="fb-like" onclick="remove_score()" data-url="' + this_page + '"data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>';
    let line = '<div class="line-it-button" onclick="remove_score()" data-lang="zh_Hant" data-type="share-a" data-ver="3" data-url="' + this_page + '" data-color="default" data-size="small" data-count="true" style="display: none;"></div>';
    let twitter = '<a onclick="remove_score()" href="https://twitter.com/share" class="twitter-share-button">Tweet</a>';

    // 設定外包group
    let share_buttons =
        '<ul class="share_buttons mx-auto">' +
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
// 設定:按玩別的跳出popup
// --------------------------------------------------
$('.other').click(function () {
    $('.other_game_wrap')
        .removeClass('d-none')
        .addClass('animate__bounceIn')
        .removeClass('time-05s')
        .removeClass('animate__fadeOut')
    $('.game').eq(0)
        .removeAttr('onclick')
        .unbind('mouseenter')
        .unbind('mouseleave')
        .css('cursor', 'unset')
    $('.game').eq(3)
        .removeAttr('onclick')
        .unbind('mouseenter')
        .unbind('mouseleave')
        .css('cursor', 'unset')
    $('.game').eq(1)
        .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
            $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
        }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
    $('.game').eq(2)
        .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
            $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
        }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
    other_click = 0
    console.log('open', other_click)
})

// 設定:按下次再說關閉視窗
// --------------------------------------------------
$('.closee').click(function () {
    $('.other_game_wrap')
        .addClass('animate__fadeOut')
        .addClass('time-05s')
        .removeClass('animate__bounceIn')
    setTimeout(function () {
        $('.other_game_wrap')
            .addClass('d-none')
        $('.games').removeAttr('style')
    }, 500)
})

// 箭頭slick
// 1.
// 條件1:視窗尺寸>=1001
if ($(window).width() >= 1001) {
    // other_click = 0
    // 設定:按左箭頭左移
    // --------------------------------------------------
    $('.arrow').eq(0).click(function () {
        other_click = other_click - 1
        if (other_click < -1) {
            other_click = 0
        }
        // console.log('left_click', other_click)
        $('.games').css('transform', 'translateX' + '(' + other_click * -11 + 'vw)')
        switch (other_click) {
            // 設定:預設中間2個可點選有效果
            case 0:
                // console.log('0')
                $('.game').eq(0)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(3)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(1)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                $('.game').eq(2)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                break;
            case -1:
                // console.log('-1')
                $('.game').eq(2)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(3)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(0)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                $('.game').eq(1)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                break;
        }
    })
    // 設定:按右箭頭右移
    // --------------------------------------------------
    $('.arrow').eq(1).click(function () {
        other_click = other_click + 1
        // console.log('right_click', other_click)
        $('.games').css('transform', 'translateX' + '(' + other_click * -11 + 'vw)')

        switch (other_click) {
            // 設定:預設中間2個可點選有效果
            case 0:
                // console.log('0')
                $('.game').eq(0)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(3)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(1)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                $('.game').eq(2)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                break;
            case 1:
                // console.log('1')
                $('.game').eq(0)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(1)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(2)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                $('.game').eq(3)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                break;
        }
        if (other_click > 0) {
            other_click = -1
        }
    })
} else {
    // other_click = 0
    // 設定:按左箭頭左移
    // --------------------------------------------------
    $('.arrow').eq(0).click(function () {
        other_click = other_click - 1
        if (other_click < -1) {
            other_click = 0
        }
        // console.log('left_click', other_click)
        $('.games').css('transform', 'translateX' + '(' + other_click * -120 + 'px)')
        switch (other_click) {
            // 設定:預設中間2個可點選有效果
            case 0:
                // console.log('0')
                $('.game').eq(0)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(3)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(1)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                $('.game').eq(2)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                break;
            case -1:
                // console.log('-1')
                $('.game').eq(2)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(3)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(0)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                $('.game').eq(1)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                break;
        }
    })
    // 設定:按右箭頭右移
    // --------------------------------------------------
    $('.arrow').eq(1).click(function () {
        other_click = other_click + 1
        // console.log('right_click', other_click)
        $('.games').css('transform', 'translateX' + '(' + other_click * -120 + 'px)')

        switch (other_click) {
            // 設定:預設中間2個可點選有效果
            case 0:
                // console.log('0')
                $('.game').eq(0)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(3)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(1)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                $('.game').eq(2)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                break;
            case 1:
                // console.log('1')
                $('.game').eq(0)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(1)
                    .removeAttr('onclick')
                    .unbind('mouseenter')
                    .unbind('mouseleave')
                    .css('cursor', 'unset')

                $('.game').eq(2)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                $('.game').eq(3)
                    .attr('onclick', "location.href='https://www.google.com.tw'").css('cursor', 'pointer').mouseenter(function () {
                        $(this).css('filter', 'drop-shadow(0px 0px 5px rgba(50, 125, 215, 1))').css('transform', 'scale(1.05)')
                    }).mouseleave(function () { $(this).css('filter', 'unset').css('transform', 'scale(1)') })
                break;
        }
        if (other_click > 0) {
            other_click = -1
        }
    })
}

// ???無法rwd，resize時無法slick
// 2.
// 設定:調整螢幕大小時
$(window).resize(function () {
    // 先歸0
    other_click = 0
    // $('.games').removeAttr('style')
    console.log('to', other_click)
    // $('.games').css('transform', 'translateX' + '(' + other_click + ')')

    // ------------------------------
    if ($(window).width() >= 1001) {
        $('.arrow').eq(0).click(function () {
            other_click = other_click - 1
            // if (other_click < -1) {
            //     other_click = 0
            // }
            console.log('left_click', other_click)
            $('.games').css('transform', 'translateX' + '(' + other_click * -11 + 'vw)')
        })
        $('.arrow').eq(1).click(function () {
            other_click = other_click + 1
            console.log('right_click', other_click)
            $('.games').css('transform', 'translateX' + '(' + other_click * -11 + 'vw)')
            if (other_click > 0) {
                other_click = -1
            }
        }) 
    }
    else {
        $('.arrow').eq(0).click(function () {
            other_click = other_click - 1
            if (other_click < -1) {
                other_click = 0
            }
            console.log('left_click', other_click)
            $('.games').css('transform', 'translateX' + '(' + other_click * -120 + 'px)')
        })
        $('.arrow').eq(1).click(function () {
            other_click = other_click + 1
            console.log('right_click', other_click)
            $('.games').css('transform', 'translateX' + '(' + other_click * -120 + 'px)')
            if (other_click > 0) {
                other_click = -1
            }
        })
    }
})









