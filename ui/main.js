console.log('Loaded!');

//change content of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Hello World';

//Move the image
var img = document.getElementById('dragoon');
img.onclick = function(){
    img.style.marginleft = '1000px';
};