// 尋找網址
// --------------------------------------------------
let url = location.href;
// console.log('url',url)

// 設定:分數=網址最後2字
// --------------------------------------------------
let score = url.substr(-2,2)
$('.number').html(score+'<span>%</span>')

// 設定:顯示文字
// --------------------------------------------------
// 設定:當100％時,最前面+1
$(".number:contains('00')").html('100<span>%</span>').css('color','var(--or)')
.next().text('品牌達人!').css('color','var(--or)')
.parent().prev().children().css('animation-name','left_circle_100')
.parent().prev().children().css('animation-name','right_circle_100').addClass('right_circle_g')
.parent().parent().addClass('light').addClass('circle_process_100')

// 設定:當80％時
$(".number:contains('80')")
.next().text('還差一點！')
.parent().prev().children().css('animation-name','left_circle_80')
.parent().prev().children().css('animation-name','right_circle_80').addClass('right_circle_g')
// 設定:當60％時
$(".number:contains('60')").next().text('剛好及格！')
.parent().prev().children().css('animation-name','left_circle_60')
.parent().prev().children().css('animation-name','right_circle_60').addClass('right_circle_g')
// 設定:當40％時
$(".number:contains('40')").next().text('眼花了嗎！')
.parent().prev().children().css('animation-name','left_circle_40')
.parent().prev().children().css('animation-name','right_circle_40').addClass('right_circle_g')
// 設定:當20％時
$(".number:contains('20')").next().text('藍瘦香菇！')
.parent().prev().children().css('animation-name','left_circle_20')
.parent().prev().children().css('animation-name','right_circle_20').addClass('right_circle_g')
// 設定:當0％時,最前面
$(".number:contains('ml')").html('0<span>%</span>')
.next().text('加油好嗎！')

// 設定:看解答
// --------------------------------------------------
let click = 0

$('.answer').click(function(){
    $('.cards').removeClass('d-none')
    
    if(click>0){
        $(this).removeClass('animate__fadeInUp')
        $('.cards').children().removeClass('height').removeClass('animate__bounceInUp').addClass('width').children().fadeOut(500).removeClass('d-block')
        setTimeout(function () {
            $('.cards').children().children().fadeIn(1).addClass('d-block')
            .attr('src','img/amazon-2.png')
        }, 500)
        if(click>1){
            $('.cards').children().removeClass('width').addClass('height').children().fadeOut(500).removeClass('d-block')
            setTimeout(function () {
                $('.cards').children().children().fadeIn(1).addClass('d-block')
                .attr('src','img/instagram-3.png')
            }, 500)
            if(click>2){
                $('.cards').children().removeClass('height').addClass('width').children().fadeOut(500).removeClass('d-block')
                setTimeout(function () {
                    $('.cards').children().children().fadeIn(1).addClass('d-block')
                    .attr('src','img/uber-4.png')
                }, 500)
                if(click>3){
                    $('.cards').children().removeClass('width').addClass('height').children().fadeOut(500).removeClass('d-block')
                    setTimeout(function () {
                        $('.cards').children().children().fadeIn(1).addClass('d-block')
                        .attr('src','img/apple-1.png')
                    }, 500)
                    if (click>4){
                        click =0
                        $('.cards').addClass('animate__fadeOutDown').fadeOut().children().children().addClass('d-block')
                        .attr('src','img/chrome-1.png')
                    }
                }
            } 
        } 
    }
    click =click+ 1
    console.log('click',click)
})