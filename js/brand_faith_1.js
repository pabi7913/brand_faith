// 1
// --------------------------------------------------
let score = 0
// console.log('score', score)
let sum = 0
sum1 = 0
sum2 = 0
sum3 = 0
sum4 = 0
sum5 = 0

// 設定:從結果頁返回時清掉cookie
// --------------------------------------------------
page = window.performance.navigation.type
// console.log('page', page)

localStorage.setItem('page', page)

// 按鈕觸發:page=0
if (page > -1) {

    // 重新整理:page=1
    if (page > 0) {

        // 返回上頁或下頁:page=2
        if (page > 1) {
            localStorage.removeItem('total_score')
            localStorage.removeItem('page')
        }
    }
}

// 設定:點選選項
// --------------------------------------------------
$('.option').click(function () {
    // 結果:點選變白色,圖變大,其餘透白色,圖復原
    $(this).addClass('selected')
        .children().addClass('biger').addClass('time-025s')
        .parent().siblings().removeClass('selected')
        .children().removeClass('biger').removeClass('time-025s')

    // 設定:計算有幾個選項被選取
    selected = $('.selected').length;
    // console.log('selected', selected)

    // 計算selected,集滿5題更改complete連結
    // ---------------------
    if (selected != 5) {
        $('.complete').removeAttr('onclick')
    } else {
        $('.complete').attr("onclick", "location='brand_faith_2.html'")
    }
    score = $(this).data('score')
    // console.log('score', score)
})

// 設定:計分加總
// --------------------------------------------------
$('.options').eq(0).children().click(function () {
    $(this).attr('id', 'selected_1').siblings().removeAttr('id')
    // console.log('score', score)
    sum1 = $('#selected_1').data('score')
    // console.log('sum1', sum1)
})
$('.options').eq(1).children().click(function () {
    $(this).attr('id', 'selected_2').siblings().removeAttr('id')
    // console.log('score', score)
    sum2 = $('#selected_2').data('score')
    // console.log('sum2', sum2)
})
$('.options').eq(2).children().click(function () {
    $(this).attr('id', 'selected_3').siblings().removeAttr('id')
    // console.log('score', score)
    sum3 = $('#selected_3').data('score')
    // console.log('sum3', sum3)
})
$('.options').eq(3).children().click(function () {
    $(this).attr('id', 'selected_4').siblings().removeAttr('id')
    // console.log('score', score)
    sum4 = $('#selected_4').data('score')
    // console.log('sum4', sum4)
})
$('.options').eq(4).children().click(function () {
    $(this).attr('id', 'selected_5').siblings().removeAttr('id')
    // console.log('score', score)
    sum5 = $('#selected_5').data('score')
    // console.log('sum5', sum5)
})

// complete按鈕觸發popup
// --------------------------------------------------
$('.complete').click(function () {
    selected = $('.selected').length;
    sum = sum1 + sum2 + sum3 + sum4 + sum5
    // console.log('sum', sum)
    if (selected != 5) {
        // $('.complete').removeAttr('onclick')
        $('.popup_wrap').removeClass('d-none')
    } else {
        // $('.complete').attr("onclick", "location.href='brand_faith_2.html'")
        $('.popup_wrap').addClass('d-none')
    }
    // 改網址
    // --------------------------------------------------
    if (sum > -1) {
        localStorage.setItem('total_score', '0')
        if (sum > 0) {
            localStorage.setItem('total_score', '20')
            if (sum > 1) {
                localStorage.setItem('total_score', '40')
                if (sum > 2) {
                    localStorage.setItem('total_score', '60')
                    if (sum > 3) {
                        localStorage.setItem('total_score', '80')
                        if (sum > 4) {
                            localStorage.setItem('total_score', '100')
                        }
                    }
                }
            }
        }
    }
})


// 設定:popup按'了解'關閉popup
// --------------------------------------------------
$(".button:contains('了解')").click(function () {
    $('.popup_wrap').addClass('d-none')
})



// '上1題'和'下1題'的選項
// --------------------------------------------------

// -------------------------
// 預設:'上1頁按鈕'第1題沒有出現
$('.arrow').eq(0).addClass('invisible')
// 預設:'頁碼'從第1頁開始
$('.page').text('1')

// 第1題：t=0/第2題：t=1/第3題：t=2/第4題：t=3/第5題：t=4
// -------------------------
// 預設:t為'點選按鈕移動次數'，為0
let click = 0;

// 設定:prev點選'回上1題'
// -------------------------
$('.arrow').eq(0).click(function () {
    // animate__animated animate__flipInY delay05
    // 預設:t=每按1次減少1頁
    click = click - 1;
    // console.log( click , click )

    // 設定:title上下翻牌動畫
    // -------------------------
    $('.title').removeClass('fadein')
        .children().eq(0).addClass('animate__animated').addClass('animate__flipInX')
    setTimeout(function () {
        $('.title').children().eq(0).removeClass('animate__animated').removeClass('animate__flipInX')
    }, 500)

    // 設定:line的動畫
    // -------------------------
    $('.line').css('animation-name', 'stop')
    setTimeout(function () {
        $('.line').css('animation-name', 'line')
    }, 1)

    // 設定:選項翻牌動畫
    // -------------------------
    $('.options').eq(click).children().addClass('animate__animated').addClass('animate__flipInY')
        .parent().next().children().removeClass('animate__animated').removeClass('animate__flipInY')

    // 設定:頁碼換頁動畫
    // -------------------------
    $('.page').addClass('animate__animated').addClass('animate__bounceIn').addClass('time-05')
    setTimeout(function () {
        $('.page').removeClass('animate__animated').removeClass('animate__bounceIn').removeClass('time-05')
    }, 500)


    // ----------
    // !!! if( click < 1) { click = 0}這個順序放在最前面，避免錯誤
    // 條件1:回到第1頁時
    if (click < 1) {
        // 結果1-1:顯示第1區塊，移動0
        click = 0;
        // 結果1-2:prev消失
        $(this).fadeOut(400).addClass('invisible')
        // 結果1-3:頁碼為1
        $('.page').text('1')
    }
    // ----------
    // 條件2:回到第4頁和之前時
    if (click <= 3) {
        // 結果2-1-1:next出現
        $(this).next().removeClass('d-none').addClass('d-flex')
        // 結果2-1-2:complete消失
        $(this).next().next().removeClass('d-flex').addClass('d-none')
        // 結果2-2:第4頁標題改成uber
        $('.title').find('div').text('uber')
        // 結果2-3:頁碼=按鈕移動次數+1(例如第1頁t=0,t+1=1)
        $('.page').text(click + 1)
        // ----------
        // !!!必須用這種巢狀式迴圈+搭配=，不然會造成下蓋上，永遠只有最後一行有用
        // 條件3:回到第3頁和之前時
        if (click <= 2) {
            // 結果3:第3頁標題改成instagram
            $('.title').find('div').text('instagram')
            // 條件4:回到第2頁和之前時
            if (click <= 1) {
                // 結果4:第2頁標題改成amazon
                $('.title').find('div').text('amazon')
                // 條件5:回到第1頁和之前時
                if (click <= 0) {
                    // 結果5:第1頁標題改成chrome
                    $('.title').find('div').text('chrome')
                }
            }
        }
    }
    // ----------
    // !!!此行必須放在最下面，否則會讀不到條件1 if( click < 1) { click = 0}，造成t=-1錯誤
    // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
    $('.cards').css('transform', 'translateX' + '(' + click * -90 + 'vw)')
    if (click < 1) {
        // 結果1-1:顯示第1區塊，移動0
        click = 0;
    }
})

// 設定:prev-rwd
// ---------------
// 1.
// 條件1:視窗尺寸>=601
if ($(window).width() >= 601) {
    // 結果1:設定:prev點選'回上1題'
    $('.arrow').eq(0).click(function () {
        // ???這裡好像會繼承上面的t=t-1設定
        // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
        $('.cards').css('transform', 'translateX' + '(' + click * -540 + 'px)')
    })
    // 條件2:視窗尺寸>=1057
    if ($(window).width() >= 1057) {
        // 結果2:設定:prev點選'回上1題'
        $('.arrow').eq(0).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + click * -950 + 'px)')
        })
    }
}// 否決條件1:視窗尺寸<601
else {
    // 否決結果1:設定:prev點選'回上1題'
    $('.arrow').eq(0).click(function () {
        // ???這裡好像會繼承上面的t=t-1設定
        // 否決結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
        $('.cards').css('transform', 'translateX' + '(' + click * -90 + 'vw)')
    })
}
// ----------
// 2.
// 設定:調整螢幕大小時
$(window).resize(function () {
    // !!!為了解決resize的時候t的寬度會不固定,決定resize時，直接回到第1題
    // ---------------------
    // 預設:t=0
    click = 0;
    // 結果:回到第1題的位置
    $('.cards').css('transform', 'translateX' + '(' + click + ')')
    // 條件0:回到第1頁時
    if (click < 1) {
        // 結果0-1:顯示第1區塊，移動0
        click = 0;
        // 結果0-2-1:prev消失
        $('.arrow').eq(0).fadeOut(400).addClass('invisible')
        // 結果0-2-2:next出現
        $('.arrow').eq(0).next().removeClass('d-none').addClass('d-flex')
        // 結果0-2-3:complete消失
        $('.arrow').eq(0).next().next().removeClass('d-flex').addClass('d-none')

        // 結果0-3:頁碼為1
        $('.page').text('1')
    }
    // ---------------------
    // 條件1:視窗尺寸>=601
    if ($(window).width() >= 601) {
        // 結果1:設定:prev點選'回上1題'
        $('.arrow').eq(0).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + click * -540 + 'px)')
        })
        // 條件2:視窗尺寸>=1057
        if ($(window).width() >= 1057) {
            // 結果2:設定:prev點選'回上1題'
            $('.arrow').eq(0).click(function () {
                // ???這裡好像會繼承上面的t=t-1設定
                // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
                $('.cards').css('transform', 'translateX' + '(' + click * -950 + 'px)')
            })
        }
    }// 否決條件1:視窗尺寸<601
    else {
        // 否決結果1:設定:prev點選'回上1題'
        $('.arrow').eq(0).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 否決結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + click * -90 + 'vw)')
        })
    }
})


// 設定:next點選'到下1題'
// -------------------------
$('.arrow').eq(1).click(function () {
    // 預設:t=每按1次減少1頁
    click = click + 1;
    // console.log( click , click )

    // 設定:title上下翻牌動畫
    // -------------------------
    $('.title').removeClass('fadein')
        .children().eq(0).addClass('animate__animated').addClass('animate__flipInX')
    setTimeout(function () {
        $('.title').children().eq(0).removeClass('animate__animated').removeClass('animate__flipInX')
    }, 500)

    // 設定:line的動畫
    // -------------------------
    $('.line').css('animation-name', 'stop')
    setTimeout(function () {
        $('.line').css('animation-name', 'line')
    }, 1)

    // 設定:選項翻牌動畫
    // -------------------------
    $('.options').eq(click).children().addClass('animate__animated').addClass('animate__flipInY')
        .parent().prev().children().removeClass('animate__animated').removeClass('animate__flipInY').removeClass('delay05')

    // 設定:頁碼換頁動畫
    // -------------------------
    $('.page').addClass('animate__animated').addClass('animate__bounceIn').addClass('time-05')
    setTimeout(function () {
        $('.page').removeClass('animate__animated').removeClass('animate__bounceIn').removeClass('time-05')
    }, 500)


    // ----------
    // 條件1:位於第1頁以上時
    if (click > 0) {
        // 結果1-1:回上頁按鈕要出現
        $(this).prev().fadeIn(100).removeClass('invisible')
        // 結果1-2:頁碼=按鈕移動次數+1(例如第1頁t=0,t+1=1)
        $('.page').text(click + 1)
        // 條件2:位於第2頁以上時
        if (click >= 1) {
            // 結果2:第2頁標題改成amazon
            $('.title').find('div').text('amazon')
            // 條件3:位於第3頁以上時
            if (click >= 2) {
                // 結果3:第3頁標題改成instagram
                $('.title').find('div').text('instagram')
                // 條件4:位於第4頁以上時
                if (click >= 3) {
                    // 結果4:第4頁標題改成uber
                    $('.title').find('div').text('uber')
                    // 條件5:位於第5頁以上時
                    if (click >= 4) {
                        // 結果5-1:第5頁標題改成uber
                        $('.title').find('div').text('apple')
                        // 結果5-2:頁碼為5
                        $('.page').text('5')
                        // 
                    }
                }
            }
        }
    }
    // ----------
    // !!! if( click > 3) { click = 4}這個順序放在前面，避免錯誤
    // 條件6:位於第5頁時
    if (click > 3) {
        // 結果6-1:顯示第5區塊，移動tx4
        click = 4;
        // 結果6-2-1:next消失
        $(this).removeClass('d-flex').addClass('d-none')
        // 結果6-2-2:complete出現
        $(this).next().removeClass('d-none').addClass('d-flex')
    }

    // ----------
    // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
    $('.cards').css('transform', 'translateX' + '(' + click * -90 + 'vw)')
    if (click > 3) {
        // 結果6-1:顯示第5區塊，移動tx4
        click = 4;
    }
    if (click != 5) {
        $('.popup_wrap').addClass('d-none')
    }
})

// 設定:next-rwd
// ---------------
// 1.
// 條件1:視窗尺寸>=601
if ($(window).width() >= 601) {
    // 結果1:設定:next點選'到下1題'
    $('.arrow').eq(1).click(function () {
        // ???這裡好像會繼承上面的t=t-1設定
        // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
        $('.cards').css('transform', 'translateX' + '(' + click * -540 + 'px)')
    })
    // 條件2:視窗尺寸>=1057
    if ($(window).width() >= 1057) {
        // 結果2:設定:next點選'到下1題'
        $('.arrow').eq(1).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + click * -950 + 'px)')
        })
    }
}// 否決條件1:視窗尺寸<601
else {
    // 否決結果1:設定:prev點選'回上1題'
    $('.arrow').eq(1).click(function () {
        // ???這裡好像會繼承上面的t=t-1設定
        // 否決結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
        $('.cards').css('transform', 'translateX' + '(' + click * -90 + 'vw)')
    })
}
// ----------
// 2.
// 設定:調整螢幕大小時
$(window).resize(function () {
    // 條件1:視窗尺寸>=601
    if ($(window).width() >= 601) {
        // 結果1:設定:next點選'到下1題'
        $('.arrow').eq(1).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + click * -540 + 'px)')
        })
        // 條件2:視窗尺寸>=1057
        if ($(window).width() >= 1057) {
            // 結果2:設定:next點選'到下1題'
            $('.arrow').eq(1).click(function () {
                // ???這裡好像會繼承上面的t=t-1設定
                // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
                $('.cards').css('transform', 'translateX' + '(' + click * -950 + 'px)')
            })
        }
    } // 否決條件1:視窗尺寸<601
    else {
        // 否決結果1:設定:next點選'到下1題'
        $('.arrow').eq(1).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + click * -90 + 'vw)')
        })
    }
})
// 設定:回下一頁時清除cookie
// --------------------------------------------------


// window.addEventListener('pagehide', function () {
//     alert("abc")
//         // localStorage.removeItem('total_score')
//     }
















