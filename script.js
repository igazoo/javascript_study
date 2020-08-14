'use strict'

const lang = document.querySelector('html').lang;//document.querySelectorメソッドは()内に書かれたセレクタにマッチする要素を取得する
//セレクタとはcssのセレクタです
//つまりhtmlタグと一致する要素を取得

if (lang === 'ja') {
    document.querySelector('option[value= "index.html"]').selected = true;//optionタグのvalueが"index.html"であるものにマッチする、そしてselectedをtrueにし最初に設定されているようにする
} else if (lang === 'en') {
    document.querySelector('option[value = "index-en.html"]').selected = true;
} else if (lang === 'zh') {
    document.querySelector('option[value="index-zh.html"]').selected = true;
}

document.getElementById('form').select.onchange = function () {
    location.href = document.getElementById('form').select.value;
}