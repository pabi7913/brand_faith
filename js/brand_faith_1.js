// 1
// ---------------------

$('.option').click(function () {
    $(this).addClass('selected').siblings().removeClass('selected')
})
// ---------------------
let t = 0;
$('.arrow').eq(0).addClass('invisible')
$('.page').text('1')

// prev
$('.arrow').eq(0).click(function () {
    t = t - 1;
    // ----------
    if (t < 1) {
        t = 0;
        $(this).fadeOut(500).addClass('invisible')
        $('.page').text('1')
    }
    // ----------
    if (t <= 3) {
        $(this).next().css('color', 'var(--wh)')
        $(this).next().find('div').text('next')
        $('.title').find('div').text('uber')
        $('.page').text(t + 1)
        if (t <= 2) {
            $('.title').find('div').text('instagram')
            // $('.page').text(t+1)
            if (t <= 1) {
                $('.title').find('div').text('amazon')
                // $('.page').text(t+1)
                if (t <= 0) {
                    $('.title').find('div').text('chrome')
                    // $('.page').text(t+1)

                }
            }
        }

    }
    // console.log('t', t)
    $('.cards').css('transform', 'translateX' + '(' + t * -90 + 'vw)')
})
if ($(window).width() >= 1057) {
    $('.arrow').eq(0).click(function () {
        $('.cards').css('transform', 'translateX' + '(' + t * -950 + 'px)')
    })
}
$(window).resize(function () {
    if ($(window).width() >= 1057) {
        $('.arrow').eq(0).click(function () {
            $('.cards').css('transform', 'translateX' + '(' + t * -950 + 'px)')
        })
    }
})

// next
$('.arrow').eq(1).click(function () {
    t = t + 1;
    // ----------
    if (t > 0) {
        $('.page').text(t + 1)
        $(this).prev().fadeIn(500).removeClass('invisible')
        if (t >= 1) {
            $('.title').find('div').text('amazon')
            // $('.page').text(t+1)
            if (t >= 2) {
                $('.title').find('div').text('instagram')
                // $('.page').text(t+1)
                if (t >= 3) {
                    $('.title').find('div').text('uber')
                    // $('.page').text(t-1)
                    if (t >= 4) {
                        $('.title').find('div').text('apple')
                        $('.page').text('5')
                    }
                }
            }
        }
    }
    // ----------
    if (t > 3) {
        t = 4;
        $(this).css('color', 'var(--or)')
        $(this).find('div').text('complete')
    }

    // console.log('t', t)
    $('.cards').css('transform', 'translateX' + '(' + t * -90 + 'vw)')
})

if ($(window).width() >= 1057) {
    $('.arrow').eq(1).click(function () {
        $('.cards').css('transform', 'translateX' + '(' + t * -950 + 'px)')
    })
}

$(window).resize(function () {
    if ($(window).width() >= 1057) {
        $('.arrow').eq(1).click(function () {
            $('.cards').css('transform', 'translateX' + '(' + t * -950 + 'px)')
        })
    }
})




