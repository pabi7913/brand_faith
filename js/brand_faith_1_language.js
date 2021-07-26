// 設定：取出上頁的語系
// --------------------------------------------------
let language = localStorage.getItem('selected_language')
// console.log('language', language) 
// 設定：改語言
// --------------------------------------------------
switch (language) {
    default:
        $('.arrow:contains(prev)')
        .html("<i class='fas fa-chevron-left mr-2 pt-1'></i><div class='pt-1'>prev</div>")
        $('.arrow:contains(next)')
        .html("<div class='pt-1 pr-2'>next</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
        $('.arrow:contains(complete)')
        .html("<div class='pt-1 pr-2'>complete</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
        break;

    case 'jp':
        $('.arrow:contains(prev)')
        .html("<i class='fas fa-chevron-left mr-2 pt-1'></i><div class='pt-1'>前へ</div>")
        $('.arrow:contains(next)')
        .html("<div class='pt-1 pr-2'>次へ</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
        $('.arrow:contains(complete)')
        .html("<div class='pt-1 pr-2'>完了</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
        break;

    case 'cn':
        $('.arrow:contains(prev)')
        .html("<i class='fas fa-chevron-left mr-2 pt-1'></i><div class='pt-1'>上一題</div>")
        $('.arrow:contains(next)')
        .html("<div class='pt-1 pr-2'>下一題</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
        $('.arrow:contains(complete)')
        .html("<div class='pt-1 pr-2'>完成</div><i class='fas fa-chevron-right mr-2 pt-1'></i>")
        break;
}
