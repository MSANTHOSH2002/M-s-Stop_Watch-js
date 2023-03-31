window.onload= function()
{
    var tens="00";
    var seconds="00";
    var tens1=document.getElementById("tens"); 
    var seconds1=document.getElementById("seconds"); 
    var start1=document.getElementById("start");
    var stop1=document.getElementById("stop");
    var reset1=document.getElementById("reset"); 
    var interval;   
    start1.onclick=function()
    {
        clearInterval(interval);
        interval=setInterval(startTimer,10); 
    }   
    stop1.onclick=function()
    {
        clearInterval(interval);
    }    
    reset1.onclick=function()
    {
        clearInterval(interval);
        tens="00";
        seconds="00";  
        tens1.innerHTML=tens;
        seconds1.innerHTML=seconds;

    }  
    function startTimer()
    { 
        tens++;
        if(tens<=9)
        {
            tens1.innerHTML="0"+tens;
        }  
        if(tens>9)
        {
            tens1.innerHTML=tens;
        }  
        if(tens>99)
        {
            seconds++;     
            seconds1.innerHTML="0"+seconds;
            tens=0;
           tens1.innerHTML="0"+0;
        }       
        if(seconds>9)
        {
            seconds1.innerHTML=seconds;
        }
    }
}
