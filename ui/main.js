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
var button = document.getElementById('counter');
button.onclick = function(){
     
    //create a request object
    var request = new XMLHttpRequest();
    
    
    //capture response and store it in a variable
    request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE) {
           //take some action
           if(request.status === 200){
               var counter = request.responeText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       }
       //not done yet
    };
    
    //make the request
    request.open('GET','http://taherkd.imad.hasura-app.io/counter', true);
    request.send(null);

};