// 1
// --------------------------------------------------
// 設定:點選選項
$('.option').click(function () {
    // 結果:點選變白色，其餘透白色
    $(this).addClass('selected').siblings().removeClass('selected')
})
// --------------------------------------------------

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
let t = 0;


// 設定:prev點選'回上1題'
// -------------------------
$('.arrow').eq(0).click(function () {
    // 預設:t=每按1次減少1頁
    t = t - 1;
    // console.log('t', t)

    // ----------
    // !!! if(t < 1) {t = 0}這個順序放在最前面，避免錯誤
    // 條件1:回到第1頁時
    if (t < 1) {
        // 結果1-1:顯示第1區塊，移動0
        t = 0;
        // 結果1-2:prev消失
        $(this).fadeOut(400).addClass('invisible')
        // 結果1-3:頁碼為1
        $('.page').text('1')
    }
    // ----------
    // 條件2:回到第4頁和之前時
    if (t <= 3) {
        // 結果2-1:complete改回白色,next
        $(this).next().css('color', 'var(--wh)').find('div').text('next')
        // 結果2-2:第4頁標題改成uber
        $('.title').find('div').text('uber')
        // 結果2-3:頁碼=按鈕移動次數+1(例如第1頁t=0,t+1=1)
        $('.page').text(t + 1)
        // ----------
        // !!!必須用這種巢狀式迴圈+搭配=，不然會造成下蓋上，永遠只有最後一行有用
        // 條件3:回到第3頁和之前時
        if (t <= 2) {
            // 結果3:第3頁標題改成instagram
            $('.title').find('div').text('instagram')
            // 條件4:回到第2頁和之前時
            if (t <= 1) {
                // 結果4:第2頁標題改成amazon
                $('.title').find('div').text('amazon')
                // 條件5:回到第1頁和之前時
                if (t <= 0) {
                    // 結果5:第1頁標題改成chrome
                    $('.title').find('div').text('chrome')
                }
            }
        }
    }
    // ----------
    // !!!此行必須放在最下面，否則會讀不到條件1 if(t < 1) {t = 0}，造成t=-1錯誤
    // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
    $('.cards').css('transform', 'translateX' + '(' + t * -90 + 'vw)')
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
        $('.cards').css('transform', 'translateX' + '(' + t * -540 + 'px)')
    })
    // 條件2:視窗尺寸>=1057
    if ($(window).width() >= 1057) {
        // 結果2:設定:prev點選'回上1題'
        $('.arrow').eq(0).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + t * -950 + 'px)')
        })
    }
}// 否決條件1:視窗尺寸<601
else {
    // 否決結果1:設定:prev點選'回上1題'
    $('.arrow').eq(0).click(function () {
        // ???這裡好像會繼承上面的t=t-1設定
        // 否決結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
        $('.cards').css('transform', 'translateX' + '(' + t * -90 + 'vw)')
    })
}
// ----------
// 2.
// 設定:調整螢幕大小時
$(window).resize(function () {
    // !!!為了解決resize的時候t的寬度會不固定,決定resize時，直接回到第1題
    // 預設:t=0
    t = 0;
    // 結果:回到第1題的位置
    $('.cards').css('transform', 'translateX' + '(' + t + ')')
    // 條件0:回到第1頁時
    if (t < 1) {
        // 結果0-1:顯示第1區塊，移動0
        t = 0;
        // 結果0-2:prev消失,complete改回白色,next
        $('.arrow').eq(0).fadeOut(400).addClass('invisible')
        .next().css('color', 'var(--wh)').find('div').text('next');
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
            $('.cards').css('transform', 'translateX' + '(' + t * -540 + 'px)')
        })
        // 條件2:視窗尺寸>=1057
        if ($(window).width() >= 1057) {
            // 結果2:設定:prev點選'回上1題'
            $('.arrow').eq(0).click(function () {
                // ???這裡好像會繼承上面的t=t-1設定
                // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
                $('.cards').css('transform', 'translateX' + '(' + t * -950 + 'px)')
            })
        }
    }// 否決條件1:視窗尺寸<601
    else {
        // 否決結果1:設定:prev點選'回上1題'
        $('.arrow').eq(0).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 否決結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + t * -90 + 'vw)')
        })
    }
})


// 設定:next點選'到下1題'
// -------------------------
$('.arrow').eq(1).click(function () {
    // 預設:t=每按1次減少1頁
    t = t + 1;
    // console.log('t', t)

    // ----------
    // 條件1:位於第1頁以上時
    if (t > 0) {
        // 結果1-1:回上頁按鈕要出現
        $(this).prev().fadeIn(100).removeClass('invisible')
        // 結果1-2:頁碼=按鈕移動次數+1(例如第1頁t=0,t+1=1)
        $('.page').text(t + 1)
        // 條件2:位於第2頁以上時
        if (t >= 1) {
            // 結果2:第2頁標題改成amazon
            $('.title').find('div').text('amazon')
            // 條件3:位於第3頁以上時
            if (t >= 2) {
                // 結果3:第3頁標題改成instagram
                $('.title').find('div').text('instagram')
                // 條件4:位於第4頁以上時
                if (t >= 3) {
                    // 結果4:第4頁標題改成uber
                    $('.title').find('div').text('uber')
                    // 條件5:位於第5頁以上時
                    if (t >= 4) {
                        // 結果5-1:第5頁標題改成uber
                        $('.title').find('div').text('apple')
                        // 結果5-2:頁碼為5
                        $('.page').text('5')
                    }
                }
            }
        }
    }
    // ----------
    // !!! if(t > 3) {t = 4}這個順序放在前面，避免錯誤
    // 條件6:位於第5頁時
    if (t > 3) {
        // 結果6-1:顯示第5區塊，移動tx4
        t = 4;
        // 結果6-2:next文字改為complete
        $(this).css('color', 'var(--or)').find('div').text('complete')
    }
    // ----------
    // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
    $('.cards').css('transform', 'translateX' + '(' + t * -90 + 'vw)')
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
        $('.cards').css('transform', 'translateX' + '(' + t * -540 + 'px)')
    })
    // 條件2:視窗尺寸>=1057
    if ($(window).width() >= 1057) {
        // 結果2:設定:next點選'到下1題'
        $('.arrow').eq(1).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + t * -950 + 'px)')
        })
    }
}// 否決條件1:視窗尺寸<601
else {
    // 否決結果1:設定:prev點選'回上1題'
    $('.arrow').eq(1).click(function () {
        // ???這裡好像會繼承上面的t=t-1設定
        // 否決結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
        $('.cards').css('transform', 'translateX' + '(' + t * -90 + 'vw)')
    })
}
// ----------
// 2.
// 設定:調整螢幕大小時
$(window).resize(function () {
    // !!!為了解決resize的時候t的寬度會不固定,決定resize時，直接回到第1題
    // 預設:t=0
    t = 0;
    // 結果:回到第1題的位置
    $('.cards').css('transform', 'translateX' + '(' + t + ')')
    // 條件0:回到第1頁時
    if (t < 1) {
        // 結果0-1:顯示第1區塊，移動0
        t = 0;
        // 結果0-2:prev消失,complete改回白色,next
        $('.arrow').eq(0).fadeOut(400).addClass('invisible')
        .next().css('color', 'var(--wh)').find('div').text('next');
        // 結果0-3:頁碼為1
        $('.page').text('1')
    }
    // ---------------------
    // 條件1:視窗尺寸>=601
    if ($(window).width() >= 601) {
        // 結果1:設定:next點選'到下1題'
        $('.arrow').eq(1).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + t * -540 + 'px)')
        })
        // 條件2:視窗尺寸>=1057
        if ($(window).width() >= 1057) {
            // 結果2:設定:next點選'到下1題'
            $('.arrow').eq(1).click(function () {
                // ???這裡好像會繼承上面的t=t-1設定
                // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
                $('.cards').css('transform', 'translateX' + '(' + t * -950 + 'px)')
            })
        }
    } // 否決條件1:視窗尺寸<601
    else {
        // 否決結果1:設定:next點選'到下1題'
        $('.arrow').eq(1).click(function () {
            // ???這裡好像會繼承上面的t=t-1設定
            // 結果:卡片移動距離=點選按鈕移動次數x裡面個別card寬度
            $('.cards').css('transform', 'translateX' + '(' + t * -90 + 'vw)')
        })
    }
})





