var flag=0;
function arrowFun(x)
{  flag+=x;
   controller(flag);
}

function controller(num) {
const slide=document.getElementsByClassName('slide');

if(num==slide.length){

    num=0;
    flag=0;
}

if(num<0){
    num=slide.length-1;
    flag=slide.length-1;
}

for(let y of slide)
y.style.display='none';

slide[num].style.display='block';

} 