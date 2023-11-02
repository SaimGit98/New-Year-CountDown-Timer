let daybox = document.getElementById("day")
let expectingDate = new Date("1,January,2024 00:00:00").getTime();
console.log(expectingDate);
let x = setInterval(function(){
   let now = new Date().getTime();
   let distance = expectingDate - now ;

   var days = Math.floor(distance /(1000 * 60 * 60  *24));
   var hours = Math.floor((distance % (1000 * 60 * 60  * 24)) /  (1000 * 60 * 60));
   var minutes = Math.floor((distance % ( 1000 * 60 * 60 )) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60 )) / 1000);
 
   document.getElementById("day").innerHTML = days;
   document.getElementById("hours").innerHTML = hours ;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;
} , 1000)
