console.log('Loaded!');

//change content of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Hello World!';

//Move the image
var img = document.getElementById('madi');
img.onClick = function() {
    img.style.marginleft = '100px';
};