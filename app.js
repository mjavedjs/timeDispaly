let clock=document.querySelector(".clock");
let stopbutton=document.querySelector("#stop");
let rBtn=document.querySelector("#start");


let localTime=setInterval(()=>{
let date=new Date();
clock.innerHTML=date.toLocaleTimeString()
},1000)



stopbutton.addEventListener('click',()=>{
   clearInterval(localTime);
})

rBtn.addEventListener('click',()=>{
    window.location="index.html"
})
