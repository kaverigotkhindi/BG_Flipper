let fruit_list=['orange','banana','grapes','apple','mango','guava','watermelon','cherry'];

let fruit=prompt('What fruit are you looking for ?');

function fruit_availability(fruit){
if(fruit_list.indexOf(fruit)!=-1) 
document.getElementById('someText').innerHTML=fruit+'  is available'
else 
document.getElementById('someText').innerHTML='Sorry! '+fruit+'  is not available' ;

}

fruit_availability(fruit);