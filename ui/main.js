//old code is multiline commented
/*console.log('Loaded!');

//change content of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Hello World!';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = '100px';
};*/
//Counter code
var counter =0;
var button = document.getElementById('counter');
button.onclick = function(){
    //make request to counter endpoint
    //capture response and store it in a variable
    //render the variable in correct span
    counter =counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}