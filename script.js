






































































































































































































function setSeconds() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
 document.querySelector(".second-hand").style.transform=`rotate(${secondsDegrees}deg)`

 console.log(secondsDegrees)    

//how do you make the seconds hand move
    
    //hour equation
  
 
 //minute equation
   
}
//pass setDate and we are going to run it every 1 second
  


function setHours() {
    const now = new Date();
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
 document.querySelector(".hour-hand").style.transform=`rotate(${hoursDegrees}deg)`
}



function setMinutes() {
    const now = new Date();
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
 document.querySelector(".minute-hand").style.transform=`rotate(${minutesDegrees}deg)`

}


setInterval(setSeconds, 1000);
setInterval(setHours, 3600000);
setInterval(setMinutes, 60000);
  setSeconds();
  setMinutes();
  setHours();