






































































































































































































function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
 document.querySeletor(".second-hand").style.transform= `rotate(${secondDegrees}deg)`
var secondDom = document.querySeletor(".second-hand")
 console.log(secondsDegrees)    

//how do you make the seconds hand move
    
    //hour equation
    //minute equation
}
//pass setDate and we are going to run it every 1 second
  setInterval(setDate, 1000);
  setDate();


Add CommentCollapse 