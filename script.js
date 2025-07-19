const time=document.getElementById('time');
const timeformat=document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',()=>{

    setInterval(showTime,1000);
});

const showTime=()=>{
    let date=new Date(); // everyting day date both and all

    let hr=date.getHours();
    let min=date.getMinutes();
    let secs=date.getSeconds();
    // let milisec=date.getMilliseconds();

    // console.log("hours "+hr+"mins "+min+"secs "+secs);


    // if hr is <10 so it will show 01, 02 like that
    hr=hr<10?`0${hr}`:hr;
    min=hr<10?`0${min}`:min;
    secs=hr<10?`0${secs}`:secs;
    time.innerHTML= `${hr} :${min} : ${secs}`;

    timeformat.innerHTML=hr>12? "PM":"AM";
}