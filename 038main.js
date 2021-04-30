const today = new Date();

document.querySelector('#main').innerHTML = `<h1>今日${today.getMonth()+1}/${today.getDate()}の天気</h1><p>東京は、晴れでしょう</p>`;