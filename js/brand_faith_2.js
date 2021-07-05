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
$(".number:contains('00')").html('100<span>%</span>')
.next().text('品牌達人!')
.parent().prev().children().css('animation-name','left_circle_100')
.parent().prev().children().css('animation-name','right_circle_100')
// 設定:當80％時
$(".number:contains('80')")
.next().text('還差一點！')
.parent().prev().children().css('animation-name','left_circle_80')
.parent().prev().children().css('animation-name','right_circle_80')
// 設定:當60％時
$(".number:contains('60')").next().text('剛好及格！')
.parent().prev().children().css('animation-name','left_circle_60')
.parent().prev().children().css('animation-name','right_circle_60')
// 設定:當40％時
$(".number:contains('40')").next().text('眼花了嗎！')
.parent().prev().children().css('animation-name','left_circle_40')
.parent().prev().children().css('animation-name','right_circle_40')
// 設定:當20％時
$(".number:contains('20')").next().text('藍瘦香菇！')
.parent().prev().children().css('animation-name','left_circle_20')
.parent().prev().children().css('animation-name','right_circle_20')
// 設定:當0％時,最前面
$(".number:contains('ml')").html('0<span>%</span>')
.next().text('加油好嗎！')
