const para=document.getElementById("aman");
const head =document.createElement("h1")

setInterval(()=>{
    const time=new Date().toLocaleTimeString();
    para.innerHTML=time;
    
     head.innerHTML=time;
     document.body.appendChild(head);


},1000);