// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function (){
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function(){
     if (req.readyState === XMLHttprequest.DONE){
         // take some action
         if (req.status ===  200){
             var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();

         }
         
     }  
     // else not done yet
    };
    
    // make the request
    request.open('GET','http.sri-sunku.imad.hasura-ap.io',true);
    request.send(null);
    
    
       
};