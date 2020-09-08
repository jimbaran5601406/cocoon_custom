//ここに追加したいJavaScript、jQueryを記入してください。
//このJavaScriptファイルは、親テーマのJavaScriptファイルのあとに呼び出されます。
//JavaScriptやjQueryで親テーマのjavascript.jsに加えて関数を記入したい時に使用します。

/**
 *任意の長さで文字列を省略するします。
 *@param {String} str
 *@param {Number} len
 *@return {String}
 */
function truncate(str, len) {
    return str.length <= len ? str : (str.substr(0, len) + "...");
}

// card-titleをクラス名に持つ要素の文字列を45文字で切り捨てる。
(function() {
    let cardsTitle = Array.from(document.getElementsByClassName('card-title'));
    cardsTitle.forEach(cardTitle => {
        cardTitle.innerHTML = truncate(cardTitle.innerHTML, 45);
    });
}());