var hr=0;
var min=0;
var sec=0;
var count=0;

var timer=false;

function start(){
   if(timer==true)
   return;

   timer=true; 
   stopwatch();
}

function stop(){
    timer=false;
}

function reset(){
    hr=0,min=0,sec=0,count=0;
    timer=false;
    document.getElementById('hr').innerHTML='00';  
    document.getElementById('min').innerHTML='00';  
    document.getElementById('sec').innerHTML='00';   
    document.getElementById('count').innerHTML='00';
}

function stopwatch(){
   if(timer==true)
     count=count+1;

    if(count==100)
     {sec=sec+1;
       count=0;}

    if(sec==60)
    { min=min+1;
    sec=0;}

    if(min==60)
    {hr=hr+1;
    min=0;sec=0;}
    
    let hrStr=hr;
    let minStr=min;
    let secStr=sec;
    let countStr=count;

    if(hr<10)
    hrStr='0'+ hrStr;

    if(min<10)
    minStr='0'+ minStr;

    if(sec<10)
    secStr='0'+ secStr;

    if(count<10)
    countStr='0'+ countStr;
    
    document.getElementById('hr').innerHTML=hrStr;  
    document.getElementById('min').innerHTML=minStr;  
    document.getElementById('sec').innerHTML=secStr;   
    document.getElementById('count').innerHTML=countStr;
    setTimeout("stopwatch()", 10);

}