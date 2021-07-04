// 尋找網址
let url = location.href;
// console.log('url',url)

// 設定:分數=網址最後2字
let score = url.substr(-2,2)
$('.number').html(score+'<span>%</span>')

// 設定:當100％時,最前面+1
$(".number:contains('00')").html('100<span>%</span>')
